"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Shield, Lock, Eye, Database, UserCheck } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { LEGAL_DOCUMENTS } from "@/lib/constants"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-emerald-100 dark:border-gray-700 shadow-lg sticky top-0 z-50"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Button variant="ghost" className="hover:scale-110 transition-all duration-200">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <div className="flex items-center space-x-3">
              <Shield className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              <div>
                <h1 className="text-xl font-bold text-emerald-600 dark:text-emerald-400">Privacy Policy</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">NDPR & GDPR Compliant</p>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      <div className="container mx-auto px-4 py-8">
        {/* Document Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Lock className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Privacy Policy</h1>
          </div>
          <div className="flex items-center justify-center space-x-4 mb-4">
            <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">
              Last Updated: {LEGAL_DOCUMENTS.privacy.lastUpdated}
            </Badge>
            <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              {LEGAL_DOCUMENTS.privacy.compliance}
            </Badge>
            <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
              🇳🇬 NDPR Compliant
            </Badge>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            How B9Tech Consult protects your personal data on the BringBackBarter platform
          </p>
        </motion.div>

        {/* Privacy Content */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <Card className="backdrop-blur-md bg-white/80 dark:bg-gray-800/80 border-emerald-100 dark:border-gray-700 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center text-gray-900 dark:text-white">
                <Shield className="h-5 w-5 mr-2 text-emerald-600" />
                Privacy Policy for B9Tech Consult / BringBackBarter (B3)
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-emerald dark:prose-invert max-w-none">
              <div className="space-y-8">
                {/* Introduction */}
                <section>
                  <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg mb-4">
                    <p className="text-gray-700 dark:text-gray-300">
                      B9Tech Consult ("we," "our," or "us") respects your privacy and is committed to protecting your
                      personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your
                      information when you visit or use the BringBackBarter (B3) platform. This policy complies with the{" "}
                      <strong>Nigeria Data Protection Regulation (NDPR)</strong>
                      and other applicable laws.
                    </p>
                  </div>
                </section>

                {/* Information We Collect */}
                <section>
                  <h2 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-4 flex items-center">
                    <Database className="h-6 w-6 mr-2" />
                    A. Information We Collect
                  </h2>
                  <p className="mb-4 text-gray-700 dark:text-gray-300">
                    We may collect the following categories of personal information:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Account Information</h4>
                      <p className="text-blue-700 dark:text-blue-300 text-sm">
                        Full name, email address, phone number, and registration details
                      </p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Identity Verification</h4>
                      <p className="text-purple-700 dark:text-purple-300 text-sm">
                        Government-issued ID, facial recognition (optional), KYC data
                      </p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Location Data</h4>
                      <p className="text-green-700 dark:text-green-300 text-sm">
                        Real-time or approximate location for matching services
                      </p>
                    </div>
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">User Content</h4>
                      <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                        Images, descriptions, messages, and reviews you submit
                      </p>
                    </div>
                  </div>
                </section>

                {/* How We Use Information */}
                <section>
                  <h2 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-4 flex items-center">
                    <Eye className="h-6 w-6 mr-2" />
                    B. How We Use Your Information
                  </h2>
                  <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg">
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      We use your information for the following purposes:
                    </p>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>• To register and manage your account</li>
                      <li>• To verify user identity and protect against fraud</li>
                      <li>• To provide AI/ML-based recommendations and valuations</li>
                      <li>• To facilitate and personalize barter matches</li>
                      <li>• To communicate updates, service notices, and promotional content</li>
                      <li>• To improve the platform and develop new features</li>
                      <li>• To comply with legal obligations and law enforcement requests</li>
                    </ul>
                  </div>
                </section>

                {/* Legal Basis (NDPR) */}
                <section>
                  <h2 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-4 flex items-center">
                    <UserCheck className="h-6 w-6 mr-2" />
                    C. Legal Basis for Processing (NDPR Compliance)
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Consent</h4>
                      <p className="text-blue-700 dark:text-blue-300 text-sm">
                        You have given clear permission to process your personal data for specific purposes
                      </p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Contract</h4>
                      <p className="text-green-700 dark:text-green-300 text-sm">
                        Processing is necessary for fulfilling our contract with you
                      </p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Legal Obligation</h4>
                      <p className="text-purple-700 dark:text-purple-300 text-sm">
                        Required to comply with applicable Nigerian laws
                      </p>
                    </div>
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Legitimate Interest</h4>
                      <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                        For improving services, fraud prevention, and security
                      </p>
                    </div>
                  </div>
                </section>

                {/* Your Rights Under NDPR */}
                <section>
                  <h2 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-4">
                    F. Your Rights Under NDPR
                  </h2>
                  <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg">
                    <p className="text-gray-700 dark:text-gray-300 mb-3">You have the right to:</p>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>• Request access to your personal data</li>
                      <li>• Correct or update inaccurate data</li>
                      <li>• Withdraw consent or object to processing</li>
                      <li>• Request deletion of your data, subject to legal obligations</li>
                      <li>• File complaints with the Nigeria Data Protection Bureau (NDPB)</li>
                    </ul>
                    <p className="text-emerald-600 dark:text-emerald-400 font-medium mt-3">
                      To exercise these rights, contact us via support@b9techafrica.com
                    </p>
                  </div>
                </section>

                {/* Data Security */}
                <section>
                  <h2 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-4">
                    E. Data Security and Retention
                  </h2>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <ul className="space-y-2 text-blue-700 dark:text-blue-300">
                      <li>• We use encryption, access controls, and secure infrastructure to protect your data</li>
                      <li>
                        • We retain your data as long as needed for service provision, legal compliance, or dispute
                        resolution
                      </li>
                      <li>• Inactive accounts and associated data may be deleted after a period of non-use</li>
                    </ul>
                  </div>
                </section>

                {/* Contact Information */}
                <section>
                  <h2 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-4">K. Contact Us</h2>
                  <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-lg">
                    <p className="mb-4 text-gray-700 dark:text-gray-300">
                      For questions, concerns, or to exercise your data rights, kindly contact:
                    </p>
                    <div className="space-y-2">
                      <p className="font-semibold text-emerald-600 dark:text-emerald-400">B9Tech Consult Ltd</p>
                      <p className="text-gray-700 dark:text-gray-300">📧 support@b9techafrica.com</p>
                      <p className="text-gray-700 dark:text-gray-300">🌐 www.b9techafrica.com</p>
                    </div>
                  </div>
                </section>

                {/* Acceptance */}
                <section className="border-t border-emerald-200 dark:border-emerald-700 pt-6">
                  <div className="bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-900/20 dark:to-blue-900/20 p-6 rounded-lg">
                    <p className="text-center text-gray-700 dark:text-gray-300 font-medium">
                      By using the B3 platform, you acknowledge and agree to this Privacy Policy.
                    </p>
                    <p className="text-center text-emerald-600 dark:text-emerald-400 font-bold mt-2">
                      🇳🇬 Your Privacy, Our Priority - NDPR Compliant
                    </p>
                  </div>
                </section>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center space-x-4 mt-8"
        >
          <Link href="/legal/terms">
            <Button variant="outline" className="bg-white text-emerald-600 border-emerald-200 hover:bg-emerald-50">
              Terms & Conditions
            </Button>
          </Link>
          <Link href="/legal/guidelines">
            <Button variant="outline" className="bg-white text-emerald-600 border-emerald-200 hover:bg-emerald-50">
              Community Guidelines
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
