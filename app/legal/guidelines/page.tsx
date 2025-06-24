"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Users, Heart, Shield, AlertTriangle, Flag } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { LEGAL_DOCUMENTS, COMMUNITY_PRINCIPLES, PROHIBITED_ITEMS } from "@/lib/constants"

export default function GuidelinesPage() {
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
              <Users className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              <div>
                <h1 className="text-xl font-bold text-emerald-600 dark:text-emerald-400">Community Guidelines</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">#BringBackBarter Movement</p>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      <div className="container mx-auto px-4 py-8">
        {/* Document Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Heart className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Community Guidelines</h1>
          </div>
          <div className="flex items-center justify-center space-x-4 mb-4">
            <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">
              Effective: {LEGAL_DOCUMENTS.guidelines.lastUpdated}
            </Badge>
            <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
              {LEGAL_DOCUMENTS.guidelines.focus}
            </Badge>
            <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
              🇳🇬 Community First
            </Badge>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Welcome to the #BringBackBarter movement! B3 is more than a platform — it's a community built on trust,
            fairness, and shared value.
          </p>
        </motion.div>

        {/* Core Principles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-6 text-center">
            1. Core Principles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMMUNITY_PRINCIPLES.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="backdrop-blur-md bg-white/80 dark:bg-gray-800/80 border-emerald-100 dark:border-gray-700 shadow-xl h-full">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{principle.icon}</div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-3">{principle.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{principle.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Guidelines Content */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <Card className="backdrop-blur-md bg-white/80 dark:bg-gray-800/80 border-emerald-100 dark:border-gray-700 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center text-gray-900 dark:text-white">
                <Users className="h-5 w-5 mr-2 text-emerald-600" />
                Community Guidelines for BringBackBarter (B3)
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-emerald dark:prose-invert max-w-none">
              <div className="space-y-8">
                {/* Respect & Behavior */}
                <section>
                  <h2 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-4 flex items-center">
                    <Heart className="h-6 w-6 mr-2" />
                    2. Respect & Behavior
                  </h2>
                  <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg">
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>• No hate speech, harassment, or discrimination</li>
                      <li>• Keep discussions civil — disagreements are okay, disrespect is not</li>
                      <li>• Don't spam, beg, or manipulate other users</li>
                      <li>• Use local dialects or Pidgin if needed, but ensure you're understood and inclusive</li>
                    </ul>
                  </div>
                </section>

                {/* Listings */}
                <section>
                  <h2 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-4 flex items-center">
                    <Shield className="h-6 w-6 mr-2" />
                    3. Listings - Durable Goods Only
                  </h2>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-4">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">✅ What You Can List:</h4>
                    <ul className="space-y-1 text-blue-700 dark:text-blue-300 text-sm">
                      <li>
                        • Only list <strong>durable items/services</strong> you legally own and are willing to exchange
                      </li>
                      <li>• Be honest about item condition — no "near new" for broken electronics</li>
                      <li>• Electronics, fashion, home goods, books, sports equipment, tools, etc.</li>
                      <li>• Items that maintain value and don't expire</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border-l-4 border-red-400">
                    <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2 flex items-center">
                      <AlertTriangle className="h-4 w-4 mr-2" />❌ Prohibited Items:
                    </h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {PROHIBITED_ITEMS.map((item, index) => (
                        <div key={index} className="text-red-700 dark:text-red-300 text-sm">
                          • {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Trade Conduct */}
                <section>
                  <h2 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-4">4. Trade Conduct</h2>
                  <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg">
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>• Communicate clearly and respectfully in negotiations</li>
                      <li>• Don't ghost your match after agreeing to trade — this damages trust</li>
                      <li>• Rate honestly after a transaction, but don't retaliate or abuse the review system</li>
                      <li>• Honor your agreements or communicate changes clearly</li>
                    </ul>
                  </div>
                </section>

                {/* Safety */}
                <section>
                  <h2 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-4 flex items-center">
                    <Shield className="h-6 w-6 mr-2" />
                    5. Meetups & Safety
                  </h2>
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border-l-4 border-yellow-400">
                    <ul className="space-y-2 text-yellow-800 dark:text-yellow-200">
                      <li>• Always meet in public, safe, and well-lit areas</li>
                      <li>• Avoid meeting alone at night or in isolated places</li>
                      <li>• B3 doesn't mediate trades, but we encourage safe-trade zones in communities</li>
                      <li>• If someone feels unsafe or violates trust, report them immediately</li>
                    </ul>
                  </div>
                </section>

                {/* Reporting */}
                <section>
                  <h2 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-4 flex items-center">
                    <Flag className="h-6 w-6 mr-2" />
                    6. Reporting & Moderation
                  </h2>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <p className="text-blue-700 dark:text-blue-300 mb-3">
                      Use the report button or contact <strong>support@b9techafrica.com</strong> for any bad behavior,
                      scam attempts, or suspicious activity.
                    </p>
                    <p className="text-blue-700 dark:text-blue-300 font-medium">B9Tech reserves the right to:</p>
                    <ul className="space-y-1 text-blue-700 dark:text-blue-300 text-sm mt-2">
                      <li>• Warn, suspend, or ban users who violate these guidelines</li>
                      <li>• Remove harmful or inappropriate listings</li>
                      <li>• Investigate and take action on reported violations</li>
                    </ul>
                  </div>
                </section>

                {/* Be a Barter Warrior */}
                <section>
                  <h2 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-4">
                    7. Be a Barter Warrior! 🇳🇬
                  </h2>
                  <div className="bg-gradient-to-r from-emerald-50 to-yellow-50 dark:from-emerald-900/20 dark:to-yellow-900/20 p-6 rounded-lg">
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>• Share your story, uplift fellow traders, and promote the #BringBackBarter spirit</li>
                      <li>• Help newbies, offer advice, and help us build a movement powered by value, not cash</li>
                      <li>• Celebrate successful trades and inspire others to join the movement</li>
                      <li>• Use Nigerian expressions: "No wahala!", "Sharp sharp!", "Correct!", "We move!"</li>
                    </ul>
                  </div>
                </section>

                {/* Closing Message */}
                <section className="border-t border-emerald-200 dark:border-emerald-700 pt-6">
                  <div className="bg-gradient-to-r from-emerald-50 to-yellow-50 dark:from-emerald-900/20 dark:to-yellow-900/20 p-6 rounded-lg text-center">
                    <h3 className="text-xl font-bold text-emerald-600 dark:text-emerald-400 mb-3">
                      We're all custodians of this movement
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 font-medium mb-2">
                      Barter is back — and better — because of you. Let's keep it that way.
                    </p>
                    <p className="text-emerald-600 dark:text-emerald-400 font-bold">
                      🇳🇬 #BringBackBarter - For Nigerians, By Nigerians
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
          transition={{ delay: 0.6 }}
          className="flex justify-center space-x-4 mt-8"
        >
          <Link href="/legal/terms">
            <Button variant="outline" className="bg-white text-emerald-600 border-emerald-200 hover:bg-emerald-50">
              Terms & Conditions
            </Button>
          </Link>
          <Link href="/legal/privacy">
            <Button variant="outline" className="bg-white text-emerald-600 border-emerald-200 hover:bg-emerald-50">
              Privacy Policy
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
