"use client"

import React from 'react'
import { useRouter } from 'next/navigation'
import { OnboardingWizard } from '@/components/onboarding/OnboardingWizard'
import { toast } from 'sonner'

export default function OnboardingPage() {
  const router = useRouter()

  const handleOnboardingComplete = () => {
    // Show success message
    toast.success('Welcome to BringBackBarter!', {
      description: 'Your account has been set up successfully.',
      duration: 3000,
    })

    // Redirect to dashboard after a short delay
    setTimeout(() => {
      router.push('/dashboard')
    }, 2000)
  }

  return (
    <OnboardingWizard onComplete={handleOnboardingComplete} />
  )
}
