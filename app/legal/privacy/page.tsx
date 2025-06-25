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
                      information when you visit or use the BringBackBarter (B3) platform, including our website
                      [b9techafrica.com] and associated services (the "Service"). This policy complies with the{" "}
                      <strong>Nigeria Data Protection Regulation (NDPR)</strong> and other applicable laws.
                    </p>
                  </div>
                </section>

                {/* A. Information We Collect */}
                <section>
                  <h2 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-4 flex items-center">
                    <Database className="h-6 w-6 mr-2" />
                    A. INFORMATION WE COLLECT
                  </h2>
                  <p className="mb-4 text-gray-700 dark:text-gray-300">
                    We may collect the following categories of personal information:
                  </p>
                  <div className="space-y-3">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">i. Account Information</h4>
                      <p className="text-blue-700 dark:text-blue-300 text-sm">
                        Full name, email address, phone number, and any other details you provide during registration.
                      </p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">
                        ii. Identity Verification Data
                      </h4>
                      <p className="text-purple-700 dark:text-purple-300 text-sm">
                        Government-issued ID, facial recognition (optional), or other KYC data if required.
                      </p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">iii. Location Data</h4>
                      <p className="text-green-700 dark:text-green-300 text-sm">
                        Real-time or approximate location to enable location-based matching.
                      </p>
                    </div>
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                        iv. User-Generated Content
                      </h4>
                      <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                        Images, descriptions, messages, and reviews you post or submit.
                      </p>
                    </div>
                    <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">v. Device & Usage Data</h4>
                      <p className="text-red-700 dark:text-red-300 text-sm">
                        IP address, browser type, device information, log files, and user interaction data.
                      </p>
                    </div>
                    <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-indigo-800 dark:text-indigo-200 mb-2">
                        vi. Cookies and Analytics
                      </h4>
                      <p className="text-indigo-700 dark:text-indigo-300 text-sm">
                        Information from cookies and similar technologies used to enhance user experience.
                      </p>
                    </div>
                  </div>
                </section>

                {/* B. How We Use Information */}
                <section>
                  <h2 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-4 flex items-center">
                    <Eye className="h-6 w-6 mr-2" />
                    B. HOW WE USE YOUR INFORMATION
                  </h2>
                  <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg">
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      We use your information for the following purposes:
                    </p>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>i. To register and manage your account.</li>
                      <li>ii. To verify user identity and protect the platform from fraud.</li>
                      <li>iii. To provide AI/ML-based recommendations and valuations.</li>
                      <li>iv. To facilitate and personalize barter matches.</li>
                      <li>v. To communicate updates, service notices, and promotional content.</li>
                      <li>vi. To improve the platform, perform analytics, and develop new features.</li>
                      <li>vii. To comply with legal obligations and law enforcement requests.</li>
                    </ul>
                  </div>
                </section>

                {/* C. Legal Basis (NDPR) */}
                <section>
                  <h2 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-4 flex items-center">
                    <UserCheck className="h-6 w-6 mr-2" />
                    C. LEGAL BASIS FOR PROCESSING (NDPR COMPLIANCE)
                  </h2>
                  <p className="mb-4 text-gray-700 dark:text-gray-300">Under NDPR, we process your data based on:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">i. Consent</h4>
                      <p className="text-blue-700 dark:text-blue-300 text-sm">
                        You have given clear permission to process your personal data for a specific purpose.
                      </p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">ii. Contract</h4>
                      <p className="text-green-700 dark:text-green-300 text-sm">
                        Processing is necessary for fulfilling our contract with you.
                      </p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">iii. Legal Obligation</h4>
                      <p className="text-purple-700 dark:text-purple-300 text-sm">
                        Required to comply with applicable Nigerian laws.
                      </p>
                    </div>
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                        iv. Legitimate Interest
                      </h4>
                      <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                        For improving services, fraud prevention, and security.
                      </p>
                    </div>
                  </div>
                </section>

                {/* D. Sharing of Information */}
                <section>
                  <h2 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-4">
                    D. SHARING OF INFORMATION
                  </h2>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <p className="text-blue-700 dark:text-blue-300 mb-3">
                      We do not sell your personal data. We may share your data with:
                    </p>
                    <ul className="space-y-2 text-blue-700 dark:text-blue-300">
                      <li>i. Third-party service providers (e.g., Azure, Google Maps) to operate platform features.</li>
                      <li>ii. Law enforcement or regulators if required by applicable law.</li>
                      <li>
                        iii. Partners and Affiliates involved in delivering B3 services, under strict confidentiality.
                      </li>
                    </ul>
                  </div>
                </section>

                {/* E. Data Security and Retention */}
                <section>
                  <h2 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-4">
                    E. DATA SECURITY AND RETENTION
                  </h2>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <ul className="space-y-2 text-blue-700 dark:text-blue-300">
                      <li>i. We use encryption, access controls, and secure infrastructure to protect your data.</li>
                      <li>
                        ii. We retain your data as long as needed for service provision, legal compliance, or dispute
                        resolution.
                      </li>
                      <li>
                        iii. Inactive accounts and associated data may be deleted after a period of non-use, subject to
                        our retention policy.
                      </li>
                    </ul>
                  </div>
                </section>

                {/* F. Your Rights Under NDPR */}
                <section>
                  <h2 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-4">
                    F. YOUR RIGHTS UNDER NDPR
                  </h2>
                  <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg">
                    <p className="text-gray-700 dark:text-gray-300 mb-3">You have the right to:</p>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>i. Request access to your personal data.</li>
                      <li>ii. Correct or update inaccurate data.</li>
                      <li>iii. Withdraw consent or object to processing.</li>
                      <li>iv. Request deletion of your data, subject to legal obligations.</li>
                      <li>v. File complaints with the Nigeria Data Protection Bureau (NDPB).</li>
                    </ul>
                    <p className="text-emerald-600 dark:text-emerald-400 font-medium mt-3">
                      To exercise these rights, contact us via support@b9techafrica.com
                    </p>
                  </div>
                </section>

                {/* G. Children's Privacy */}
                <section>
                  <h2 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-4">
                    G. CHILDREN'S PRIVACY
                  </h2>
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                    <p className="text-yellow-700 dark:text-yellow-300">
                      Our platform is not intended for individuals under the age of 13. We do not knowingly collect data
                      from minors without parental consent. If we become aware of such collection, we will delete the
                      information promptly.
                    </p>
                  </div>
                </section>

                {/* H. International Data Transfers */}
                <section>
                  <h2 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-4">
                    H. INTERNATIONAL DATA TRANSFERS
                  </h2>
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                    <p className="text-purple-700 dark:text-purple-300">
                      While our servers and primary operations are based in Nigeria, we may use third-party services
                      that process data internationally. All transfers are done under data protection agreements
                      consistent with NDPR and GDPR standards.
                    </p>
                  </div>
                </section>

                {/* I. Cookies and Tracking */}
                <section>
                  <h2 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-4">
                    I. COOKIES AND TRACKING TECHNOLOGIES
                  </h2>
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                    <p className="text-orange-700 dark:text-orange-300">
                      We use cookies to improve user experience. You can control cookies via your browser settings. Some
                      features may not function properly without cookies enabled.
                    </p>
                  </div>
                </section>

                {/* J. Updates to Policy */}
                <section>
                  <h2 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-4">
                    J. UPDATES TO THIS POLICY
                  </h2>
                  <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                    <p className="text-red-700 dark:text-red-300">
                      We may update this Privacy Policy periodically. We will notify users of significant changes
                      through our platform or via email. Continued use after changes constitutes acceptance.
                    </p>
                  </div>
                </section>

                {/* K. Contact Information */}
                <section>
                  <h2 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-4">K. CONTACT US</h2>
                  <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-lg">
                    <p className="mb-4 text-gray-700 dark:text-gray-300">
                      For questions, concerns, or to exercise your data rights, kindly contact:
                    </p>
                    <div className="space-y-2">
                      <p className="font-semibold text-emerald-600 dark:text-emerald-400">▪ B9Tech Consult Ltd</p>
                      <p className="text-gray-700 dark:text-gray-300">➢ support@b9techafrica.com</p>
                      <p className="text-gray-700 dark:text-gray-300">➢ www.b9techafrica.com</p>
                    </div>
                  </div>
                </section>

                {/* Acceptance */}
                <section className="border-t border-emerald-200 dark:border-emerald-700 pt-6">
                  <div className="bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-900/20 dark:to-blue-900/20 p-6 rounded-lg">
                    <p className="text-center text-gray-700 dark:text-gray-300 font-medium">
                      By using the B3 platform, you acknowledge and agree to this Privacy Policy.
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
