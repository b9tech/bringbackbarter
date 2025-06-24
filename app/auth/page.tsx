"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Mail, Lock, User, MapPin, Phone, Eye, EyeOff, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    password: "",
    confirmPassword: "",
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    // Redirect to dashboard
    window.location.href = "/dashboard"
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4">
      {/* Floating particles effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-emerald-200 dark:bg-emerald-800 rounded-full opacity-20"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 mb-4 hover:scale-105 transition-all duration-200"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <motion.div className="flex items-center justify-center space-x-3 mb-4" whileHover={{ scale: 1.05 }}>
            <div className="relative w-12 h-12">
              <Image src="/images/b3-logo.png" alt="B3 Logo" fill className="object-contain" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">B3</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">#BringBackBarter</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Auth Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="backdrop-blur-md bg-white/80 dark:bg-gray-800/80 border-emerald-100 dark:border-gray-700 shadow-2xl">
            <CardHeader className="text-center">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                <CardTitle className="text-2xl text-gray-900 dark:text-white">
                  {isSignUp ? "Join the Movement" : "Welcome Back, Barter Warrior"}
                </CardTitle>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  {isSignUp ? "Create your account to start bartering" : "Sign in to continue trading"}
                </p>
              </motion.div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <AnimatePresence mode="wait">
                  {isSignUp && (
                    <motion.div
                      key="name"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-2"
                    >
                      <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">
                        Full Name
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="name"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          className="pl-10 bg-white dark:bg-gray-700 border-emerald-200 dark:border-gray-600 focus:border-emerald-400 focus:ring-emerald-400"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="space-y-2"
                >
                  <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">
                    Email
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="pl-10 bg-white dark:bg-gray-700 border-emerald-200 dark:border-gray-600 focus:border-emerald-400 focus:ring-emerald-400"
                    />
                  </div>
                </motion.div>

                <AnimatePresence mode="wait">
                  {isSignUp && (
                    <>
                      <motion.div
                        key="phone"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-2"
                      >
                        <Label htmlFor="phone" className="text-gray-700 dark:text-gray-300">
                          Phone Number
                        </Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="phone"
                            placeholder="Enter your phone number"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            className="pl-10 bg-white dark:bg-gray-700 border-emerald-200 dark:border-gray-600 focus:border-emerald-400 focus:ring-emerald-400"
                          />
                        </div>
                      </motion.div>

                      <motion.div
                        key="location"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-2"
                      >
                        <Label htmlFor="location" className="text-gray-700 dark:text-gray-300">
                          Location
                        </Label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="location"
                            placeholder="City, State (e.g., Ikeja, Lagos)"
                            value={formData.location}
                            onChange={(e) => handleInputChange("location", e.target.value)}
                            className="pl-10 bg-white dark:bg-gray-700 border-emerald-200 dark:border-gray-600 focus:border-emerald-400 focus:ring-emerald-400"
                          />
                        </div>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-2"
                >
                  <Label htmlFor="password" className="text-gray-700 dark:text-gray-300">
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={(e) => handleInputChange("password", e.target.value)}
                      className="pl-10 pr-10 bg-white dark:bg-gray-700 border-emerald-200 dark:border-gray-600 focus:border-emerald-400 focus:ring-emerald-400"
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
                </motion.div>

                <AnimatePresence mode="wait">
                  {isSignUp && (
                    <motion.div
                      key="confirmPassword"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-2"
                    >
                      <Label htmlFor="confirmPassword" className="text-gray-700 dark:text-gray-300">
                        Confirm Password
                      </Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="confirmPassword"
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Confirm your password"
                          value={formData.confirmPassword}
                          onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                          className="pl-10 pr-10 bg-white dark:bg-gray-700 border-emerald-200 dark:border-gray-600 focus:border-emerald-400 focus:ring-emerald-400"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="absolute right-1 top-1 h-8 w-8"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                          {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                  <Button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-emerald-200 dark:hover:shadow-emerald-800"
                  >
                    <CheckCircle className="h-4 w-4 mr-2" />
                    {isSignUp ? "Create Account" : "Sign In"}
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-center"
                >
                  <button
                    type="button"
                    onClick={() => setIsSignUp(!isSignUp)}
                    className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 text-sm hover:underline transition-all duration-200"
                  >
                    {isSignUp ? "Already have an account? Sign in" : "Don't have an account? Join now"}
                  </button>
                </motion.div>

                <AnimatePresence>
                  {isSignUp && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-center"
                    >
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        By creating an account, you agree to our community guidelines and safety practices.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">🇳🇬 For Nigerians, By Nigerians</p>
          <div className="flex items-center justify-center space-x-2">
            <div className="relative w-4 h-4">
              <Image src="/images/b9-logo.png" alt="B9Tech Logo" fill className="object-contain" />
            </div>
            <span className="text-xs text-gray-400">Built by B9Tech Consult</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
