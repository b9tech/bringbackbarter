"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, FileText, Shield, AlertTriangle, Scale, Globe } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { LEGAL_DOCUMENTS } from "@/lib/constants"

export default function TermsPage() {
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
              <FileText className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              <div>
                <h1 className="text-xl font-bold text-emerald-600 dark:text-emerald-400">Legal Documents</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">B9Tech Consult - B3 Platform</p>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      <div className="container mx-auto px-4 py-8">
        {/* Document Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Scale className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Terms & Conditions</h1>
          </div>
          <div className="flex items-center justify-center space-x-4 mb-4">
            <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">
              Last Updated: {LEGAL_DOCUMENTS.terms.lastUpdated}
            </Badge>
            <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              Version {LEGAL_DOCUMENTS.terms.version}
            </Badge>
            <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
              🇳🇬 Nigerian Law
            </Badge>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Binding agreement for the BringBackBarter (B3) platform operated by B9Tech Consult
          </p>
        </motion.div>

        {/* Terms Content */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <Card className="backdrop-blur-md bg-white/80 dark:bg-gray-800/80 border-emerald-100 dark:border-gray-700 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center text-gray-900 dark:text-white">
                <Shield className="h-5 w-5 mr-2 text-emerald-600" />
                Terms & Conditions of Use
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-emerald dark:prose-invert max-w-none">
              <div className="space-y-8">
                {/* Overview */}
                <section>
                  <h2 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-4 flex items-center">
                    <Globe className="h-6 w-6 mr-2" />
                    A. Overview of the Service
                  </h2>
                  <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg mb-4">
                    <p className="text-gray-700 dark:text-gray-300">
                      BringBackBarter ("B3") is a digital platform that enables users to barter{" "}
                      <strong>durable goods</strong> directly, without monetary exchange. The platform incorporates
                      automated recommendations to suggest fair and relevant matches, but final transaction decisions
                      rest solely with the users.
                    </p>
                  </div>
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border-l-4 border-yellow-400">
                    <div className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-yellow-800 dark:text-yellow-200">
                          Important: Product-to-Product Exchange Only
                        </h4>
                        <p className="text-yellow-700 dark:text-yellow-300 text-sm mt-1">
                          B3 focuses exclusively on durable, non-perishable goods. Consumables, food items, and
                          perishable goods are prohibited due to ethical considerations and safety concerns.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* User Eligibility */}
                <section>
                  <h2 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-4">
                    B. User Eligibility & Account Obligations
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-400 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                        i
                      </span>
                      <div>
                        <strong>Age Requirement:</strong> You must be at least 18 years old, or have verifiable
                        parental/guardian consent if younger.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-400 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                        ii
                      </span>
                      <div>
                        <strong>Account Information:</strong> You agree to provide accurate, up-to-date information and
                        to keep your login credentials secure.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-400 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                        iii
                      </span>
                      <div>
                        <strong>Responsibility:</strong> You are fully responsible for all activities occurring under
                        your account.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-400 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                        iv
                      </span>
                      <div>
                        <strong>Multiple Accounts:</strong> Operating more than one user account without explicit
                        authorization may result in suspension.
                      </div>
                    </li>
                  </ul>
                </section>

                {/* Platform Role */}
                <section>
                  <h2 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-4">
                    C. Platform Role and Limitations
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-400 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                        i
                      </span>
                      <div>
                        <strong>Neutral Venue:</strong> B3 functions as a neutral connector. We do not own, inspect,
                        validate, or guarantee any item or service listed.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-400 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                        ii
                      </span>
                      <div>
                        <strong>No Mediation:</strong> We are not a party to transactions and do not mediate disputes.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-400 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                        iii
                      </span>
                      <div>
                        <strong>AI Recommendations:</strong> Any valuation, ranking, or matchmaking suggestions provided
                        by B3 are non-binding and for guidance only.
                      </div>
                    </li>
                  </ul>
                </section>

                {/* User Responsibilities */}
                <section>
                  <h2 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-4">
                    D. User Responsibilities
                  </h2>
                  <p className="mb-4 text-gray-700 dark:text-gray-300">By using B3, you agree:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-400 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                        i
                      </span>
                      <div>
                        To list only <strong>durable goods</strong> that you legally possess and have the right to
                        exchange.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-400 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                        ii
                      </span>
                      <div>To provide honest, clear, and accurate descriptions of your items.</div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-400 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                        iii
                      </span>
                      <div>Not to upload or distribute unlawful, offensive, harmful, or misleading content.</div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-400 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                        iv
                      </span>
                      <div>That all barter exchanges must be voluntary and based on mutual agreement.</div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-400 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                        v
                      </span>
                      <div>Not to misrepresent item condition, location, or exchange value.</div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-400 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                        vi
                      </span>
                      <div>Not to engage in spam, harassment, or manipulation of other users.</div>
                    </li>
                  </ul>
                </section>

                {/* Spiritual Manipulation Clause */}
                <section>
                  <h2 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-4">
                    J. Harmful Practices & Spiritual Manipulation
                  </h2>
                  <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border-l-4 border-red-400">
                    <p className="text-red-800 dark:text-red-200 mb-3">
                      B3 is committed to safety and community trust. Any user found to engage in — or accused with
                      reasonable evidence of — acts involving spiritual threats, curses, rituals, or perceived harm
                      (physical, emotional, or spiritual) through listings or interactions will face:
                    </p>
                    <ul className="space-y-2 text-red-700 dark:text-red-300">
                      <li>• Immediate suspension pending review</li>
                      <li>• Possible permanent account deactivation</li>
                      <li>• Referral to law enforcement or community authorities where appropriate</li>
                    </ul>
                  </div>
                </section>

                {/* Contact Information */}
                <section>
                  <h2 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-4">P. Contact</h2>
                  <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-lg">
                    <p className="mb-4 text-gray-700 dark:text-gray-300">
                      For questions, complaints, or legal notices, please contact:
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
                  <div className="bg-gradient-to-r from-emerald-50 to-yellow-50 dark:from-emerald-900/20 dark:to-yellow-900/20 p-6 rounded-lg">
                    <p className="text-center text-gray-700 dark:text-gray-300 font-medium">
                      By using the B3 platform, you affirm that you have read, understood, and agreed to these Terms and
                      Conditions.
                    </p>
                    <p className="text-center text-emerald-600 dark:text-emerald-400 font-bold mt-2">
                      🇳🇬 #BringBackBarter Movement - For Nigerians, By Nigerians
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
          <Link href="/legal/privacy">
            <Button variant="outline" className="bg-white text-emerald-600 border-emerald-200 hover:bg-emerald-50">
              Privacy Policy
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
