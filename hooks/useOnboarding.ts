"use client"

import { useState, useCallback } from 'react'
import type { OnboardingState, OnboardingStep, AccountType, KYCTier, User } from '@/lib/types'

const initialSteps: OnboardingStep[] = [
  {
    id: 'welcome',
    title: 'Welcome',
    description: 'Choose your account type',
    isCompleted: false,
    isActive: true,
  },
  {
    id: 'auth',
    title: 'Authentication',
    description: 'Sign up or sign in',
    isCompleted: false,
    isActive: false,
  },
  {
    id: 'verification',
    title: 'Verification',
    description: 'Verify your email and phone',
    isCompleted: false,
    isActive: false,
  },
  {
    id: 'kyc',
    title: 'Identity Verification',
    description: 'Complete KYC process',
    isCompleted: false,
    isActive: false,
  },
  {
    id: 'profile',
    title: 'Profile Setup',
    description: 'Complete your profile',
    isCompleted: false,
    isActive: false,
  },
]

const initialState: OnboardingState = {
  currentStep: 0,
  totalSteps: initialSteps.length,
  steps: initialSteps,
  userData: {},
  kycTier: 'tier0',
}

export function useOnboarding() {
  const [state, setState] = useState<OnboardingState>(initialState)

  const updateUserData = useCallback((data: Partial<User>) => {
    setState(prev => ({
      ...prev,
      userData: { ...prev.userData, ...data }
    }))
  }, [])

  const setAccountType = useCallback((accountType: AccountType) => {
    setState(prev => ({
      ...prev,
      accountType,
      userData: { ...prev.userData, account_type: accountType }
    }))
  }, [])

  const setKYCTier = useCallback((tier: KYCTier) => {
    setState(prev => ({
      ...prev,
      kycTier: tier,
      userData: { ...prev.userData, kyc_tier: tier }
    }))
  }, [])

  const nextStep = useCallback(() => {
    setState(prev => {
      if (prev.currentStep >= prev.totalSteps - 1) return prev
      
      const newSteps = prev.steps.map((step, index) => ({
        ...step,
        isCompleted: index < prev.currentStep + 1,
        isActive: index === prev.currentStep + 1,
      }))

      return {
        ...prev,
        currentStep: prev.currentStep + 1,
        steps: newSteps,
      }
    })
  }, [])

  const prevStep = useCallback(() => {
    setState(prev => {
      if (prev.currentStep <= 0) return prev
      
      const newSteps = prev.steps.map((step, index) => ({
        ...step,
        isCompleted: index < prev.currentStep - 1,
        isActive: index === prev.currentStep - 1,
      }))

      return {
        ...prev,
        currentStep: prev.currentStep - 1,
        steps: newSteps,
      }
    })
  }, [])

  const goToStep = useCallback((stepIndex: number) => {
    setState(prev => {
      if (stepIndex < 0 || stepIndex >= prev.totalSteps) return prev
      
      const newSteps = prev.steps.map((step, index) => ({
        ...step,
        isCompleted: index < stepIndex,
        isActive: index === stepIndex,
      }))

      return {
        ...prev,
        currentStep: stepIndex,
        steps: newSteps,
      }
    })
  }, [])

  const completeStep = useCallback((stepIndex: number) => {
    setState(prev => {
      const newSteps = prev.steps.map((step, index) => ({
        ...step,
        isCompleted: index <= stepIndex,
        isActive: index === stepIndex + 1,
      }))

      return {
        ...prev,
        steps: newSteps,
      }
    })
  }, [])

  const resetOnboarding = useCallback(() => {
    setState(initialState)
  }, [])

  const getCurrentStep = useCallback(() => {
    return state.steps[state.currentStep]
  }, [state.currentStep, state.steps])

  const getProgress = useCallback(() => {
    const completedSteps = state.steps.filter(step => step.isCompleted).length
    return (completedSteps / state.totalSteps) * 100
  }, [state.steps, state.totalSteps])

  const isFirstStep = state.currentStep === 0
  const isLastStep = state.currentStep === state.totalSteps - 1

  return {
    state,
    updateUserData,
    setAccountType,
    setKYCTier,
    nextStep,
    prevStep,
    goToStep,
    completeStep,
    resetOnboarding,
    getCurrentStep,
    getProgress,
    isFirstStep,
    isLastStep,
  }
}
