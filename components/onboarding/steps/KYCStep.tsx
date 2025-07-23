"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  ArrowLeft, 
  ArrowRight, 
  Upload,
  FileText,
  CreditCard,
  MapPin,
  CheckCircle,
  AlertCircle,
  Shield
} from 'lucide-react'
import { cn } from '@/lib/utils'
import type { User, KYCTier } from '@/lib/types'

interface KYCStepProps {
  userData: Partial<User>
  kycTier: KYCTier
  onKYCTierUpdate: (tier: KYCTier) => void
  onUserDataUpdate: (data: Partial<User>) => void
  onNext: () => void
  onPrev: () => void
}

const kycTiers = [
  {
    tier: 'tier0' as KYCTier,
    title: 'Basic (Tier 0)',
    description: 'Email and phone verification only',
    features: ['Trade up to ₦50,000', 'Basic features', 'Community access'],
    requirements: ['Email verification', 'Phone verification'],
    color: 'from-gray-500 to-gray-600',
    completed: true,
  },
  {
    tier: 'tier1' as KYCTier,
    title: 'Verified (Tier 1)',
    description: 'Identity document verification',
    features: ['Trade up to ₦500,000', 'Priority support', 'Advanced features'],
    requirements: ['Government ID', 'Selfie verification'],
    color: 'from-blue-500 to-blue-600',
    completed: false,
  },
  {
    tier: 'tier2' as KYCTier,
    title: 'Premium (Tier 2)',
    description: 'Full documentation and address proof',
    features: ['Unlimited trading', 'Business features', 'Premium support'],
    requirements: ['Address proof', 'Bank statement', 'Enhanced verification'],
    color: 'from-emerald-500 to-emerald-600',
    completed: false,
  },
]

export function KYCStep({ 
  userData, 
  kycTier, 
  onKYCTierUpdate, 
  onUserDataUpdate, 
  onNext, 
  onPrev 
}: KYCStepProps) {
  const [selectedTier, setSelectedTier] = useState<KYCTier>(kycTier)
  const [uploadedDocs, setUploadedDocs] = useState<string[]>([])

  const handleTierSelect = (tier: KYCTier) => {
    setSelectedTier(tier)
    onKYCTierUpdate(tier)
  }

  const handleFileUpload = (docType: string) => {
    // Simulate file upload
    setUploadedDocs(prev => [...prev, docType])
  }

  const handleContinue = () => {
    onUserDataUpdate({ kyc_tier: selectedTier })
    onNext()
  }

  const canProceed = selectedTier === 'tier0' || uploadedDocs.length > 0

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
          <Shield className="w-8 h-8 text-white" />
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold text-gray-900 dark:text-white mb-2"
        >
          Choose Your Verification Level
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 dark:text-gray-400"
        >
          Higher verification levels unlock more features and trading limits
        </motion.p>
      </div>

      {/* KYC Tier Selection */}
      <div className="space-y-4">
        {kycTiers.map((tier, index) => {
          const isSelected = selectedTier === tier.tier
          const isCompleted = tier.completed || (tier.tier === selectedTier && uploadedDocs.length > 0)
          
          return (
            <motion.div
              key={tier.tier}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <Card
                className={cn(
                  "cursor-pointer transition-all duration-300",
                  isSelected
                    ? "ring-2 ring-emerald-500 bg-emerald-50 dark:bg-emerald-900/20"
                    : "hover:shadow-md"
                )}
                onClick={() => handleTierSelect(tier.tier)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className={cn(
                      "w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-r",
                      tier.color
                    )}>
                      {isCompleted ? (
                        <CheckCircle className="w-6 h-6 text-white" />
                      ) : (
                        <Shield className="w-6 h-6 text-white" />
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {tier.title}
                        </h3>
                        {isCompleted && (
                          <Badge className="bg-green-100 text-green-800">
                            Completed
                          </Badge>
                        )}
                        {isSelected && !isCompleted && (
                          <Badge className="bg-blue-100 text-blue-800">
                            Selected
                          </Badge>
                        )}
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-400 mb-3">
                        {tier.description}
                      </p>
                      
                      {/* Features */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-3">
                        {tier.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                          >
                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                            {feature}
                          </div>
                        ))}
                      </div>
                      
                      {/* Requirements */}
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-medium">Requirements: </span>
                        {tier.requirements.join(', ')}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>

      {/* Document Upload Section */}
      {selectedTier !== 'tier0' && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="space-y-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg"
        >
          <h3 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Required Documents
          </h3>
          
          <div className="grid gap-3">
            {selectedTier === 'tier1' && (
              <>
                <DocumentUploadCard
                  title="Government ID"
                  description="National ID, Driver's License, or Passport"
                  icon={CreditCard}
                  isUploaded={uploadedDocs.includes('gov_id')}
                  onUpload={() => handleFileUpload('gov_id')}
                />
                <DocumentUploadCard
                  title="Selfie Verification"
                  description="Clear photo of yourself holding your ID"
                  icon={Upload}
                  isUploaded={uploadedDocs.includes('selfie')}
                  onUpload={() => handleFileUpload('selfie')}
                />
              </>
            )}
            
            {selectedTier === 'tier2' && (
              <>
                <DocumentUploadCard
                  title="Address Proof"
                  description="Utility bill or bank statement (last 3 months)"
                  icon={MapPin}
                  isUploaded={uploadedDocs.includes('address')}
                  onUpload={() => handleFileUpload('address')}
                />
                <DocumentUploadCard
                  title="Bank Statement"
                  description="Recent bank statement for verification"
                  icon={FileText}
                  isUploaded={uploadedDocs.includes('bank')}
                  onUpload={() => handleFileUpload('bank')}
                />
              </>
            )}
          </div>
        </motion.div>
      )}

      {/* Skip Option */}
      {selectedTier !== 'tier0' && (
        <div className="text-center p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
          <div className="flex items-center justify-center gap-2 text-yellow-700 dark:text-yellow-300 mb-2">
            <AlertCircle className="w-4 h-4" />
            <span className="text-sm font-medium">You can complete this later</span>
          </div>
          <p className="text-xs text-yellow-600 dark:text-yellow-400">
            You can start with basic verification and upgrade anytime from your profile
          </p>
        </div>
      )}

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
          disabled={!canProceed}
          className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700"
        >
          Continue
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}

// Document Upload Card Component
function DocumentUploadCard({ 
  title, 
  description, 
  icon: Icon, 
  isUploaded, 
  onUpload 
}: {
  title: string
  description: string
  icon: any
  isUploaded: boolean
  onUpload: () => void
}) {
  return (
    <div className="flex items-center gap-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
      <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
        <Icon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
      </div>
      <div className="flex-1">
        <h4 className="font-medium text-gray-900 dark:text-white">{title}</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
      </div>
      <Button
        onClick={onUpload}
        variant={isUploaded ? "outline" : "default"}
        size="sm"
        className={isUploaded ? "text-green-600 border-green-600" : ""}
      >
        {isUploaded ? (
          <>
            <CheckCircle className="w-4 h-4 mr-2" />
            Uploaded
          </>
        ) : (
          <>
            <Upload className="w-4 h-4 mr-2" />
            Upload
          </>
        )}
      </Button>
    </div>
  )
}
