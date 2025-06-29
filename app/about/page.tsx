"use client"

import React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Users, Target, Heart, Shield, Globe, Sparkles, TrendingUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const teamMembers = [
  {
    name: "Enoch Oluwumi",
    role: "Founder & CEO",
    description: "Visionary leader passionate about bringing back the ancient art of bartering to modern Nigeria.",
    image: "/placeholder-user.jpg",
    naija_phrase: "Barter don land! 🚀",
  },
  {
    name: "B9Tech Consult Team",
    role: "Development Partner",
    description: "Expert technology consultants building the future of Nigerian digital commerce.",
    image: "/images/b9-logo.png",
    naija_phrase: "We dey build am! 💻",
  },
]

const milestones = [
  {
    year: "2024",
    title: "B3 Concept Born",
    description: "The idea of bringing back barter to Nigeria was conceived",
    icon: "💡",
  },
  {
    year: "2025",
    title: "Platform Development",
    description: "Full-scale development of the B3 platform begins",
    icon: "🔨",
  },
  {
    year: "2025",
    title: "Community Launch",
    description: "Official launch of the #BringBackBarter movement",
    icon: "🚀",
  },
  {
    year: "Future",
    title: "Pan-African Expansion",
    description: "Expanding the barter revolution across Africa",
    icon: "🌍",
  },
]

const values = [
  {
    icon: Heart,
    title: "Community First",
    description: "We believe in the power of community and human connections over pure profit.",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: Shield,
    title: "Trust & Safety",
    description: "Building a secure platform where Nigerians can trade with confidence.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Globe,
    title: "Cultural Heritage",
    description: "Honoring Nigeria's rich trading traditions while embracing modern technology.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: TrendingUp,
    title: "Economic Empowerment",
    description: "Helping Nigerians maximize the value of their possessions through smart trading.",
    color: "from-purple-500 to-indigo-500",
  },
]

export default function AboutPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-yellow-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-emerald-600 mx-auto mb-4"></div>
          <p className="text-emerald-600 font-semibold">Loading our story... 🚀</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-emerald-100 dark:border-gray-700 shadow-lg"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" size="icon" className="hover:scale-110 transition-all duration-200">
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">About B3</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">The story behind #BringBackBarter 🇳🇬</p>
              </div>
            </div>
            <Link href="/browse">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                <Sparkles className="h-4 w-4 mr-2" />
                Start Bartering
              </Button>
            </Link>
          </div>
        </div>
      </motion.header>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="relative w-16 h-16 rounded-full bg-gradient-to-r from-green-600 via-white to-green-600 p-1">
              <div className="w-full h-full bg-white dark:bg-gray-900 rounded-full flex items-center justify-center">
                <Image src="/images/b3-logo.png" alt="B3 Logo" width={32} height={32} className="object-contain" />
              </div>
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                B3
              </h1>
              <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0">
                #BringBackBarter 🇳🇬
              </Badge>
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Reviving Nigeria's{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Trading Heritage
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            B3 (BringBackBarter) is more than a platform — it's a community-powered movement built for Nigerians, by
            Nigerians. We're reviving the ancient tradition of value-for-value exchange with modern technology,
            security, and convenience.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="backdrop-blur-xl bg-white/80 dark:bg-gray-800/80 border-0 shadow-2xl h-full">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mr-4">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  To restore dignity, reduce dependence on cash, and strengthen communities through meaningful,
                  trust-based trade. We believe in empowering Nigerians to maximize the value of their possessions
                  through smart, fair exchanges.
                </p>
                <div className="mt-6">
                  <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300">
                    "Your cash can rest. Let's barter." 💚
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <Card className="backdrop-blur-xl bg-white/80 dark:bg-gray-800/80 border-0 shadow-2xl h-full">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mr-4">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Vision</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  To become Africa's leading barter platform, creating a sustainable ecosystem where communities thrive
                  through value-based exchanges. We envision a future where bartering is as common and trusted as
                  traditional commerce.
                </p>
                <div className="mt-6">
                  <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300">
                    "Barter is Back — & Better!" 🌍
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="backdrop-blur-xl bg-white/80 dark:bg-gray-800/80 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 h-full">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}
                    >
                      {React.createElement(value.icon, { className: "h-8 w-8 text-white" })}
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{value.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Our Journey</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-500 to-emerald-500 rounded-full"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <Card className="backdrop-blur-xl bg-white/80 dark:bg-gray-800/80 border-0 shadow-xl">
                      <CardContent className="p-6">
                        <div className="text-2xl mb-2">{milestone.icon}</div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{milestone.title}</h4>
                        <p className="text-gray-600 dark:text-gray-300">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-sm">{milestone.year}</span>
                    </div>
                  </div>
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Meet the Team</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="backdrop-blur-xl bg-white/80 dark:bg-gray-800/80 border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
                  <CardContent className="p-8 text-center">
                    <div className="w-24 h-24 rounded-full mx-auto mb-6 overflow-hidden bg-gradient-to-r from-green-500 to-emerald-500 p-1">
                      <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-800">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          width={96}
                          height={96}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{member.name}</h4>
                    <p className="text-emerald-600 dark:text-emerald-400 font-medium mb-4">{member.role}</p>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{member.description}</p>
                    <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300">
                      {member.naija_phrase}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="text-center">
          <Card className="backdrop-blur-xl bg-gradient-to-r from-green-600 via-emerald-500 to-green-500 border-0 text-white shadow-3xl overflow-hidden relative rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/95 to-emerald-500/95" />
            <CardContent className="p-12 relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join the Movement?</h3>
              <p className="text-xl mb-8 opacity-90">
                Be part of the #BringBackBarter revolution and help us restore Nigeria's trading heritage!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/browse">
                  <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 text-lg font-bold">
                    <Sparkles className="h-5 w-5 mr-2" />
                    Start Bartering
                  </Button>
                </Link>
                <Link href="/auth">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 text-lg font-bold"
                  >
                    <Users className="h-5 w-5 mr-2" />
                    Join Community
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
