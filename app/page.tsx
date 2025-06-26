"use client"

import React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  ArrowRight,
  Users,
  MapPin,
  Star,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  Package,
  Smartphone,
  ShoppingBag,
  Search,
  Zap,
  Sparkles,
  TrendingUp,
  Heart,
  Shield,
  Clock,
  Award,
  Globe,
  Headphones,
  Camera,
  Book,
  Gamepad2,
  Send,
  AlertTriangle,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ThemeToggle } from "@/components/theme-toggle"
import { NigerianGreeting } from "@/components/nigerian-greeting"
import { ItemCard } from "@/components/item-card"
import { getItems } from "@/app/actions/items"
import { submitContactForm, joinWaitlist } from "@/app/actions/contact"
import { NIGERIAN_STATES } from "@/lib/constants"
import type { Item } from "@/lib/types"

const useCases = [
  {
    title: "iPhone 14 Pro for MacBook Air M2",
    description:
      "Kemi from Victoria Island trades her iPhone 14 Pro for a 2022 MacBook Air M2 from a tech entrepreneur in Lekki",
    icon: Smartphone,
    image: "/images/success-story-1.png",
    location: "Lagos State",
    category: "Electronics → Electronics",
    value: "₦650,000 worth",
    gradient: "from-blue-500 to-purple-500",
    naija_phrase: "Sharp deal! 📱💻",
  },
  {
    title: "Designer Bags Collection for Gaming Paradise",
    description:
      "Adunni swaps her authentic Gucci and Louis Vuitton collection for a complete PS5 setup with 4K TV and gaming chair",
    icon: ShoppingBag,
    image: "/images/success-story-2.png",
    location: "FCT Abuja",
    category: "Fashion → Gaming",
    value: "₦480,000 worth",
    gradient: "from-pink-500 to-rose-500",
    naija_phrase: "E choke! 🎮👜",
  },
  {
    title: "Canon EOS R6 for Apple Ecosystem Bundle",
    description:
      "Emeka trades his professional Canon EOS R6 camera kit for MacBook Pro, iPad Pro, and Apple Watch Ultra",
    icon: Camera,
    image: "/images/canon-camera.jpg", // Changed from success-story-3.png to actual camera image
    location: "Rivers State",
    category: "Photography → Tech Bundle",
    value: "₦720,000 worth",
    gradient: "from-emerald-500 to-teal-500",
    naija_phrase: "Correct barter! 📸🍎",
  },
]

// Enhanced sample featured items with proper images
const sampleFeaturedItems = [
  {
    id: "1",
    title: "iPhone 14 Pro Max 256GB",
    description:
      "Pristine condition iPhone 14 Pro Max in Deep Purple. Original box, charger, and accessories included. No scratches or dents.",
    category: "Electronics",
    subcategory: "Smartphones",
    condition: "Like New",
    estimated_value: 650000,
    currency: "NGN",
    images: ["/images/iphone-14-pro.jpg"],
    location: "Victoria Island",
    state: "Lagos",
    is_available: true,
    is_featured: true,
    views_count: 234,
    interested_count: 12,
    status: "active",
    user: {
      id: "user1",
      full_name: "Kemi Adebayo",
      is_verified: true,
      trust_score: 95,
      avatar_url: "/placeholder-user.jpg",
    },
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "2",
    title: "MacBook Air M2 13-inch",
    description:
      "2022 MacBook Air with M2 chip, 8GB RAM, 256GB SSD. Midnight color. Excellent performance for work and creativity.",
    category: "Electronics",
    subcategory: "Laptops",
    condition: "Brand New",
    estimated_value: 720000,
    currency: "NGN",
    images: ["/images/macbook-air-m2.jpg"],
    location: "Lekki",
    state: "Lagos",
    is_available: true,
    is_featured: true,
    views_count: 189,
    interested_count: 8,
    status: "active",
    user: {
      id: "user2",
      full_name: "Tunde Okafor",
      is_verified: true,
      trust_score: 88,
      avatar_url: "/placeholder-user.jpg",
    },
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "3",
    title: "PlayStation 5 Console Bundle",
    description:
      "PS5 console with extra DualSense controller, charging station, and 3 games: Spider-Man, FIFA 24, and Call of Duty.",
    category: "Gaming",
    subcategory: "Consoles",
    condition: "Like New",
    estimated_value: 450000,
    currency: "NGN",
    images: ["/images/ps5-console.jpg"],
    location: "Wuse II",
    state: "FCT",
    is_available: true,
    is_featured: true,
    views_count: 156,
    interested_count: 15,
    status: "active",
    user: {
      id: "user3",
      full_name: "Emeka Nwankwo",
      is_verified: true,
      trust_score: 92,
      avatar_url: "/placeholder-user.jpg",
    },
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "4",
    title: "Canon EOS R6 Camera Kit",
    description:
      "Professional camera kit with 24-105mm lens, extra battery, 64GB memory card, and camera bag. Perfect for photography business.",
    category: "Photography",
    subcategory: "Cameras",
    condition: "Like New",
    estimated_value: 850000,
    currency: "NGN",
    images: ["/images/canon-camera.jpg"],
    location: "GRA",
    state: "Rivers",
    is_available: true,
    is_featured: true,
    views_count: 98,
    interested_count: 6,
    status: "active",
    user: {
      id: "user4",
      full_name: "Fatima Aliyu",
      is_verified: true,
      trust_score: 90,
      avatar_url: "/placeholder-user.jpg",
    },
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "5",
    title: "Designer Handbag Collection",
    description:
      "Authentic Louis Vuitton and Gucci handbags. 3 pieces total - all with certificates of authenticity. Excellent condition.",
    category: "Fashion",
    subcategory: "Bags",
    condition: "Like New",
    estimated_value: 380000,
    currency: "NGN",
    images: ["/images/designer-bags.jpg"],
    location: "Maitama",
    state: "FCT",
    is_available: true,
    is_featured: true,
    views_count: 167,
    interested_count: 9,
    status: "active",
    user: {
      id: "user5",
      full_name: "Adunni Okafor",
      is_verified: true,
      trust_score: 94,
      avatar_url: "/placeholder-user.jpg",
    },
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "6",
    title: "Gaming Setup Complete",
    description:
      "Complete gaming setup: 4K monitor, gaming chair, mechanical keyboard, gaming mouse, and RGB lighting. Ready to dominate!",
    category: "Gaming",
    subcategory: "Accessories",
    condition: "Brand New",
    estimated_value: 320000,
    currency: "NGN",
    images: ["/images/gaming-setup.jpg"],
    location: "Ikeja",
    state: "Lagos",
    is_available: true,
    is_featured: true,
    views_count: 203,
    interested_count: 11,
    status: "active",
    user: {
      id: "user6",
      full_name: "Chidi Okonkwo",
      is_verified: true,
      trust_score: 87,
      avatar_url: "/placeholder-user.jpg",
    },
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "7",
    title: "iPhone 13 Pro 128GB",
    description:
      "Excellent condition iPhone 13 Pro in Sierra Blue. Battery health 89%. Comes with original box and Lightning cable.",
    category: "Electronics",
    subcategory: "Smartphones",
    condition: "Good",
    estimated_value: 520000,
    currency: "NGN",
    images: ["/images/items/iphone-13-pro.jpg"],
    location: "Surulere",
    state: "Lagos",
    is_available: true,
    is_featured: false,
    views_count: 145,
    interested_count: 7,
    status: "active",
    user: {
      id: "user7",
      full_name: "Bola Adeyemi",
      is_verified: true,
      avatar_url: "/placeholder-user.jpg",
    },
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "8",
    title: "Samsung Galaxy S23 Ultra",
    description:
      "Brand new Samsung Galaxy S23 Ultra 256GB in Phantom Black. Still sealed in box with full warranty. Latest flagship model.",
    category: "Electronics",
    subcategory: "Smartphones",
    condition: "Brand New",
    estimated_value: 680000,
    currency: "NGN",
    images: ["/images/items/samsung-galaxy-s23.jpg"],
    location: "Garki",
    state: "FCT",
    is_available: true,
    is_featured: false,
    views_count: 198,
    interested_count: 14,
    status: "active",
    user: {
      id: "user8",
      full_name: "Ahmed Musa",
      is_verified: true,
      trust_score: 93,
      avatar_url: "/placeholder-user.jpg",
    },
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "9",
    title: "MacBook Pro M1 14-inch",
    description:
      "2021 MacBook Pro with M1 Pro chip, 16GB RAM, 512GB SSD. Space Gray. Perfect for video editing and development work.",
    category: "Electronics",
    subcategory: "Laptops",
    condition: "Like New",
    estimated_value: 950000,
    currency: "NGN",
    images: ["/images/items/macbook-pro-m1.jpg"],
    location: "Ikoyi",
    state: "Lagos",
    is_available: true,
    is_featured: false,
    views_count: 176,
    interested_count: 9,
    status: "active",
    user: {
      id: "user9",
      full_name: "Chioma Okwu",
      is_verified: true,
      trust_score: 96,
      avatar_url: "/placeholder-user.jpg",
    },
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "10",
    title: "Dell XPS 13 Laptop",
    description:
      "Dell XPS 13 with Intel i7, 16GB RAM, 512GB SSD. Ultrabook perfect for business and travel. Excellent build quality.",
    category: "Electronics",
    subcategory: "Laptops",
    condition: "Good",
    estimated_value: 420000,
    currency: "NGN",
    images: ["/images/items/dell-xps-laptop.jpg"],
    location: "Kaduna",
    state: "Kaduna",
    is_available: true,
    is_featured: false,
    views_count: 132,
    interested_count: 5,
    status: "active",
    user: {
      id: "user10",
      full_name: "Ibrahim Sani",
      is_verified: true,
      avatar_url: "/placeholder-user.jpg",
    },
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "11",
    title: "Xbox Series X Console",
    description:
      "Microsoft Xbox Series X with 1TB storage. Includes wireless controller and HDMI cable. Perfect for 4K gaming.",
    category: "Gaming",
    subcategory: "Consoles",
    condition: "Like New",
    estimated_value: 380000,
    currency: "NGN",
    images: ["/images/items/xbox-series-x.jpg"],
    location: "Port Harcourt",
    state: "Rivers",
    is_available: true,
    is_featured: false,
    views_count: 164,
    interested_count: 11,
    status: "active",
    user: {
      id: "user11",
      full_name: "Victor Eze",
      is_verified: true,
      avatar_url: "/placeholder-user.jpg",
    },
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "12",
    title: "Nike Air Jordan 1 Retro",
    description:
      "Authentic Nike Air Jordan 1 Retro High OG in Chicago colorway. Size 42. Worn only twice, excellent condition.",
    category: "Fashion",
    subcategory: "Footwear",
    condition: "Like New",
    estimated_value: 85000,
    currency: "NGN",
    images: ["/images/items/nike-sneakers.jpg"],
    location: "Ibadan",
    state: "Oyo",
    is_available: true,
    is_featured: false,
    views_count: 89,
    interested_count: 6,
    status: "active",
    user: {
      id: "user12",
      full_name: "Seun Adebayo",
      is_verified: true,
      avatar_url: "/placeholder-user.jpg",
    },
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
]

const testimonials = [
  {
    name: "Adunni Okafor",
    location: "Victoria Island, Lagos",
    text: "I traded my MacBook Air for iPhone 14 Pro Max plus cash balance. The verification process was seamless, no wahala at all!",
    rating: 5,
    trade: "MacBook Air → iPhone 14 Pro Max + ₦50k",
    avatar: "/placeholder.svg?height=80&width=80",
    gradient: "from-emerald-400 to-teal-500",
    naija_phrase: "God dey! 🙏",
  },
  {
    name: "Emeka Nwankwo",
    location: "Wuse II, Abuja",
    text: "Swapped my PS5 bundle for professional camera equipment. Perfect for my photography business! E go better!",
    rating: 5,
    trade: "PS5 Bundle → Canon EOS R5 Kit",
    avatar: "/placeholder.svg?height=80&width=80",
    gradient: "from-blue-400 to-indigo-500",
    naija_phrase: "Sharp guy! 📸",
  },
  {
    name: "Fatima Aliyu",
    location: "GRA, Kano",
    text: "Traded my luxury watch collection for the latest iPad Pro and MacBook. Amazing platform, we move!",
    rating: 5,
    trade: "Rolex Collection → iPad Pro + MacBook",
    avatar: "/placeholder.svg?height=80&width=80",
    gradient: "from-purple-400 to-pink-500",
    naija_phrase: "Sabi person! ⌚",
  },
]

const stats = [
  {
    label: "Barter Warriors",
    value: "3,247",
    icon: Users,
    color: "text-emerald-600",
    bg: "bg-emerald-100",
    naija: "🇳🇬",
  },
  {
    label: "Successful Swaps",
    value: "8,291",
    icon: TrendingUp,
    color: "text-blue-600",
    bg: "bg-blue-100",
    naija: "💪",
  },
  {
    label: "Product Categories",
    value: "24",
    icon: Package,
    color: "text-purple-600",
    bg: "bg-purple-100",
    naija: "📦",
  },
  { label: "States Covered", value: "36", icon: Globe, color: "text-orange-600", bg: "bg-orange-100", naija: "🌍" },
]

const features = [
  {
    icon: Shield,
    title: "100% Verified Products",
    description: "Every item is authenticated and condition-verified by our Naija experts",
    color: "emerald",
    naija_phrase: "No fake product here!",
  },
  {
    icon: Clock,
    title: "Smart Matching Algorithm",
    description: "AI-powered system finds perfect product matches faster than you can say 'sharp sharp!'",
    color: "blue",
    naija_phrase: "Sharp sharp matching!",
  },
  {
    icon: Award,
    title: "Trust Score System",
    description: "Comprehensive rating system ensures only quality exchanges with trusted Nigerians",
    color: "purple",
    naija_phrase: "Sabi people only!",
  },
  {
    icon: Globe,
    title: "Nationwide Coverage",
    description: "Connect with verified traders from Lagos to Kano, Abuja to Port Harcourt",
    color: "orange",
    naija_phrase: "All 36 states covered!",
  },
]

const productCategories = [
  { name: "Electronics & Gadgets", icon: Smartphone, count: "4,247", color: "from-blue-500 to-cyan-500", naija: "📱" },
  { name: "Fashion & Accessories", icon: ShoppingBag, count: "3,891", color: "from-pink-500 to-rose-500", naija: "👜" },
  {
    name: "Gaming & Entertainment",
    icon: Gamepad2,
    count: "2,154",
    color: "from-purple-500 to-indigo-500",
    naija: "🎮",
  },
  { name: "Books & Media", icon: Book, count: "1,287", color: "from-green-500 to-emerald-500", naija: "📚" },
  { name: "Photography Equipment", icon: Camera, count: "943", color: "from-orange-500 to-red-500", naija: "📸" },
  { name: "Audio & Music", icon: Headphones, count: "1,534", color: "from-yellow-500 to-orange-500", naija: "🎵" },
]

const PRODUCT_CATEGORIES = [
  { name: "Electronics", icon: "📱", description: "Smartphones, laptops, TVs, and more." },
  { name: "Home Appliances", icon: "🏠", description: "Refrigerators, washing machines, cookers, etc." },
  { name: "Furniture", icon: "🪑", description: "Sofas, beds, tables, chairs, and other home furnishings." },
  { name: "Vehicles", icon: "🚗", description: "Cars, motorcycles, bicycles, and vehicle parts." },
]

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [mounted, setMounted] = useState(false)
  const [featuredItems, setFeaturedItems] = useState<Item[]>([])
  const [showContactForm, setShowContactForm] = useState(false)
  const [showWaitlistForm, setShowWaitlistForm] = useState(false)
  const [contactFormData, setContactFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [waitlistFormData, setWaitlistFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    referral_source: "",
  })

  useEffect(() => {
    setMounted(true)
    loadFeaturedItems()
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % useCases.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const loadFeaturedItems = async () => {
    const result = await getItems({ limit: 6 })
    if (result.success && result.data && result.data.length > 0) {
      setFeaturedItems(result.data)
    } else {
      // Use sample data for demonstration - show first 6 items
      setFeaturedItems(sampleFeaturedItems.slice(0, 6))
    }
  }

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData()
    Object.entries(contactFormData).forEach(([key, value]) => {
      formData.append(key, value)
    })

    const result = await submitContactForm(formData)
    if (result.success) {
      alert("Thank you! Your message has been sent. We go respond sharp sharp! 🚀")
      setContactFormData({ name: "", email: "", phone: "", subject: "", message: "" })
      setShowContactForm(false)
    } else {
      alert("Error sending message. Try again abeg!")
    }
  }

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData()
    Object.entries(waitlistFormData).forEach(([key, value]) => {
      formData.append(key, value)
    })

    const result = await joinWaitlist(formData)
    if (result.success) {
      alert("Welcome to the #BringBackBarter movement! We go contact you soon! 🎉")
      setWaitlistFormData({ name: "", email: "", phone: "", location: "", referral_source: "" })
      setShowWaitlistForm(false)
    } else {
      alert("Error joining waitlist. Try again!")
    }
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % useCases.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + useCases.length) % useCases.length)
  }

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-yellow-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-emerald-600 mx-auto mb-4"></div>
          <p className="text-emerald-600 font-semibold">Loading the Barterverse... 🚀</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-1000 overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Nigerian Flag Colors Floating Orbs */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className={`absolute rounded-full opacity-20 ${
              i % 3 === 0 ? "bg-green-400" : i % 3 === 1 ? "bg-white" : "bg-green-600"
            } dark:opacity-10`}
            style={{
              width: `${Math.random() * 80 + 40}px`,
              height: `${Math.random() * 80 + 40}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 12 + Math.random() * 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Nigerian Pattern Grid */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fillRule=%22evenodd%22%3E%3Cg%20fill=%2310b981%20fillOpacity=%220.05%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] dark:bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fillRule=%22evenodd%22%3E%3Cg%20fill=%23ffffff%20fillOpacity=%220.03%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      {/* Sticky Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="sticky top-0 z-50 backdrop-blur-xl bg-white/90 dark:bg-gray-900/90 border-b border-emerald-100/50 dark:border-gray-700/50 shadow-lg shadow-emerald-100/20 dark:shadow-gray-900/20"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div className="flex items-center space-x-3" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <div className="relative w-12 h-12 rounded-full bg-gradient-to-r from-green-600 via-white to-green-600 p-1">
                <div className="w-full h-full bg-white dark:bg-gray-900 rounded-full flex items-center justify-center">
                  <Image src="/images/b3-logo.png" alt="B3 Logo" width={24} height={24} className="object-contain" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  B3
                </h1>
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Badge className="text-xs bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 shadow-lg">
                    #BringBackBarter 🇳🇬
                  </Badge>
                </motion.div>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {["How It Works", "Browse Items", "About Us", "Contact"].map((item, index) => (
                <motion.button
                  key={item}
                  onClick={() => {
                    if (item === "Contact") setShowContactForm(true)
                    else if (item === "Browse Items") window.location.href = "/browse"
                    else if (item === "About Us") window.location.href = "/about"
                    else
                      document
                        .getElementById(item.toLowerCase().replace(" ", "-"))
                        ?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="relative text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-medium group"
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-600 to-emerald-600 group-hover:w-full transition-all duration-300"></span>
                </motion.button>
              ))}
              <Link href="/auth">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    className="bg-white/80 text-emerald-600 border-emerald-200 hover:bg-emerald-50 dark:bg-gray-800/80 dark:text-emerald-400 dark:border-emerald-700 dark:hover:bg-emerald-900/50 backdrop-blur-sm shadow-lg"
                  >
                    Sign In
                  </Button>
                </motion.div>
              </Link>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  className="bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white shadow-lg shadow-emerald-200 dark:shadow-emerald-900/50"
                  onClick={() => setShowWaitlistForm(true)}
                >
                  Join the Movement
                  <Sparkles className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </nav>

            {/* Theme Toggle & Mobile Menu */}
            <div className="flex items-center space-x-3">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-gray-600 dark:text-gray-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/50"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <AnimatePresence mode="wait">
                  {mobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-5 w-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-5 w-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden mt-4 pb-4 border-t border-emerald-100 dark:border-gray-700 pt-4"
              >
                <nav className="flex flex-col space-y-4">
                  {["How It Works", "Browse Items", "About Us", "Contact"].map((item, index) => (
                    <motion.button
                      key={item}
                      onClick={() => {
                        if (item === "Contact") setShowContactForm(true)
                        else if (item === "Browse Items") window.location.href = "/browse"
                        else if (item === "About Us") window.location.href = "/about"
                        setMobileMenuOpen(false)
                      }}
                      className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-medium text-left"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {item}
                    </motion.button>
                  ))}
                  <Link href="/auth">
                    <Button
                      variant="outline"
                      className="bg-white text-emerald-600 border-emerald-200 hover:bg-emerald-50 dark:bg-gray-800 dark:text-emerald-400 dark:border-emerald-700 dark:hover:bg-emerald-900 w-full"
                    >
                      Sign In
                    </Button>
                  </Link>
                  <Button
                    className="bg-gradient-to-r from-green-600 to-emerald-700 text-white w-full shadow-lg"
                    onClick={() => setShowWaitlistForm(true)}
                  >
                    Join the Movement
                    <Sparkles className="ml-2 h-4 w-4" />
                  </Button>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-5xl mx-auto"
        >
          <NigerianGreeting />

          <motion.div
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
              Barter is Back{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-green-600 via-emerald-500 to-green-600 bg-clip-text text-transparent">
                  &
                </span>
              </span>
              <br />
              <span className="bg-gradient-to-r from-emerald-500 via-green-600 to-emerald-500 bg-clip-text text-transparent">
                Better
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-12"
          >
            <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-4 font-light">
              The ancient art of trading is back with a modern twist!
            </p>
            <div className="flex items-center justify-center space-x-2 text-lg mb-4">
              <span className="text-green-600 dark:text-green-400 font-bold">No cash needed,</span>
              <Heart className="h-5 w-5 text-red-500 animate-pulse" />
              <span className="text-emerald-600 dark:text-emerald-400 font-bold">just pure value exchange</span>
            </div>
            <p className="text-lg text-gray-500 dark:text-gray-400 italic">
              "Because the best things in life aren't bought, they're traded!" 💚
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white px-10 py-4 text-lg shadow-2xl shadow-emerald-200 dark:shadow-emerald-900/50 group relative overflow-hidden"
                onClick={() => setShowWaitlistForm(true)}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                Join #BringBackBarter
                <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
                  <ArrowRight className="ml-3 h-5 w-5" />
                </motion.div>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-white/80 text-emerald-600 border-2 border-emerald-200 hover:bg-emerald-50 dark:bg-gray-800/80 dark:text-emerald-400 dark:border-emerald-700 dark:hover:bg-emerald-900/50 px-10 py-4 text-lg backdrop-blur-sm shadow-xl"
              >
                See How It Works
                <Zap className="ml-3 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            className="flex items-center justify-center space-x-3"
          >
            <span className="text-2xl">🇳🇬</span>
            <span className="text-lg font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
              Universe of Exchange - BARTERVERSE
            </span>
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Sparkles className="h-6 w-6 text-emerald-500" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Floating Stats */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.1, y: -10 }}
              className="group"
            >
              <Card className="backdrop-blur-xl bg-white/80 dark:bg-gray-800/80 border-0 shadow-2xl shadow-emerald-100/50 dark:shadow-gray-900/50 hover:shadow-3xl transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-emerald-50 dark:group-hover:from-gray-800 dark:group-hover:to-emerald-900/20">
                <CardContent className="p-6 text-center">
                  <motion.div
                    className={`${stat.bg} dark:bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {React.createElement(stat.icon, {
                      className: `h-8 w-8 ${stat.color} dark:text-white`,
                    })}
                  </motion.div>
                  <motion.div
                    className="text-3xl font-black text-gray-900 dark:text-white mb-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.6 + index * 0.1 }}
                  >
                    {stat.value} {stat.naija}
                  </motion.div>
                  <div className="text-sm font-medium text-gray-600 dark:text-gray-300">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4 max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center space-x-2 text-yellow-800 dark:text-yellow-200">
            <AlertTriangle className="h-5 w-5" />
            <span className="font-medium">Durable Goods Only</span>
          </div>
          <p className="text-center text-sm text-yellow-700 dark:text-yellow-300 mt-1">
            We focus on product-to-product exchanges. Consumables and perishable items are not permitted.
          </p>
        </motion.div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
            🧩 How{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              B3 Works
            </span>
            <span className="text-2xl"> 🇳🇬</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Barter Made Easy for Nigerians - Step-by-Step Breakdown
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              step: "1",
              title: "Create Account",
              description: "Sign up as a 'Barter Warrior' with email and location",
              icon: "👤",
              color: "from-blue-500 to-cyan-500",
            },
            {
              step: "2",
              title: "List What You Have",
              description: "Post durable goods with photos and descriptions",
              icon: "📦",
              color: "from-green-500 to-emerald-500",
            },
            {
              step: "3",
              title: "Smart Match",
              description: "Get AI recommendations or browse manually",
              icon: "🎯",
              color: "from-purple-500 to-pink-500",
            },
            {
              step: "4",
              title: "Complete Trade",
              description: "Chat, meet safely, exchange, and rate each other",
              icon: "🤝",
              color: "from-orange-500 to-red-500",
            },
          ].map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <div
                className={`w-20 h-20 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}
              >
                <span className="text-2xl">{step.icon}</span>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                <div className="text-3xl font-bold text-emerald-600 mb-2">Step {step.step}</div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-4 text-center">
            ✅ What Makes It Work
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-emerald-600">📍</span>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Geo-filtering:</strong> See people near you
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-emerald-600">🛡️</span>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Trust-based:</strong> Community ratings + verified users
                </span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-emerald-600">💚</span>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>No money:</strong> Just value-for-value exchange
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-emerald-600">🎯</span>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Your control:</strong> No AI decisions for you
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Sample Trade Examples</h4>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { offer: "Working gas stove", want: "Used smartphone" },
              { offer: "2 pairs of sneakers", want: "Electric iron" },
              { offer: "Bag of cement", want: "Set of ceiling fans" },
            ].map((trade, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
                <div className="text-sm text-gray-600 dark:text-gray-400">You Offer</div>
                <div className="font-semibold text-gray-900 dark:text-white">{trade.offer}</div>
                <div className="text-emerald-600 text-xl my-2">↔️</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">You Want</div>
                <div className="font-semibold text-gray-900 dark:text-white">{trade.want}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Items Section */}
      {featuredItems.length > 0 && (
        <section className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
              Hot Items{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                for Swap
              </span>
              <span className="text-2xl"> 🔥</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Fresh listings from verified Barter Warriors across Nigeria
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <ItemCard
                  item={item}
                  onViewItem={(item) => alert(`Viewing ${item.title} - Full details coming soon!`)}
                  onInterested={(item) =>
                    alert(`Interest registered for ${item.title}! We go connect you with the owner.`)
                  }
                />
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Product Categories Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
            Trade in{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Every Category
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            From electronics to fashion, gaming to photography - find your perfect trade match
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCT_CATEGORIES.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group cursor-pointer"
            >
              <Card className="backdrop-blur-xl bg-white/80 dark:bg-gray-800/80 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <motion.div
                      className="w-16 h-16 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className="text-2xl">{category.icon}</span>
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                        {category.name}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{category.description}</p>
                      <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">Durable goods only</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Real-Life Use Cases Slider */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
            Real Stories,{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Real Trades
            </span>
            <span className="text-2xl"> 🇳🇬</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            See how Nigerians are transforming their lives through smart product exchanges
          </p>
        </motion.div>

        <div className="relative max-w-7xl mx-auto">
          <Card className="backdrop-blur-xl bg-white/90 dark:bg-gray-800/90 border-0 overflow-hidden shadow-3xl shadow-emerald-100/50 dark:shadow-gray-900/50 rounded-3xl">
            <CardContent className="p-0">
              <div className="flex items-center relative">
                <motion.button
                  onClick={prevSlide}
                  className="absolute left-6 z-20 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-700 shadow-2xl rounded-full p-4 backdrop-blur-sm"
                  whileHover={{ scale: 1.1, x: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronLeft className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                </motion.button>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 300 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -300 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="w-full"
                  >
                    <div className="grid md:grid-cols-2 gap-0 min-h-[500px]">
                      <div className="p-12 md:p-16 flex flex-col justify-center relative overflow-hidden">
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${useCases[currentSlide].gradient} opacity-5`}
                        />
                        <div className="relative z-10">
                          <div className="flex items-center mb-8">
                            <motion.div
                              className={`bg-gradient-to-r ${useCases[currentSlide].gradient} w-16 h-16 rounded-2xl flex items-center justify-center mr-6 shadow-lg`}
                              animate={{ rotate: [0, 360] }}
                              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                            >
                              {React.createElement(useCases[currentSlide].icon, {
                                className: "h-8 w-8 text-white",
                              })}
                            </motion.div>
                            <div>
                              <Badge className="bg-gradient-to-r from-green-400 to-emerald-400 text-white border-0 mb-3 shadow-lg">
                                ✨ Success Story
                              </Badge>
                              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                <MapPin className="h-4 w-4" />
                                {useCases[currentSlide].location}
                              </div>
                            </div>
                          </div>
                          <h3 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
                            {useCases[currentSlide].title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                            {useCases[currentSlide].description}
                          </p>
                          <div className="mb-6">
                            <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300 px-3 py-1 text-sm font-medium">
                              {useCases[currentSlide].naija_phrase}
                            </Badge>
                          </div>
                          <div className="flex flex-wrap gap-4">
                            <Badge
                              variant="outline"
                              className="bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-300 px-4 py-2 text-sm font-medium"
                            >
                              {useCases[currentSlide].category}
                            </Badge>
                            <Badge
                              variant="outline"
                              className="bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-300 px-4 py-2 text-sm font-medium"
                            >
                              {useCases[currentSlide].value}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="relative h-80 md:h-auto overflow-hidden">
                        <Image
                          src={useCases[currentSlide].image || "/placeholder.svg"}
                          alt={useCases[currentSlide].title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                        <motion.div
                          className="absolute bottom-6 left-6 right-6"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Trade Value</span>
                              <span className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                                {useCases[currentSlide].value}
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <motion.button
                  onClick={nextSlide}
                  className="absolute right-6 z-20 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-700 shadow-2xl rounded-full p-4 backdrop-blur-sm"
                  whileHover={{ scale: 1.1, x: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronRight className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                </motion.button>
              </div>
            </CardContent>
          </Card>

          {/* Enhanced Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {useCases.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`relative overflow-hidden rounded-full transition-all duration-300 ${
                  index === currentSlide ? "w-12 h-4" : "w-4 h-4"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <div
                  className={`w-full h-full rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-gradient-to-r from-green-600 to-emerald-600"
                      : "bg-gray-300 dark:bg-gray-600"
                  }`}
                />
                {index === currentSlide && (
                  <motion.div
                    className="absolute inset-0 bg-white/30 rounded-full"
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">B3?</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Built specifically for Nigerian traders with features that matter
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group"
            >
              <Card className="backdrop-blur-xl bg-white/80 dark:bg-gray-800/80 border-0 shadow-2xl shadow-emerald-100/20 dark:shadow-gray-900/20 hover:shadow-3xl transition-all duration-500 h-full group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-emerald-50 dark:group-hover:from-gray-800 dark:group-hover:to-emerald-900/20 rounded-2xl">
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <motion.div
                    className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 ${
                      feature.color === "emerald"
                        ? "bg-gradient-to-r from-emerald-500 to-emerald-600"
                        : feature.color === "blue"
                          ? "bg-gradient-to-r from-blue-500 to-blue-600"
                          : feature.color === "purple"
                            ? "bg-gradient-to-r from-purple-500 to-purple-600"
                            : "bg-gradient-to-r from-orange-500 to-orange-600"
                    }`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {React.createElement(feature.icon, {
                      className: "h-10 w-10 text-white",
                    })}
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 flex-grow leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300 text-xs">
                    {feature.naija_phrase}
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
            What Our{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Barter Warriors
            </span>{" "}
            Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Real feedback from real Nigerian traders making real exchanges
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ scale: 1.02, y: -10 }}
              className="group"
            >
              <Card className="backdrop-blur-xl bg-white/80 dark:bg-gray-800/80 border-0 shadow-2xl shadow-emerald-100/20 dark:shadow-gray-900/20 hover:shadow-3xl transition-all duration-500 h-full rounded-2xl overflow-hidden">
                <CardContent className="p-8 relative">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${testimonial.gradient}`} />
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`relative w-16 h-16 rounded-full bg-gradient-to-r ${testimonial.gradient} p-1`}>
                      <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-800">
                        <Image
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={60}
                          height={60}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <Star className="h-5 w-5 text-yellow-400 fill-current" />
                          </motion.div>
                        ))}
                      </div>
                      <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.location}</p>
                    </div>
                  </div>
                  <blockquote className="text-gray-600 dark:text-gray-300 mb-6 italic text-lg leading-relaxed">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      variant="outline"
                      className="bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-300 px-3 py-1 text-xs font-medium"
                    >
                      {testimonial.trade}
                    </Badge>
                    <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300 text-xs">
                      {testimonial.naija_phrase}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.02 }}
          className="relative"
        >
          <Card className="backdrop-blur-xl bg-gradient-to-r from-green-600 via-emerald-500 to-green-500 border-0 text-white shadow-3xl overflow-hidden relative rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/95 to-emerald-500/95" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fillRule=%22evenodd%22%3E%3Cg%20fill=%23ffffff%20fillOpacity=%220.1%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
            <CardContent className="p-16 text-center relative z-10">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
              >
                <h2 className="text-4xl md:text-6xl font-black mb-6">Ready to Join the #BringBackBarter Movement?</h2>
              </motion.div>
              <p className="text-xl md:text-2xl mb-4 opacity-90 max-w-2xl mx-auto">
                Over <span className="font-bold">3,247</span> Barter Warriors are already discovering how trading can be
                better than ever!
              </p>
              <p className="text-lg mb-8 opacity-80 italic">"No wahala, just pure value exchange!" 🇳🇬</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="bg-white text-green-600 hover:bg-gray-100 px-10 py-4 text-lg shadow-2xl group relative overflow-hidden font-bold"
                    onClick={() => setShowWaitlistForm(true)}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-green-100/50 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                    Join #BringBackBarter
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <ArrowRight className="ml-3 h-5 w-5" />
                    </motion.div>
                  </Button>
                </motion.div>
                <Link href="/dashboard">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-10 py-4 text-lg backdrop-blur-sm font-bold"
                    >
                      Browse Items
                      <Search className="ml-3 h-5 w-5" />
                    </Button>
                  </motion.div>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Contact Form Modal */}
      <AnimatePresence>
        {showContactForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowContactForm(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-md w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Contact Us</h3>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowContactForm(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="contact-name">Name</Label>
                  <Input
                    id="contact-name"
                    value={contactFormData.name}
                    onChange={(e) => setContactFormData({ ...contactFormData, name: e.target.value })}
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="contact-email">Email</Label>
                  <Input
                    id="contact-email"
                    type="email"
                    value={contactFormData.email}
                    onChange={(e) => setContactFormData({ ...contactFormData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="contact-phone">Phone (Optional)</Label>
                  <Input
                    id="contact-phone"
                    value={contactFormData.phone}
                    onChange={(e) => setContactFormData({ ...contactFormData, phone: e.target.value })}
                    placeholder="+234 xxx xxx xxxx"
                  />
                </div>
                <div>
                  <Label htmlFor="contact-subject">Subject</Label>
                  <Input
                    id="contact-subject"
                    value={contactFormData.subject}
                    onChange={(e) => setContactFormData({ ...contactFormData, subject: e.target.value })}
                    placeholder="What's this about?"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="contact-message">Message</Label>
                  <Textarea
                    id="contact-message"
                    value={contactFormData.message}
                    onChange={(e) => setContactFormData({ ...contactFormData, message: e.target.value })}
                    placeholder="Tell us how we can help..."
                    rows={4}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Waitlist Form Modal */}
      <AnimatePresence>
        {showWaitlistForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowWaitlistForm(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-md w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Join the Movement!</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Be among the first Barter Warriors 🇳🇬</p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowWaitlistForm(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <form onSubmit={handleWaitlistSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="waitlist-name">Full Name</Label>
                  <Input
                    id="waitlist-name"
                    value={waitlistFormData.name}
                    onChange={(e) => setWaitlistFormData({ ...waitlistFormData, name: e.target.value })}
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="waitlist-email">Email</Label>
                  <Input
                    id="waitlist-email"
                    type="email"
                    value={waitlistFormData.email}
                    onChange={(e) => setWaitlistFormData({ ...waitlistFormData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="waitlist-phone">Phone</Label>
                  <Input
                    id="waitlist-phone"
                    value={waitlistFormData.phone}
                    onChange={(e) => setWaitlistFormData({ ...waitlistFormData, phone: e.target.value })}
                    placeholder="+234 xxx xxx xxxx"
                  />
                </div>
                <div>
                  <Label htmlFor="waitlist-location">Location</Label>
                  <Select onValueChange={(value) => setWaitlistFormData({ ...waitlistFormData, location: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your state" />
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
                <div>
                  <Label htmlFor="waitlist-referral">How did you hear about us?</Label>
                  <Select
                    onValueChange={(value) => setWaitlistFormData({ ...waitlistFormData, referral_source: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select source" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="social-media">Social Media</SelectItem>
                      <SelectItem value="friend">Friend/Family</SelectItem>
                      <SelectItem value="google">Google Search</SelectItem>
                      <SelectItem value="news">News/Blog</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
                  <Sparkles className="h-4 w-4 mr-2" />
                  Join #BringBackBarter
                </Button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/30 to-emerald-900/30" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fillRule=%22evenodd%22%3E%3Cg%20fill=%23ffffff%20fillOpacity=%220.02%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="col-span-2 md:col-span-1"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 p-1">
                  <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center">
                    <Image src="/images/b3-logo.png" alt="B3 Logo" width={24} height={24} className="object-contain" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                    B3
                  </h3>
                  <p className="text-sm text-gray-400">#BringBackBarter</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4 font-medium">Barter is Back & Better</p>
              <p className="text-sm text-gray-500">Universe of Exchange - BARTERVERSE 🇳🇬</p>
              <p className="text-xs text-gray-600 mt-2 italic">"No wahala, just pure value exchange!"</p>
            </motion.div>

            {[
              {
                title: "Platform",
                links: [
                  { name: "About Us", href: "/about" },
                  { name: "How It Works", href: "#how-it-works" },
                  { name: "Browse Items", href: "/browse" },
                  { name: "Categories", href: "/browse" },
                ],
              },
              {
                title: "Support",
                links: [
                  { name: "Contact", href: "#", onClick: () => setShowContactForm(true) },
                  { name: "Help Center", href: "/help" },
                  { name: "Safety Guidelines", href: "/safety" },
                  { name: "Report Issue", href: "/report" },
                ],
              },
              {
                title: "Legal",
                links: [
                  { name: "Terms & Conditions", href: "/legal/terms" },
                  { name: "Privacy Policy", href: "/legal/privacy" },
                  { name: "Community Guidelines", href: "/legal/guidelines" },
                  { name: "Prohibited Items", href: "/legal/guidelines#prohibited" },
                ],
              },
            ].map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (index + 1) * 0.1, duration: 0.8 }}
              >
                <h4 className="font-bold mb-6 text-lg">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      {link.onClick ? (
                        <button
                          onClick={link.onClick}
                          className="text-gray-400 hover:text-white transition-colors hover:text-emerald-400 group flex items-center"
                        >
                          <span className="group-hover:translate-x-1 transition-transform duration-200">
                            {link.name}
                          </span>
                        </button>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-gray-400 hover:text-white transition-colors hover:text-emerald-400 group flex items-center"
                        >
                          <span className="group-hover:translate-x-1 transition-transform duration-200">
                            {link.name}
                          </span>
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="border-t border-gray-800 mt-12 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-500 text-center md:text-left">
                &copy; 2024 B3 - BringBackBarter. Made with ❤️ for Nigeria. 🇳🇬
              </p>
              <div className="flex items-center space-x-3">
                <span className="text-gray-500 text-sm">Built by</span>
                <div className="flex items-center space-x-2">
                  <div className="relative w-5 h-5">
                    <Image src="/images/b9-logo.png" alt="B9Tech Logo" fill className="object-contain" />
                  </div>
                  <span className="text-gray-400 font-medium">B9Tech Consult</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
