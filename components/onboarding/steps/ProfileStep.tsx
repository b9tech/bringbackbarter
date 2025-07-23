"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { 
  ArrowLeft, 
  ArrowRight, 
  Camera,
  User,
  MapPin,
  FileText,
  Sparkles,
  CheckCircle
} from 'lucide-react'
import type { User, AccountType } from '@/lib/types'

interface ProfileStepProps {
  userData: Partial<User>
  accountType?: AccountType
  onUserDataUpdate: (data: Partial<User>) => void
  onNext: () => void
  onPrev: () => void
  isLastStep: boolean
}

export function ProfileStep({ 
  userData, 
  accountType, 
  onUserDataUpdate, 
  onNext, 
  onPrev,
  isLastStep
}: ProfileStepProps) {
  const [profileData, setProfileData] = useState({
    bio: userData.bio || '',
    location: userData.location || '',
    state: userData.state || '',
    lga: userData.lga || '',
    referral_code: userData.referral_code || '',
  })

  const handleInputChange = (field: string, value: string) => {
    setProfileData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Update user data
    onUserDataUpdate({
      ...profileData,
      onboarding_completed: true,
    })
    
    // Complete onboarding
    onNext()
  }

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.6 }}
          className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <Sparkles className="w-8 h-8 text-white" />
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold text-gray-900 dark:text-white mb-2"
        >
          Complete Your Profile
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 dark:text-gray-400"
        >
          Add some details to help others connect with you
        </motion.p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center space-y-4"
        >
          <div className="relative">
            <Avatar className="w-24 h-24">
              <AvatarImage src={userData.profile_image} />
              <AvatarFallback className="text-lg bg-emerald-100 text-emerald-700">
                {userData.full_name ? getInitials(userData.full_name) : 'U'}
              </AvatarFallback>
            </Avatar>
            <Button
              type="button"
              size="icon"
              className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-emerald-600 hover:bg-emerald-700"
            >
              <Camera className="w-4 h-4" />
            </Button>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Upload a profile picture (optional)
          </p>
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-2"
        >
          <Label htmlFor="bio" className="flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Bio
          </Label>
          <Textarea
            id="bio"
            placeholder={`Tell others about yourself as a ${accountType}...`}
            value={profileData.bio}
            onChange={(e) => handleInputChange('bio', e.target.value)}
            rows={4}
            className="resize-none"
          />
          <p className="text-xs text-gray-500">
            {profileData.bio.length}/500 characters
          </p>
        </motion.div>

        {/* Location Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-4"
        >
          <h3 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Location Details
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="state">State</Label>
              <Input
                id="state"
                placeholder="e.g., Lagos"
                value={profileData.state}
                onChange={(e) => handleInputChange('state', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lga">Local Government Area</Label>
              <Input
                id="lga"
                placeholder="e.g., Ikeja"
                value={profileData.lga}
                onChange={(e) => handleInputChange('lga', e.target.value)}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="location">Specific Location</Label>
            <Input
              id="location"
              placeholder="e.g., Victoria Island, Lagos"
              value={profileData.location}
              onChange={(e) => handleInputChange('location', e.target.value)}
            />
          </div>
        </motion.div>

        {/* Referral Code */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="space-y-2"
        >
          <Label htmlFor="referral">Referral Code (Optional)</Label>
          <Input
            id="referral"
            placeholder="Enter referral code if you have one"
            value={profileData.referral_code}
            onChange={(e) => handleInputChange('referral_code', e.target.value)}
          />
          <p className="text-xs text-gray-500">
            Get bonus features if you were referred by someone
          </p>
        </motion.div>

        {/* Account Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="p-6 bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 rounded-lg"
        >
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-emerald-600" />
            Account Summary
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-600 dark:text-gray-400">Account Type:</span>
              <span className="ml-2 font-medium capitalize">{accountType}</span>
            </div>
            <div>
              <span className="text-gray-600 dark:text-gray-400">KYC Level:</span>
              <span className="ml-2 font-medium">{userData.kyc_tier?.toUpperCase()}</span>
            </div>
            <div>
              <span className="text-gray-600 dark:text-gray-400">Email:</span>
              <span className="ml-2 font-medium">{userData.email}</span>
            </div>
            <div>
              <span className="text-gray-600 dark:text-gray-400">Phone:</span>
              <span className="ml-2 font-medium">{userData.phone}</span>
            </div>
          </div>
        </motion.div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center pt-6">
          <Button
            type="button"
            variant="outline"
            onClick={onPrev}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>

          <Button
            type="submit"
            className="flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 px-8"
          >
            {isLastStep ? (
              <>
                Complete Setup
                <CheckCircle className="w-4 h-4" />
              </>
            ) : (
              <>
                Continue
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  )
}
