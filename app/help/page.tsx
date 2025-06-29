"use client"

import React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  ArrowLeft,
  Search,
  MessageCircle,
  Phone,
  Mail,
  HelpCircle,
  Shield,
  Package,
  Users,
  Zap,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const faqCategories = [
  {
    title: "Getting Started",
    icon: Package,
    color: "from-blue-500 to-cyan-500",
    faqs: [
      {
        question: "How do I create an account on B3?",
        answer:
          "Simply click 'Join the Movement' on our homepage, fill in your details including name, email, phone, and location. You'll be welcomed as a Barter Warrior!",
      },
      {
        question: "What types of items can I trade?",
        answer:
          "B3 focuses on durable goods only. You can trade electronics, fashion items, home goods, books, sports equipment, tools, and more. We strictly prohibit consumables, perishables, and food items.",
      },
      {
        question: "Is B3 free to use?",
        answer:
          "Yes! B3 is completely free to use. We believe in empowering Nigerians to trade without additional costs.",
      },
    ],
  },
  {
    title: "Trading Process",
    icon: Users,
    color: "from-green-500 to-emerald-500",
    faqs: [
      {
        question: "How does the matching system work?",
        answer:
          "Our AI-powered system suggests matches based on your items and preferences. You can also browse manually to find items you want.",
      },
      {
        question: "How do I propose a trade?",
        answer:
          "When you find an item you want, click 'I'm Interested' and select one of your items to offer in exchange. The other user will be notified.",
      },
      {
        question: "Where should I meet for trades?",
        answer:
          "Always meet in public, safe, well-lit areas. We recommend shopping malls, banks, or police stations. Never meet alone at night or in isolated places.",
      },
    ],
  },
  {
    title: "Safety & Security",
    icon: Shield,
    color: "from-red-500 to-pink-500",
    faqs: [
      {
        question: "How do you verify users?",
        answer:
          "We use phone verification, email confirmation, and community ratings. Verified users get a blue checkmark and higher trust scores.",
      },
      {
        question: "What if someone doesn't show up for a trade?",
        answer:
          "Report the user through our platform. Repeated no-shows result in account suspension. Always confirm trades before traveling.",
      },
      {
        question: "How do I report suspicious activity?",
        answer:
          "Use the report button on any listing or user profile. You can also contact support@b9techafrica.com for urgent issues.",
      },
    ],
  },
  {
    title: "Technical Support",
    icon: Zap,
    color: "from-purple-500 to-indigo-500",
    faqs: [
      {
        question: "I can't upload photos of my item",
        answer:
          "Ensure your photos are under 10MB and in PNG or JPG format. Try refreshing the page or using a different browser.",
      },
      {
        question: "My messages aren't sending",
        answer:
          "Check your internet connection and refresh the page. If the problem persists, contact our support team.",
      },
      {
        question: "How do I delete my account?",
        answer: "Go to Settings > Account > Delete Account. Note that this action is permanent and cannot be undone.",
      },
    ],
  },
]

const contactMethods = [
  {
    title: "Email Support",
    description: "Get help via email",
    contact: "support@b9techafrica.com",
    icon: Mail,
    color: "from-blue-500 to-cyan-500",
    responseTime: "24 hours",
  },
  {
    title: "Live Chat",
    description: "Chat with our team",
    contact: "Available 9 AM - 6 PM WAT",
    icon: MessageCircle,
    color: "from-green-500 to-emerald-500",
    responseTime: "Few minutes",
  },
  {
    title: "Phone Support",
    description: "Call us directly",
    contact: "+234 XXX XXX XXXX",
    icon: Phone,
    color: "from-purple-500 to-indigo-500",
    responseTime: "Immediate",
  },
]

export default function HelpPage() {
  const [mounted, setMounted] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredFaqs, setFilteredFaqs] = useState(faqCategories)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (searchQuery) {
      const filtered = faqCategories
        .map((category) => ({
          ...category,
          faqs: category.faqs.filter(
            (faq) =>
              faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
              faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
          ),
        }))
        .filter((category) => category.faqs.length > 0)
      setFilteredFaqs(filtered)
    } else {
      setFilteredFaqs(faqCategories)
    }
  }, [searchQuery])

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-yellow-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-emerald-600 mx-auto mb-4"></div>
          <p className="text-emerald-600 font-semibold">Loading help center... 🚀</p>
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
                <h1 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">Help Center</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">Get help with B3 bartering 🇳🇬</p>
              </div>
            </div>
            <Link href="/dashboard">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                <Package className="h-4 w-4 mr-2" />
                Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </motion.header>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 flex items-center justify-center">
              <HelpCircle className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
            How can we{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              help you?
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Find answers to common questions or get in touch with our support team
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Search for help..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-3 text-lg bg-white dark:bg-gray-800 border-emerald-200 dark:border-gray-600"
              />
            </div>
          </div>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card className="backdrop-blur-xl bg-white/80 dark:bg-gray-800/80 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 h-full">
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${method.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}
                  >
                    {React.createElement(method.icon, { className: "h-8 w-8 text-white" })}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{method.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">{method.description}</p>
                  <p className="text-emerald-600 dark:text-emerald-400 font-medium mb-2">{method.contact}</p>
                  <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-300">
                    {method.responseTime}
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ Categories */}
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">
            {filteredFaqs.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
              >
                <Card className="backdrop-blur-xl bg-white/80 dark:bg-gray-800/80 border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <div
                        className={`w-10 h-10 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center`}
                      >
                        {React.createElement(category.icon, { className: "h-5 w-5 text-white" })}
                      </div>
                      <span className="text-gray-900 dark:text-white">{category.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {category.faqs.map((faq, faqIndex) => (
                        <AccordionItem key={faqIndex} value={`item-${categoryIndex}-${faqIndex}`}>
                          <AccordionTrigger className="text-left hover:text-emerald-600 dark:hover:text-emerald-400">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional FAQs */}
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} className="mb-16">
          <h2 className="text-xl font-semibold mb-2">Additional FAQs</h2>
          <ul className="space-y-4 text-gray-700 dark:text-gray-300">
            <li>
              <strong>How do I list an item?</strong> – Open your dashboard &nbsp;→ “My Items” → “Add Item”.
            </li>
            <li>
              <strong>Are consumables allowed?</strong> – No. B3 only supports durable goods.
            </li>
            <li>
              <strong>How is safety handled?</strong> – Meet in public places, check user verification & trust-scores.
            </li>
          </ul>
        </motion.div>

        {/* Still Need Help */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="text-center">
          <Card className="backdrop-blur-xl bg-gradient-to-r from-green-600 via-emerald-500 to-green-500 border-0 text-white shadow-3xl overflow-hidden relative rounded-3xl">
            <CardContent className="p-12 relative z-10">
              <CheckCircle className="h-16 w-16 mx-auto mb-6 opacity-80" />
              <h3 className="text-3xl font-bold mb-4">Still need help?</h3>
              <p className="text-xl mb-8 opacity-90">
                Our support team is here to help you with any questions about bartering on B3
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 text-lg font-bold"
                  onClick={() => (window.location.href = "mailto:support@b9techafrica.com")}
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Email Support
                </Button>
                <Link href="/browse">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 text-lg font-bold bg-transparent"
                  >
                    <Package className="h-5 w-5 mr-2" />
                    Start Bartering
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
