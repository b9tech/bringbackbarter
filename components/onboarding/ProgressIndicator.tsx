"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Circle } from 'lucide-react'
import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'
import type { OnboardingStep } from '@/lib/types'

interface ProgressIndicatorProps {
  steps: OnboardingStep[]
  currentStep: number
  progress: number
  className?: string
}

export function ProgressIndicator({ 
  steps, 
  currentStep, 
  progress, 
  className 
}: ProgressIndicatorProps) {
  return (
    <div className={cn("w-full max-w-4xl mx-auto", className)}>
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
            Step {currentStep + 1} of {steps.length}
          </span>
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
            {Math.round(progress)}% Complete
          </span>
        </div>
        <Progress 
          value={progress} 
          className="h-2 bg-gray-200 dark:bg-gray-700"
        />
      </div>

      {/* Step Indicators */}
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              {/* Step Circle */}
              <motion.div
                className={cn(
                  "relative flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300",
                  {
                    "bg-emerald-500 border-emerald-500 text-white": step.isCompleted,
                    "bg-emerald-100 border-emerald-500 text-emerald-600": step.isActive && !step.isCompleted,
                    "bg-gray-100 border-gray-300 text-gray-400": !step.isActive && !step.isCompleted,
                  }
                )}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {step.isCompleted ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  <span className="text-sm font-semibold">{index + 1}</span>
                )}
                
                {/* Active Step Pulse */}
                {step.isActive && !step.isCompleted && (
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-emerald-400"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                )}
              </motion.div>

              {/* Step Label */}
              <div className="mt-3 text-center max-w-24">
                <p className={cn(
                  "text-xs font-medium transition-colors duration-300",
                  {
                    "text-emerald-600 dark:text-emerald-400": step.isCompleted || step.isActive,
                    "text-gray-500 dark:text-gray-400": !step.isActive && !step.isCompleted,
                  }
                )}>
                  {step.title}
                </p>
                <p className={cn(
                  "text-xs mt-1 transition-colors duration-300",
                  {
                    "text-emerald-500 dark:text-emerald-300": step.isCompleted || step.isActive,
                    "text-gray-400 dark:text-gray-500": !step.isActive && !step.isCompleted,
                  }
                )}>
                  {step.description}
                </p>
              </div>
            </motion.div>

            {/* Connector Line */}
            {index < steps.length - 1 && (
              <motion.div
                className="flex-1 h-0.5 mx-4 mt-5"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
              >
                <div className={cn(
                  "h-full transition-colors duration-500",
                  {
                    "bg-emerald-500": steps[index + 1]?.isCompleted || (step.isCompleted && steps[index + 1]?.isActive),
                    "bg-gray-300 dark:bg-gray-600": !steps[index + 1]?.isCompleted && !steps[index + 1]?.isActive,
                  }
                )} />
              </motion.div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

// Compact version for mobile
export function CompactProgressIndicator({ 
  steps, 
  currentStep, 
  progress, 
  className 
}: ProgressIndicatorProps) {
  const currentStepData = steps[currentStep]
  
  return (
    <div className={cn("w-full", className)}>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white">
            {currentStepData?.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {currentStepData?.description}
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
            {currentStep + 1}/{steps.length}
          </p>
        </div>
      </div>
      <Progress value={progress} className="h-2" />
    </div>
  )
}
