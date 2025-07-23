"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  User, 
  Store, 
  Users, 
  ArrowRight, 
  CheckCircle,
  Sparkles,
  Shield,
  TrendingUp
} from 'lucide-react'
import { cn } from '@/lib/utils'
import type { AccountType } from '@/lib/types'

interface WelcomeStepProps {
  accountType?: AccountType
  onAccountTypeSelect: (type: AccountType) => void
  onNext: () => void
}

const accountTypes = [
  {
    type: 'individual' as AccountType,
    title: 'Individual',
    description: 'Perfect for personal trading and bartering',
    icon: User,
    features: [
      'Trade personal items',
      'Basic verification',
      'Community access',
      'Safe trading tools'
    ],
    color: 'from-blue-500 to-cyan-500',
    popular: false,
  },
  {
    type: 'merchant' as AccountType,
    title: 'Merchant',
    description: 'Ideal for businesses and frequent traders',
    icon: Store,
    features: [
      'Business verification',
      'Bulk trading tools',
      'Analytics dashboard',
      'Priority support'
    ],
    color: 'from-emerald-500 to-green-500',
    popular: true,
  },
  {
    type: 'agent' as AccountType,
    title: 'Agent',
    description: 'For trade facilitators and intermediaries',
    icon: Users,
    features: [
      'Facilitate trades',
      'Commission tracking',
      'Multi-party deals',
      'Advanced tools'
    ],
    color: 'from-purple-500 to-pink-500',
    popular: false,
  },
]

export function WelcomeStep({ accountType, onAccountTypeSelect, onNext }: WelcomeStepProps) {
  const handleContinue = () => {
    if (accountType) {
      onNext()
    }
  }

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
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
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold text-gray-900 dark:text-white mb-2"
        >
          Choose Your Account Type
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-gray-600 dark:text-gray-400"
        >
          Select the account type that best describes how you plan to use BringBackBarter
        </motion.p>
      </div>

      {/* Account Type Cards */}
      <div className="grid gap-4 md:gap-6">
        {accountTypes.map((type, index) => {
          const Icon = type.icon
          const isSelected = accountType === type.type
          
          return (
            <motion.div
              key={type.type}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <Card
                className={cn(
                  "relative cursor-pointer transition-all duration-300 hover:shadow-lg",
                  isSelected
                    ? "ring-2 ring-emerald-500 bg-emerald-50 dark:bg-emerald-900/20"
                    : "hover:shadow-md"
                )}
                onClick={() => onAccountTypeSelect(type.type)}
              >
                {type.popular && (
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-emerald-500 to-green-500 text-white">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className={cn(
                      "w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-r",
                      type.color
                    )}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {type.title}
                        </h3>
                        {isSelected && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="text-emerald-500"
                          >
                            <CheckCircle className="w-5 h-5" />
                          </motion.div>
                        )}
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {type.description}
                      </p>
                      
                      {/* Features */}
                      <div className="grid grid-cols-2 gap-2">
                        {type.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                          >
                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>

      {/* Benefits Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 rounded-lg p-6"
      >
        <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <Shield className="w-5 h-5 text-emerald-600" />
          Why Choose BringBackBarter?
        </h4>
        
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <TrendingUp className="w-4 h-4 text-emerald-600" />
            AI-powered matching
          </div>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <Shield className="w-4 h-4 text-emerald-600" />
            Secure transactions
          </div>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <Users className="w-4 h-4 text-emerald-600" />
            Trusted community
          </div>
        </div>
      </motion.div>

      {/* Continue Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="flex justify-center"
      >
        <Button
          onClick={handleContinue}
          disabled={!accountType}
          size="lg"
          className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white px-8 py-3 rounded-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Continue Setup
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </motion.div>
    </div>
  )
}
