"use client"

import React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Plus,
  MessageCircle,
  Handshake,
  Upload,
  MapPin,
  Star,
  ThumbsUp,
  ThumbsDown,
  Search,
  Filter,
  Package,
  ArrowLeft,
  Camera,
  Send,
  Phone,
  Clock,
  CheckCircle,
  AlertCircle,
  X,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

const myItems = [
  {
    id: 1,
    title: "Fresh Tomatoes (10kg)",
    description: "Farm fresh tomatoes from Ogun State. Perfect for cooking and sauce making.",
    category: "Food",
    location: "Ikeja, Lagos",
    image: "/placeholder.svg?height=150&width=200",
    status: "Active",
    value: "₦4,500",
    views: 23,
    interested: 5,
  },
  {
    id: 2,
    title: "Samsung Galaxy A54 (Used)",
    description: "6 months old, excellent condition with original charger and box",
    category: "Electronics",
    location: "Garki, Abuja",
    image: "/placeholder.svg?height=150&width=200",
    status: "Matched",
    value: "₦85,000",
    views: 45,
    interested: 12,
  },
  {
    id: 3,
    title: "Handwoven Ankara Bags (5 pieces)",
    description: "Beautiful handmade bags perfect for market or office use",
    category: "Fashion",
    location: "Bodija, Ibadan",
    image: "/placeholder.svg?height=150&width=200",
    status: "Active",
    value: "₦12,000",
    views: 18,
    interested: 3,
  },
]

const matches = [
  {
    id: 1,
    title: "MTN Airtime ₦5,000",
    description: "Looking for fresh vegetables for my restaurant",
    user: "Adunni K.",
    location: "Ikeja, Lagos",
    image: "/placeholder.svg?height=150&width=200",
    compatibility: 95,
    userRating: 4.8,
    lastSeen: "2 hours ago",
    responseTime: "Usually responds in 30 mins",
  },
  {
    id: 2,
    title: "Baby Items Bundle",
    description: "Need phone for my business. Baby clothes, diapers, feeding bottles",
    user: "Emeka N.",
    location: "Garki, Abuja",
    image: "/placeholder.svg?height=150&width=200",
    compatibility: 88,
    userRating: 4.9,
    lastSeen: "1 hour ago",
    responseTime: "Usually responds in 1 hour",
  },
  {
    id: 3,
    title: "Rice & Beans (2 bags each)",
    description: "Looking for beautiful bags for my boutique",
    user: "Fatima A.",
    location: "Bodija, Ibadan",
    image: "/placeholder.svg?height=150&width=200",
    compatibility: 92,
    userRating: 4.7,
    lastSeen: "30 mins ago",
    responseTime: "Usually responds in 15 mins",
  },
]

const trades = [
  {
    id: 1,
    item: "Fresh Tomatoes (5kg)",
    partner: "Adunni K.",
    partnerItem: "MTN Airtime ₦2,500",
    status: "Completed",
    date: "2 days ago",
    rating: 5,
    location: "Ikeja, Lagos",
  },
  {
    id: 2,
    item: "Samsung Galaxy A54",
    partner: "Emeka N.",
    partnerItem: "Baby Items Bundle",
    status: "In Progress",
    date: "Today",
    rating: null,
    location: "Garki, Abuja",
    nextStep: "Meet at agreed location",
  },
  {
    id: 3,
    item: "Ankara Bags (2 pieces)",
    partner: "Fatima A.",
    partnerItem: "Rice & Beans (1 bag each)",
    status: "Pending",
    date: "1 hour ago",
    rating: null,
    location: "Bodija, Ibadan",
    nextStep: "Waiting for partner confirmation",
  },
]

const chatMessages = [
  {
    id: 1,
    sender: "Adunni K.",
    message: "Hello! I'm interested in your tomatoes. Are they still fresh?",
    time: "2:30 PM",
    isMe: false,
  },
  {
    id: 2,
    sender: "You",
    message: "Yes, they are very fresh! Harvested yesterday from my farm in Ogun State.",
    time: "2:32 PM",
    isMe: true,
  },
  {
    id: 3,
    sender: "Adunni K.",
    message: "Perfect! I can offer ₦5,000 MTN airtime for 10kg. When can we meet?",
    time: "2:35 PM",
    isMe: false,
  },
  {
    id: 4,
    sender: "You",
    message: "That sounds good! I can meet at Ikeja City Mall tomorrow at 3 PM.",
    time: "2:37 PM",
    isMe: true,
  },
]

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("items")
  const [showAddItem, setShowAddItem] = useState(false)
  const [selectedChat, setSelectedChat] = useState(null)
  const [newMessage, setNewMessage] = useState("")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
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
            <div className="flex items-center space-x-3">
              <Link href="/">
                <Button variant="ghost" size="icon" className="hover:scale-110 transition-all duration-200">
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
              <div className="relative w-10 h-10">
                <Image src="/images/b3-logo.png" alt="B3 Logo" fill className="object-contain" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-emerald-600 dark:text-emerald-400">B3 Dashboard</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">Welcome back, Barter Warrior! 🚀</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200 animate-pulse">
                3 New Matches
              </Badge>
              <Button
                className="bg-emerald-600 hover:bg-emerald-700 text-white hover:scale-105 transition-all duration-200 shadow-lg"
                onClick={() => setShowAddItem(true)}
              >
                <Plus className="h-4 w-4 mr-2" />
                New Trade
              </Button>
            </div>
          </div>
        </div>
      </motion.header>

      <div className="container mx-auto px-4 py-8">
        {/* Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {[
            { id: "items", label: "My Items", icon: Package, count: myItems.length },
            { id: "matches", label: "My Matches", icon: Search, count: matches.length },
            { id: "chat", label: "Chat", icon: MessageCircle, count: 2 },
            { id: "trades", label: "Trades", icon: Handshake, count: trades.length },
          ].map((tab) => (
            <motion.div key={tab.id} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant={activeTab === tab.id ? "default" : "outline"}
                onClick={() => setActiveTab(tab.id)}
                className={
                  activeTab === tab.id
                    ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg"
                    : "bg-white text-emerald-600 border-emerald-200 hover:bg-emerald-50 dark:bg-gray-800 dark:text-emerald-400 dark:border-emerald-700 dark:hover:bg-emerald-900"
                }
              >
                {React.createElement(tab.icon, { className: "h-4 w-4 mr-2" })}
                {tab.label}
                {tab.count > 0 && (
                  <Badge className="ml-2 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                    {tab.count}
                  </Badge>
                )}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* My Items Tab */}
        <AnimatePresence mode="wait">
          {activeTab === "items" && (
            <motion.div
              key="items"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">My Items</h2>
                <Button
                  onClick={() => setShowAddItem(true)}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white hover:scale-105 transition-all duration-200"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Item
                </Button>
              </div>

              <AnimatePresence>
                {showAddItem && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mb-6"
                  >
                    <Card className="backdrop-blur-md bg-white/70 dark:bg-gray-800/70 border-emerald-100 dark:border-gray-700 shadow-xl">
                      <CardHeader>
                        <CardTitle className="text-gray-900 dark:text-white flex items-center">
                          <Upload className="h-5 w-5 mr-2 text-emerald-600" />
                          Add New Item
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="title" className="text-gray-700 dark:text-gray-300">
                              Item Title
                            </Label>
                            <Input
                              id="title"
                              placeholder="e.g., Fresh Tomatoes (5kg)"
                              className="bg-white dark:bg-gray-700 border-emerald-200 dark:border-gray-600"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="category" className="text-gray-700 dark:text-gray-300">
                              Category
                            </Label>
                            <Input
                              id="category"
                              placeholder="e.g., Food, Electronics, Fashion"
                              className="bg-white dark:bg-gray-700 border-emerald-200 dark:border-gray-600"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="description" className="text-gray-700 dark:text-gray-300">
                            Description
                          </Label>
                          <Textarea
                            id="description"
                            placeholder="Describe your item in detail..."
                            className="bg-white dark:bg-gray-700 border-emerald-200 dark:border-gray-600"
                          />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="location" className="text-gray-700 dark:text-gray-300">
                              Location
                            </Label>
                            <Input
                              id="location"
                              placeholder="e.g., Ikeja, Lagos"
                              className="bg-white dark:bg-gray-700 border-emerald-200 dark:border-gray-600"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="value" className="text-gray-700 dark:text-gray-300">
                              Estimated Value
                            </Label>
                            <Input
                              id="value"
                              placeholder="e.g., ₦5,000"
                              className="bg-white dark:bg-gray-700 border-emerald-200 dark:border-gray-600"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label className="text-gray-700 dark:text-gray-300">Photos</Label>
                          <div className="border-2 border-dashed border-emerald-200 dark:border-gray-600 rounded-lg p-8 text-center hover:border-emerald-400 transition-colors duration-200">
                            <Camera className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                            <p className="text-gray-600 dark:text-gray-300">Click to upload photos or drag and drop</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">PNG, JPG up to 10MB</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white flex-1">
                            <Upload className="h-4 w-4 mr-2" />
                            Post Item
                          </Button>
                          <Button
                            variant="outline"
                            onClick={() => setShowAddItem(false)}
                            className="bg-white text-emerald-600 border-emerald-200 hover:bg-emerald-50 dark:bg-gray-800 dark:text-emerald-400 dark:border-emerald-700 dark:hover:bg-emerald-900"
                          >
                            Cancel
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {myItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card className="backdrop-blur-md bg-white/70 dark:bg-gray-800/70 border-emerald-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 overflow-hidden">
                      <CardContent className="p-0">
                        <div className="relative h-48">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute top-2 right-2 flex gap-2">
                            <Badge
                              className={`${
                                item.status === "Active"
                                  ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200"
                                  : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                              }`}
                            >
                              {item.status}
                            </Badge>
                          </div>
                          <div className="absolute bottom-2 left-2">
                            <Badge className="bg-black/70 text-white">{item.value}</Badge>
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
                            {item.description}
                          </p>
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                            <MapPin className="h-4 w-4 mr-1" />
                            {item.location}
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-4">
                              <span className="text-gray-600 dark:text-gray-300">👁️ {item.views} views</span>
                              <span className="text-emerald-600 dark:text-emerald-400">
                                ❤️ {item.interested} interested
                              </span>
                            </div>
                            <Button size="sm" variant="outline" className="hover:scale-105 transition-all duration-200">
                              Edit
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* My Matches Tab */}
          {activeTab === "matches" && (
            <motion.div
              key="matches"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">My Matches</h2>
                <Button
                  variant="outline"
                  className="bg-white text-emerald-600 border-emerald-200 hover:bg-emerald-50 dark:bg-gray-800 dark:text-emerald-400 dark:border-emerald-700 dark:hover:bg-emerald-900"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {matches.map((match, index) => (
                  <motion.div
                    key={match.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card className="backdrop-blur-md bg-white/70 dark:bg-gray-800/70 border-emerald-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 overflow-hidden">
                      <CardContent className="p-0">
                        <div className="relative h-48">
                          <Image
                            src={match.image || "/placeholder.svg"}
                            alt={match.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute top-2 right-2">
                            <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200 animate-pulse">
                              {match.compatibility}% Match
                            </Badge>
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{match.title}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
                            {match.description}
                          </p>
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                              <MapPin className="h-4 w-4 mr-1" />
                              {match.location}
                            </div>
                            <div className="flex items-center">
                              <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                              <span className="text-sm font-medium text-gray-900 dark:text-white">
                                {match.userRating}
                              </span>
                            </div>
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                            <div className="flex items-center justify-between">
                              <span className="font-medium">{match.user}</span>
                              <span className="text-xs">{match.lastSeen}</span>
                            </div>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{match.responseTime}</p>
                          </div>
                          <Button
                            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white hover:scale-105 transition-all duration-200"
                            onClick={() => {
                              setSelectedChat(match)
                              setActiveTab("chat")
                            }}
                          >
                            <MessageCircle className="h-4 w-4 mr-2" />
                            Start Chat
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Chat Tab */}
          {activeTab === "chat" && (
            <motion.div
              key="chat"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Messages</h2>

              {selectedChat ? (
                <Card className="backdrop-blur-md bg-white/70 dark:bg-gray-800/70 border-emerald-100 dark:border-gray-700 h-96 flex flex-col">
                  <CardHeader className="border-b border-emerald-100 dark:border-gray-700">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center">
                          <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                            {selectedChat.user.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">{selectedChat.user}</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Online now</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="outline">
                          <Phone className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => setSelectedChat(null)}>
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 p-4 overflow-y-auto">
                    <div className="space-y-4">
                      {chatMessages.map((message) => (
                        <motion.div
                          key={message.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className={`flex ${message.isMe ? "justify-end" : "justify-start"}`}
                        >
                          <div
                            className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                              message.isMe
                                ? "bg-emerald-600 text-white"
                                : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                            }`}
                          >
                            <p className="text-sm">{message.message}</p>
                            <p
                              className={`text-xs mt-1 ${
                                message.isMe ? "text-emerald-100" : "text-gray-500 dark:text-gray-400"
                              }`}
                            >
                              {message.time}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                  <div className="p-4 border-t border-emerald-100 dark:border-gray-700">
                    <div className="flex space-x-2">
                      <Input
                        placeholder="Type your message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        className="flex-1 bg-white dark:bg-gray-700"
                        onKeyPress={(e) => {
                          if (e.key === "Enter") {
                            // Handle send message
                            setNewMessage("")
                          }
                        }}
                      />
                      <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ) : (
                <Card className="backdrop-blur-md bg-white/70 dark:bg-gray-800/70 border-emerald-100 dark:border-gray-700">
                  <CardContent className="p-8 text-center">
                    <MessageCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No active chats</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Start a conversation with your matches to begin trading
                    </p>
                    <Button
                      onClick={() => setActiveTab("matches")}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white"
                    >
                      Browse Matches
                    </Button>
                  </CardContent>
                </Card>
              )}
            </motion.div>
          )}

          {/* Trades Tab */}
          {activeTab === "trades" && (
            <motion.div
              key="trades"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">My Trades</h2>
              <div className="space-y-4">
                {trades.map((trade, index) => (
                  <motion.div
                    key={trade.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.01 }}
                  >
                    <Card className="backdrop-blur-md bg-white/70 dark:bg-gray-800/70 border-emerald-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-4 mb-3">
                              <div className="flex items-center space-x-2">
                                <Package className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                                <span className="font-semibold text-gray-900 dark:text-white">{trade.item}</span>
                              </div>
                              <span className="text-gray-500 dark:text-gray-400">↔️</span>
                              <div className="flex items-center space-x-2">
                                <Package className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                                <span className="font-semibold text-gray-900 dark:text-white">{trade.partnerItem}</span>
                              </div>
                            </div>
                            <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-300">
                              <span>
                                with <strong>{trade.partner}</strong>
                              </span>
                              <div className="flex items-center">
                                <MapPin className="h-4 w-4 mr-1" />
                                {trade.location}
                              </div>
                              <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-1" />
                                {trade.date}
                              </div>
                            </div>
                            {trade.nextStep && (
                              <div className="mt-2 p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                                <p className="text-sm text-yellow-800 dark:text-yellow-200 flex items-center">
                                  <AlertCircle className="h-4 w-4 mr-2" />
                                  Next: {trade.nextStep}
                                </p>
                              </div>
                            )}
                          </div>
                          <div className="text-right flex flex-col items-end space-y-2">
                            <Badge
                              className={
                                trade.status === "Completed"
                                  ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200"
                                  : trade.status === "In Progress"
                                    ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                                    : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                              }
                            >
                              {trade.status === "Completed" && <CheckCircle className="h-3 w-3 mr-1" />}
                              {trade.status}
                            </Badge>
                            {trade.rating && (
                              <div className="flex items-center">
                                {[...Array(trade.rating)].map((_, i) => (
                                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                                ))}
                              </div>
                            )}
                            {trade.status === "Completed" && !trade.rating && (
                              <div className="flex gap-1">
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="bg-white text-emerald-600 border-emerald-200 hover:bg-emerald-50 dark:bg-gray-800 dark:text-emerald-400 dark:border-emerald-700 dark:hover:bg-emerald-900 hover:scale-105 transition-all duration-200"
                                >
                                  <ThumbsUp className="h-3 w-3" />
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="bg-white text-red-600 border-red-200 hover:bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-700 dark:hover:bg-red-900 hover:scale-105 transition-all duration-200"
                                >
                                  <ThumbsDown className="h-3 w-3" />
                                </Button>
                              </div>
                            )}
                            {trade.status === "In Progress" && (
                              <Button
                                size="sm"
                                className="bg-emerald-600 hover:bg-emerald-700 text-white hover:scale-105 transition-all duration-200"
                              >
                                View Details
                              </Button>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
