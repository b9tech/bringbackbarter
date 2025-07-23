"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { 
  ArrowLeft, 
  ArrowRight, 
  Mail, 
  Phone,
  CheckCircle,
  Clock,
  RefreshCw
} from 'lucide-react'
import type { User } from '@/lib/types'

interface VerificationStepProps {
  userData: Partial<User>
  onUserDataUpdate: (data: Partial<User>) => void
  onNext: () => void
  onPrev: () => void
}

export function VerificationStep({ 
  userData, 
  onUserDataUpdate, 
  onNext, 
  onPrev 
}: VerificationStepProps) {
  const [emailOTP, setEmailOTP] = useState('')
  const [phoneOTP, setPhoneOTP] = useState('')
  const [emailVerified, setEmailVerified] = useState(false)
  const [phoneVerified, setPhoneVerified] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleVerifyEmail = async () => {
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setEmailVerified(true)
      setIsLoading(false)
      onUserDataUpdate({ email_verified: true })
    }, 1500)
  }

  const handleVerifyPhone = async () => {
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setPhoneVerified(true)
      setIsLoading(false)
      onUserDataUpdate({ phone_verified: true })
    }, 1500)
  }

  const handleContinue = () => {
    if (emailVerified && phoneVerified) {
      onNext()
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold text-gray-900 dark:text-white mb-2"
        >
          Verify Your Contact Information
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 dark:text-gray-400"
        >
          We've sent verification codes to secure your account
        </motion.p>
      </div>

      {/* Email Verification */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
            <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 dark:text-white">Email Verification</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Code sent to {userData.email}
            </p>
          </div>
          {emailVerified && (
            <CheckCircle className="w-6 h-6 text-green-500" />
          )}
        </div>

        {!emailVerified && (
          <div className="space-y-3">
            <div>
              <Label htmlFor="emailOTP">Enter 6-digit code</Label>
              <Input
                id="emailOTP"
                placeholder="000000"
                value={emailOTP}
                onChange={(e) => setEmailOTP(e.target.value)}
                maxLength={6}
                className="text-center text-lg tracking-widest"
              />
            </div>
            <div className="flex gap-2">
              <Button
                onClick={handleVerifyEmail}
                disabled={emailOTP.length !== 6 || isLoading}
                className="flex-1"
              >
                {isLoading ? (
                  <>
                    <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                    Verifying...
                  </>
                ) : (
                  'Verify Email'
                )}
              </Button>
              <Button variant="outline" size="sm">
                Resend
              </Button>
            </div>
          </div>
        )}

        {emailVerified && (
          <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
            <CheckCircle className="w-4 h-4" />
            <span className="text-sm font-medium">Email verified successfully!</span>
          </div>
        )}
      </motion.div>

      {/* Phone Verification */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="space-y-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
            <Phone className="w-5 h-5 text-green-600 dark:text-green-400" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 dark:text-white">Phone Verification</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              SMS sent to {userData.phone}
            </p>
          </div>
          {phoneVerified && (
            <CheckCircle className="w-6 h-6 text-green-500" />
          )}
        </div>

        {!phoneVerified && (
          <div className="space-y-3">
            <div>
              <Label htmlFor="phoneOTP">Enter 6-digit code</Label>
              <Input
                id="phoneOTP"
                placeholder="000000"
                value={phoneOTP}
                onChange={(e) => setPhoneOTP(e.target.value)}
                maxLength={6}
                className="text-center text-lg tracking-widest"
              />
            </div>
            <div className="flex gap-2">
              <Button
                onClick={handleVerifyPhone}
                disabled={phoneOTP.length !== 6 || isLoading}
                className="flex-1"
              >
                {isLoading ? (
                  <>
                    <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                    Verifying...
                  </>
                ) : (
                  'Verify Phone'
                )}
              </Button>
              <Button variant="outline" size="sm">
                Resend
              </Button>
            </div>
          </div>
        )}

        {phoneVerified && (
          <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
            <CheckCircle className="w-4 h-4" />
            <span className="text-sm font-medium">Phone verified successfully!</span>
          </div>
        )}
      </motion.div>

      {/* Progress Indicator */}
      <div className="text-center">
        <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <Clock className="w-4 h-4" />
          {emailVerified && phoneVerified 
            ? "All verifications complete!"
            : `${(emailVerified ? 1 : 0) + (phoneVerified ? 1 : 0)}/2 verifications complete`
          }
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center pt-6">
        <Button
          variant="outline"
          onClick={onPrev}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Button>

        <Button
          onClick={handleContinue}
          disabled={!emailVerified || !phoneVerified}
          className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50"
        >
          Continue
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}
