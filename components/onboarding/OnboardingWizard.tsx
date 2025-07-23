"use client"

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { ProgressIndicator, CompactProgressIndicator } from './ProgressIndicator'
import { useOnboarding } from '@/hooks/useOnboarding'
import { cn } from '@/lib/utils'

// Import step components (we'll create these next)
import { WelcomeStep } from './steps/WelcomeStep'
import { AuthStep } from './steps/AuthStep'
import { VerificationStep } from './steps/VerificationStep'
import { KYCStep } from './steps/KYCStep'
import { ProfileStep } from './steps/ProfileStep'

interface OnboardingWizardProps {
  className?: string
  onComplete?: () => void
}

export function OnboardingWizard({ className, onComplete }: OnboardingWizardProps) {
  const {
    state,
    nextStep,
    prevStep,
    getCurrentStep,
    getProgress,
    isFirstStep,
    isLastStep,
    updateUserData,
    setAccountType,
    setKYCTier,
  } = useOnboarding()

  const currentStep = getCurrentStep()
  const progress = getProgress()

  const handleNext = () => {
    if (isLastStep && onComplete) {
      onComplete()
    } else {
      nextStep()
    }
  }

  const renderStepContent = () => {
    switch (currentStep?.id) {
      case 'welcome':
        return (
          <WelcomeStep
            accountType={state.accountType}
            onAccountTypeSelect={setAccountType}
            onNext={handleNext}
          />
        )
      case 'auth':
        return (
          <AuthStep
            userData={state.userData}
            accountType={state.accountType}
            onUserDataUpdate={updateUserData}
            onNext={handleNext}
            onPrev={prevStep}
          />
        )
      case 'verification':
        return (
          <VerificationStep
            userData={state.userData}
            onUserDataUpdate={updateUserData}
            onNext={handleNext}
            onPrev={prevStep}
          />
        )
      case 'kyc':
        return (
          <KYCStep
            userData={state.userData}
            kycTier={state.kycTier}
            onKYCTierUpdate={setKYCTier}
            onUserDataUpdate={updateUserData}
            onNext={handleNext}
            onPrev={prevStep}
          />
        )
      case 'profile':
        return (
          <ProfileStep
            userData={state.userData}
            accountType={state.accountType}
            onUserDataUpdate={updateUserData}
            onNext={handleNext}
            onPrev={prevStep}
            isLastStep={isLastStep}
          />
        )
      default:
        return <div>Step not found</div>
    }
  }

  return (
    <div className={cn("min-h-screen bg-gradient-to-br from-emerald-50 via-white to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900", className)}>
      {/* Background Animation */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-emerald-200 dark:bg-emerald-800 rounded-full opacity-20"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2"
          >
            Welcome to <span className="text-emerald-600">BringBackBarter</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 dark:text-gray-400"
          >
            Let's get you set up in just a few steps
          </motion.p>
        </div>

        {/* Progress Indicator - Desktop */}
        <div className="hidden md:block mb-12">
          <ProgressIndicator
            steps={state.steps}
            currentStep={state.currentStep}
            progress={progress}
          />
        </div>

        {/* Progress Indicator - Mobile */}
        <div className="md:hidden mb-8">
          <CompactProgressIndicator
            steps={state.steps}
            currentStep={state.currentStep}
            progress={progress}
          />
        </div>

        {/* Step Content */}
        <motion.div
          key={state.currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="max-w-2xl mx-auto"
        >
          <Card className="backdrop-blur-md bg-white/80 dark:bg-gray-800/80 border-emerald-100 dark:border-gray-700 shadow-2xl">
            <CardContent className="p-8">
              <AnimatePresence mode="wait">
                {renderStepContent()}
              </AnimatePresence>
            </CardContent>
          </Card>
        </motion.div>

        {/* Navigation Buttons - Only show if step doesn't handle its own navigation */}
        {!['welcome', 'auth', 'verification', 'kyc', 'profile'].includes(currentStep?.id || '') && (
          <div className="flex justify-between items-center mt-8 max-w-2xl mx-auto">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={isFirstStep}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Previous
            </Button>

            <Button
              onClick={handleNext}
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700"
            >
              {isLastStep ? 'Complete Setup' : 'Continue'}
              {!isLastStep && <ArrowRight className="w-4 h-4" />}
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
