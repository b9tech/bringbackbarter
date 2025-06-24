"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { NIGERIAN_GREETINGS, NIGERIAN_PHRASES } from "@/lib/constants"

export function NigerianGreeting() {
  const [currentGreeting, setCurrentGreeting] = useState("")
  const [currentPhrase, setCurrentPhrase] = useState("")

  useEffect(() => {
    const updateGreeting = () => {
      const randomGreeting = NIGERIAN_GREETINGS[Math.floor(Math.random() * NIGERIAN_GREETINGS.length)]
      const randomPhrase = NIGERIAN_PHRASES[Math.floor(Math.random() * NIGERIAN_PHRASES.length)]
      setCurrentGreeting(randomGreeting)
      setCurrentPhrase(randomPhrase)
    }

    updateGreeting()
    const interval = setInterval(updateGreeting, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="text-center mb-6">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentGreeting}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-lg font-bold text-emerald-600 dark:text-emerald-400 mb-2"
        >
          {currentGreeting}
        </motion.div>
      </AnimatePresence>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPhrase}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm text-gray-600 dark:text-gray-300 italic"
        >
          {currentPhrase}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
