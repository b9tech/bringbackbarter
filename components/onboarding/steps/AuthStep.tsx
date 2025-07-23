"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { 
  ArrowLeft, 
  ArrowRight, 
  Mail, 
  Lock, 
  User, 
  Phone,
  MapPin,
  Eye,
  EyeOff
} from 'lucide-react'
import { cn } from '@/lib/utils'
import type { AccountType, User } from '@/lib/types'

interface AuthStepProps {
  userData: Partial<User>
  accountType?: AccountType
  onUserDataUpdate: (data: Partial<User>) => void
  onNext: () => void
  onPrev: () => void
}

export function AuthStep({ 
  userData, 
  accountType, 
  onUserDataUpdate, 
  onNext, 
  onPrev 
}: AuthStepProps) {
  const [isSignUp, setIsSignUp] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    full_name: userData.full_name || '',
    email: userData.email || '',
    phone: userData.phone || '',
    location: userData.location || '',
    password: '',
    confirmPassword: '',
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Update user data
    onUserDataUpdate({
      full_name: formData.full_name,
      email: formData.email,
      phone: formData.phone,
      location: formData.location,
    })
    
    // Move to next step
    onNext()
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
          {isSignUp ? 'Create Your Account' : 'Welcome Back'}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 dark:text-gray-400"
        >
          {isSignUp 
            ? `Set up your ${accountType} account to start bartering`
            : 'Sign in to continue your bartering journey'
          }
        </motion.p>
      </div>

      {/* Social Login Buttons - Placeholder */}
      <div className="space-y-3">
        <Button
          variant="outline"
          className="w-full h-12 text-left justify-start gap-3"
          disabled
        >
          <div className="w-5 h-5 bg-red-500 rounded" />
          Continue with Google (Coming Soon)
        </Button>
        <Button
          variant="outline"
          className="w-full h-12 text-left justify-start gap-3"
          disabled
        >
          <div className="w-5 h-5 bg-blue-600 rounded" />
          Continue with Facebook (Coming Soon)
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <Separator className="flex-1" />
        <span className="text-sm text-gray-500">or</span>
        <Separator className="flex-1" />
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {isSignUp && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="space-y-2"
          >
            <Label htmlFor="name">Full Name</Label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="name"
                placeholder="Enter your full name"
                value={formData.full_name}
                onChange={(e) => handleInputChange("full_name", e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </motion.div>
        )}

        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="pl-10"
              required
            />
          </div>
        </div>

        {isSignUp && (
          <>
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="space-y-2"
            >
              <Label htmlFor="phone">Phone Number</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="space-y-2"
            >
              <Label htmlFor="location">Location</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="location"
                  placeholder="Enter your location"
                  value={formData.location}
                  onChange={(e) => handleInputChange("location", e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </motion.div>
          </>
        )}

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) => handleInputChange("password", e.target.value)}
              className="pl-10 pr-10"
              required
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute right-1 top-1 h-8 w-8"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {isSignUp && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="space-y-2"
          >
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </motion.div>
        )}

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
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700"
          >
            Continue
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </form>

      {/* Toggle Sign In/Up */}
      <div className="text-center pt-4 border-t">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button
            type="button"
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-emerald-600 hover:text-emerald-700 font-medium"
          >
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </button>
        </p>
      </div>
    </div>
  )
}
