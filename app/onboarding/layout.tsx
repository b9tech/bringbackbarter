import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Onboarding - BringBackBarter',
  description: 'Complete your account setup to start bartering',
}

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  )
}
