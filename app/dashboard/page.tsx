"use client"

import React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
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
  Eye,
  Heart,
  Edit,
  Trash2,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { NIGERIAN_STATES, PRODUCT_CATEGORIES } from "@/lib/constants"

// Real Nigerian products for the dashboard (limited to Lagos, Ibadan, Abeokuta)
const realMyItems = [
  {
    id: 1,
    title: "iPhone 13 Pro 128GB Sierra Blue",
    description:
      "Excellent condition iPhone 13 Pro. Battery health 89%. Original box, charger, and screen protector included. Perfect for photography and business use.",
    category: "Electronics & Gadgets",
    subcategory: "Smartphones",
    condition: "Excellent",
    location: "Victoria Island, Lagos",
    image: "/images/items/iphone-13-pro.jpg",
    status: "Active",
    value: "₦520,000",
    views: 156,
    interested: 8,
    datePosted: "2 days ago",
  },
  {
    id: 2,
    title: "MacBook Pro M1 14-inch Space Gray",
    description:
      "2021 MacBook Pro with M1 Pro chip, 16GB RAM, 512GB SSD. Perfect for video editing and development. Barely used, still under warranty.",
    category: "Electronics & Gadgets",
    subcategory: "Laptops",
    condition: "Like New",
    location: "Bodija, Ibadan",
    image: "/images/items/macbook-pro-m1.jpg",
    status: "Matched",
    value: "₦950,000",
    views: 203,
    interested: 15,
    datePosted: "1 week ago",
  },
  {
    id: 3,
    title: "Canon EOS R6 Camera Kit",
    description:
      "Professional camera kit with 24-105mm lens, extra battery, 64GB memory card, and camera bag. Perfect for photography business.",
    category: "Electronics & Gadgets",
    subcategory: "Cameras",
    condition: "Like New",
    location: "Ikeja, Lagos",
    image: "/images/canon-camera.jpg",
    status: "Active",
    value: "₦850,000",
    views: 89,
    interested: 6,
    datePosted: "3 days ago",
  },
  {
    id: 4,
    title: "PlayStation 5 Console + Games",
    description:
      "PS5 console with 2 controllers, charging station, and 4 games including Spider-Man and FIFA 24. Adult-owned, excellent condition.",
    category: "Electronics & Gadgets",
    subcategory: "Gaming Consoles",
    condition: "Like New",
    location: "Onikolobo, Abeokuta",
    image: "/images/ps5-console.jpg",
    status: "Active",
    value: "₦450,000",
    views: 178,
    interested: 12,
    datePosted: "5 days ago",
  },
  {
    id: 5,
    title: "Designer Handbag Collection",
    description:
      "Authentic Louis Vuitton and Gucci handbags. 3 pieces with certificates of authenticity. Excellent condition, barely used.",
    category: "Fashion & Accessories",
    subcategory: "Bags & Purses",
    condition: "Like New",
    location: "Mokola, Ibadan",
    image: "/images/designer-bags.jpg",
    status: "Pending",
    value: "₦380,000",
    views: 134,
    interested: 9,
    datePosted: "1 day ago",
  },
  {
    id: 6,
    title: "Apple Watch Series 8 45mm",
    description:
      "Apple Watch Series 8 in Midnight Aluminum with Sport Band. GPS + Cellular model. Excellent condition with original charger.",
    category: "Electronics & Gadgets",
    subcategory: "Smart Watches",
    condition: "Excellent",
    location: "Ibara, Abeokuta",
    image: "/images/items/apple-watch.jpg",
    status: "Active",
    value: "₦180,000",
    views: 67,
    interested: 4,
    datePosted: "4 days ago",
  },
];

const realMatches = [];

const realTrades = [
  {
    id: 1,
    item: "iPhone 12 Pro 256GB",
    partner: "Adunni Okafor",
    partnerItem: "Samsung Galaxy S22 Ultra + ₦50k",
    status: "Completed",
    date: "3 days ago",
    rating: 5,
    location: "Victoria Island, Lagos",
    feedback: "Smooth transaction! Phone was exactly as described. Highly recommended trader!",
  },
  {
    id: 2,
    item: "MacBook Air M1",
    partner: "Emeka Nwankwo",
    partnerItem: "Gaming Setup (Monitor + Accessories)",
    status: "In Progress",
    date: "Today",
    rating: null,
    location: "Bodija, Ibadan",
    nextStep: "Meet at Cocoa Mall tomorrow at 3 PM",
  },
  {
    id: 3,
    item: "Canon DSLR Camera",
    partner: "Fatima Aliyu",
    partnerItem: "iPad Pro + Apple Pencil",
    status: "Pending",
    date: "2 hours ago",
    rating: null,
    location: "Ibara, Abeokuta",
    nextStep: "Waiting for partner confirmation",
  },
  {
    id: 4,
    item: "Designer Watch Collection",
    partner: "Bola Adeyemi",
    partnerItem: "Professional Camera Equipment",
    status: "Completed",
    date: "1 week ago",
    rating: 4,
    location: "Onikolobo, Abeokuta",
    feedback: "Good trade overall. Items were as described but delivery was slightly delayed.",
  },
];

const realTrades = [
  {
    id: 1,
    item: "iPhone 12 Pro 256GB",
    partner: "Adunni Okafor",
    partnerItem: "Samsung Galaxy S22 Ultra + ₦50k",
    status: "Completed",
    date: "3 days ago",
    rating: 5,
    location: "Victoria Island, Lagos", // Already valid
    feedback: "Smooth transaction! Phone was exactly as described. Highly recommended trader!",
  },
  {
    id: 2,
    item: "MacBook Air M1",
    partner: "Emeka Nwankwo",
    partnerItem: "Gaming Setup (Monitor + Accessories)",
    status: "In Progress",
    date: "Today",
    rating: null,
    location: "Mokola, Ibadan", // Changed from Lekki, Lagos
    nextStep: "Meet at Lekki Phase 1 tomorrow at 3 PM",
  },
  {
    id: 3,
    item: "Canon DSLR Camera",
    partner: "Fatima Aliyu",
    partnerItem: "iPad Pro + Apple Pencil",
    status: "Pending",
    date: "2 hours ago",
    rating: null,
    location: "Ibara, Abeokuta", // Changed from Ikeja, Lagos
    nextStep: "Waiting for partner confirmation",
  },
  {
    id: 4,
    item: "Designer Watch Collection",
    partner: "Bola Adeyemi",
    partnerItem: "Professional Camera Equipment",
    status: "Completed",
    date: "1 week ago",
    rating: 4,
    location: "Surulere, Lagos", // Already valid
    feedback: "Good trade overall. Items were as described but delivery was slightly delayed.",
  },
];

const chatMessages = [
  {
    id: 1,
    sender: "Ahmed Musa",
    message: "Hello! I'm interested in your iPhone 13 Pro. My Samsung Galaxy S23 Ultra is brand new, still sealed.",
    time: "2:30 PM",
    isMe: false,
    avatar: "/placeholder-user.jpg",
  },
  {
    id: 2,
    sender: "You",
    message: "Hi Ahmed! That sounds like a great trade. Can you send me some photos of the S23 Ultra?",
    time: "2:32 PM",
    isMe: true,
  },
  {
    id: 3,
    sender: "Ahmed Musa",
    message: "I'll send photos now. When would be a good time to meet? I'm in Abuja but can travel to Lagos.",
    time: "2:35 PM",
    isMe: false,
    avatar: "/placeholder-user.jpg",
  },
  {
    id: 4,
    sender: "You",
    message: "Perfect! How about this weekend at Ikeja City Mall? It's a safe public location.",
    time: "2:37 PM",
    isMe: true,
  },
  {
    id: 5,
    sender: "Ahmed Musa",
    message: "That works perfectly! Saturday at 2 PM? I'll bring the phone, charger, and all accessories.",
    time: "2:40 PM",
    isMe: false,
    avatar: "/placeholder-user.jpg",
  },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("items")
  const [showAddItem, setShowAddItem] = useState(false)
  const [selectedChat, setSelectedChat] = useState(null)
  const [newMessage, setNewMessage] = useState("")
  const [mounted, setMounted] = useState(false)
  const [newItemData, setNewItemData] = useState({
    title: "",
    description: "",
    category: "",
    subcategory: "",
    condition: "",
    estimatedValue: "",
    location: "",
    state: "",
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically call an API to add the item
    alert("Item added successfully! 🎉")
    setShowAddItem(false)
    setNewItemData({
      title: "",
      description: "",
      category: "",
      subcategory: "",
      condition: "",
      estimatedValue: "",
      location: "",
      state: "",
    })
  }

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Here you would typically send the message via API
      alert(`Message sent: "${newMessage}"`)
      setNewMessage("")
    }
  }

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-yellow-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-emerald-600 mx-auto mb-4"></div>
          <p className="text-emerald-600 font-semibold">Loading your Barter Dashboard... 🚀</p>
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
                {realMatches.length} New Matches
              </Badge>
              <Link href="/browse">
                <Button variant="outline" className="bg-white text-emerald-600 border-emerald-200 hover:bg-emerald-50">
                  <Search className="h-4 w-4 mr-2" />
                  Browse Items
                </Button>
              </Link>
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
            { id: "items", label: "My Items", icon: Package, count: realMyItems.length },
            { id: "matches", label: "My Matches", icon: Search, count: realMatches.length },
            { id: "chat", label: "Chat", icon: MessageCircle, count: 2 },
            { id: "trades", label: "Trades", icon: Handshake, count: realTrades.length },
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
                      <CardContent>
                        <form onSubmit={handleAddItem} className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="title" className="text-gray-700 dark:text-gray-300">
                                Item Title *
                              </Label>
                              <Input
                                id="title"
                                placeholder="e.g., iPhone 14 Pro Max 256GB"
                                value={newItemData.title}
                                onChange={(e) => setNewItemData({ ...newItemData, title: e.target.value })}
                                className="bg-white dark:bg-gray-700 border-emerald-200 dark:border-gray-600"
                                required
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="category" className="text-gray-700 dark:text-gray-300">
                                Category *
                              </Label>
                              <Select
                                value={newItemData.category}
                                onValueChange={(value) => setNewItemData({ ...newItemData, category: value })}
                              >
                                <SelectTrigger className="bg-white dark:bg-gray-700">
                                  <SelectValue placeholder="Select category" />
                                </SelectTrigger>
                                <SelectContent>
                                  {PRODUCT_CATEGORIES.map((category) => (
                                    <SelectItem key={category.name} value={category.name}>
                                      {category.icon} {category.name}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="description" className="text-gray-700 dark:text-gray-300">
                              Description *
                            </Label>
                            <Textarea
                              id="description"
                              placeholder="Describe your item in detail... condition, accessories included, etc."
                              value={newItemData.description}
                              onChange={(e) => setNewItemData({ ...newItemData, description: e.target.value })}
                              className="bg-white dark:bg-gray-700 border-emerald-200 dark:border-gray-600"
                              rows={3}
                              required
                            />
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="condition" className="text-gray-700 dark:text-gray-300">
                                Condition *
                              </Label>
                              <Select
                                value={newItemData.condition}
                                onValueChange={(value) => setNewItemData({ ...newItemData, condition: value })}
                              >
                                <SelectTrigger className="bg-white dark:bg-gray-700">
                                  <SelectValue placeholder="Select condition" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="Brand New">Brand New</SelectItem>
                                  <SelectItem value="Like New">Like New</SelectItem>
                                  <SelectItem value="Excellent">Excellent</SelectItem>
                                  <SelectItem value="Good">Good</SelectItem>
                                  <SelectItem value="Fair">Fair</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="state" className="text-gray-700 dark:text-gray-300">
                                State *
                              </Label>
                              <Select
                                value={newItemData.state}
                                onValueChange={(value) => setNewItemData({ ...newItemData, state: value })}
                              >
                                <SelectTrigger className="bg-white dark:bg-gray-700">
                                  <SelectValue placeholder="Select state" />
                                </SelectTrigger>
                                <SelectContent>
                                  {NIGERIAN_STATES.map((state) => (
                                    <SelectItem key={state} value={state}>
                                      {state}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="value" className="text-gray-700 dark:text-gray-300">
                                Estimated Value
                              </Label>
                              <Input
                                id="value"
                                placeholder="e.g., ₦500,000"
                                value={newItemData.estimatedValue}
                                onChange={(e) => setNewItemData({ ...newItemData, estimatedValue: e.target.value })}
                                className="bg-white dark:bg-gray-700 border-emerald-200 dark:border-gray-600"
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="location" className="text-gray-700 dark:text-gray-300">
                              Specific Location *
                            </Label>
                            <Input
                              id="location"
                              placeholder="e.g., Victoria Island, Lagos"
                              value={newItemData.location}
                              onChange={(e) => setNewItemData({ ...newItemData, location: e.target.value })}
                              className="bg-white dark:bg-gray-700 border-emerald-200 dark:border-gray-600"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label className="text-gray-700 dark:text-gray-300">Photos *</Label>
                            <div className="border-2 border-dashed border-emerald-200 dark:border-gray-600 rounded-lg p-8 text-center hover:border-emerald-400 transition-colors duration-200">
                              <Camera className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                              <p className="text-gray-600 dark:text-gray-300">
                                Click to upload photos or drag and drop
                              </p>
                              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">PNG, JPG up to 10MB each</p>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700 text-white flex-1">
                              <Upload className="h-4 w-4 mr-2" />
                              Post Item
                            </Button>
                            <Button
                              type="button"
                              variant="outline"
                              onClick={() => setShowAddItem(false)}
                              className="bg-white text-emerald-600 border-emerald-200 hover:bg-emerald-50 dark:bg-gray-800 dark:text-emerald-400 dark:border-emerald-700 dark:hover:bg-emerald-900"
                            >
                              Cancel
                            </Button>
                          </div>
                        </form>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {realMyItems.map((item, index) => (
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
                                  : item.status === "Matched"
                                    ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
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
                          <div className="flex items-center justify-between text-sm mb-4">
                            <div className="flex items-center gap-4">
                              <span className="text-gray-600 dark:text-gray-300 flex items-center">
                                <Eye className="h-4 w-4 mr-1" />
                                {item.views} views
                              </span>
                              <span className="text-emerald-600 dark:text-emerald-400 flex items-center">
                                <Heart className="h-4 w-4 mr-1" />
                                {item.interested} interested
                              </span>
                            </div>
                            <span className="text-xs text-gray-500">{item.datePosted}</span>
                          </div>
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="flex-1 hover:scale-105 transition-all duration-200"
                            >
                              <Edit className="h-3 w-3 mr-1" />
                              Edit
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="text-red-600 hover:bg-red-50 hover:scale-105 transition-all duration-200"
                            >
                              <Trash2 className="h-3 w-3" />
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
                {realMatches.map((match, index) => (
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
                            <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-1 font-medium">
                              Interested in: {match.interestedIn}
                            </p>
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
                            className={`flex items-end space-x-2 max-w-xs lg:max-w-md ${message.isMe ? "flex-row-reverse space-x-reverse" : ""}`}
                          >
                            {!message.isMe && (
                              <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center">
                                <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                                  {message.sender.charAt(0)}
                                </span>
                              </div>
                            )}
                            <div
                              className={`px-4 py-2 rounded-lg ${
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
                            handleSendMessage()
                          }
                        }}
                      />
                      <Button className="bg-emerald-600 hover:bg-emerald-700 text-white" onClick={handleSendMessage}>
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
                {realTrades.map((trade, index) => (
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
                            {trade.feedback && (
                              <div className="mt-2 p-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                <p className="text-sm text-gray-700 dark:text-gray-300 italic">"{trade.feedback}"</p>
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
