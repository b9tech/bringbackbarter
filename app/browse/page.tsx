"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Search, Filter, Package, Smartphone, ShoppingBag, Book, Camera, Home, Car } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ItemCard } from "@/components/item-card"
import { getItems } from "@/app/actions/items"
import { NIGERIAN_STATES, PRODUCT_CATEGORIES } from "@/lib/constants"
import type { Item } from "@/lib/types"

// Real Nigerian products for browsing
const realNigerianProducts: Item[] = [
  {
    id: "1",
    title: "iPhone 14 Pro Max 256GB",
    description:
      "Pristine condition iPhone 14 Pro Max in Deep Purple. Original box, charger, and accessories included. No scratches or dents. Perfect for content creation and business.",
    category: "Electronics & Gadgets",
    subcategory: "Smartphones",
    condition: "Like New",
    estimated_value: 650000,
    currency: "NGN",
    images: ["/images/iphone-14-pro.jpg"],
    location: "Victoria Island",
    state: "Lagos",
    lga: "Lagos Island",
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
      location: "Victoria Island, Lagos",
    },
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "2",
    title: "MacBook Air M2 13-inch Space Gray",
    description:
      "2022 MacBook Air with M2 chip, 8GB RAM, 256GB SSD. Midnight color. Excellent performance for work and creativity. Barely used, still under warranty.",
    category: "Electronics & Gadgets",
    subcategory: "Laptops",
    condition: "Brand New",
    estimated_value: 720000,
    currency: "NGN",
    images: ["/images/macbook-air-m2.jpg"],
    location: "Lekki",
    state: "Lagos",
    lga: "Eti-Osa",
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
      location: "Lekki, Lagos",
    },
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "3",
    title: "PlayStation 5 Console Bundle",
    description:
      "PS5 console with extra DualSense controller, charging station, and 3 games: Spider-Man, FIFA 24, and Call of Duty. Perfect condition, adult-owned.",
    category: "Electronics & Gadgets",
    subcategory: "Gaming Consoles",
    condition: "Like New",
    estimated_value: 450000,
    currency: "NGN",
    images: ["/images/ps5-console.jpg"],
    location: "Wuse II",
    state: "FCT",
    lga: "Abuja Municipal",
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
      location: "Wuse II, Abuja",
    },
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "4",
    title: "Canon EOS R6 Camera Kit",
    description:
      "Professional camera kit with 24-105mm lens, extra battery, 64GB memory card, and camera bag. Perfect for photography business or serious hobbyists.",
    category: "Electronics & Gadgets",
    subcategory: "Cameras",
    condition: "Like New",
    estimated_value: 850000,
    currency: "NGN",
    images: ["/images/canon-camera.jpg"],
    location: "GRA",
    state: "Rivers",
    lga: "Port Harcourt",
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
      location: "GRA, Port Harcourt",
    },
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "5",
    title: "Designer Handbag Collection",
    description:
      "Authentic Louis Vuitton and Gucci handbags. 3 pieces total - all with certificates of authenticity. Excellent condition, barely used.",
    category: "Fashion & Accessories",
    subcategory: "Bags & Purses",
    condition: "Like New",
    estimated_value: 380000,
    currency: "NGN",
    images: ["/images/designer-bags.jpg"],
    location: "Maitama",
    state: "FCT",
    lga: "Abuja Municipal",
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
      location: "Maitama, Abuja",
    },
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "6",
    title: "Gaming Setup Complete",
    description:
      "Complete gaming setup: 4K monitor, gaming chair, mechanical keyboard, gaming mouse, and RGB lighting. Ready to dominate any game!",
    category: "Electronics & Gadgets",
    subcategory: "Gaming Accessories",
    condition: "Brand New",
    estimated_value: 320000,
    currency: "NGN",
    images: ["/images/gaming-setup.jpg"],
    location: "Ikeja",
    state: "Lagos",
    lga: "Ikeja",
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
      location: "Ikeja, Lagos",
    },
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "7",
    title: "Samsung Galaxy S23 Ultra 256GB",
    description:
      "Brand new Samsung Galaxy S23 Ultra in Phantom Black. Still sealed in box with full warranty. Latest flagship model with S Pen.",
    category: "Electronics & Gadgets",
    subcategory: "Smartphones",
    condition: "Brand New",
    estimated_value: 680000,
    currency: "NGN",
    images: ["/images/items/samsung-galaxy-s23.jpg"],
    location: "Garki",
    state: "FCT",
    lga: "Abuja Municipal",
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
      location: "Garki, Abuja",
    },
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "8",
    title: "Nike Air Jordan 1 Retro High OG",
    description:
      "Authentic Nike Air Jordan 1 Retro High OG in Chicago colorway. Size 42. Worn only twice, excellent condition. Comes with original box.",
    category: "Fashion & Accessories",
    subcategory: "Shoes",
    condition: "Like New",
    estimated_value: 85000,
    currency: "NGN",
    images: ["/images/items/nike-sneakers.jpg"],
    location: "Ibadan",
    state: "Oyo",
    lga: "Ibadan North",
    is_available: true,
    is_featured: false,
    views_count: 89,
    interested_count: 6,
    status: "active",
    user: {
      id: "user12",
      full_name: "Seun Adebayo",
      is_verified: true,
      trust_score: 85,
      avatar_url: "/placeholder-user.jpg",
      location: "Ibadan, Oyo",
    },
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "9",
    title: "Apple Watch Series 8 45mm",
    description:
      "Apple Watch Series 8 in Midnight Aluminum with Sport Band. GPS + Cellular model. Excellent condition with original charger and box.",
    category: "Electronics & Gadgets",
    subcategory: "Smart Watches",
    condition: "Excellent",
    estimated_value: 180000,
    currency: "NGN",
    images: ["/images/items/apple-watch.jpg"],
    location: "Kaduna",
    state: "Kaduna",
    lga: "Kaduna North",
    is_available: true,
    is_featured: false,
    views_count: 76,
    interested_count: 4,
    status: "active",
    user: {
      id: "user13",
      full_name: "Aisha Bello",
      is_verified: true,
      trust_score: 91,
      avatar_url: "/placeholder-user.jpg",
      location: "Kaduna, Kaduna",
    },
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "10",
    title: "Bose QuietComfort 45 Headphones",
    description:
      "Premium noise-cancelling headphones in excellent condition. Perfect for music production, travel, or just enjoying high-quality audio.",
    category: "Electronics & Gadgets",
    subcategory: "Headphones",
    condition: "Excellent",
    estimated_value: 120000,
    currency: "NGN",
    images: ["/images/items/bose-headphones.jpg"],
    location: "Enugu",
    state: "Enugu",
    lga: "Enugu East",
    is_available: true,
    is_featured: false,
    views_count: 54,
    interested_count: 3,
    status: "active",
    user: {
      id: "user14",
      full_name: "Chioma Eze",
      is_verified: true,
      trust_score: 88,
      avatar_url: "/placeholder-user.jpg",
      location: "Enugu, Enugu",
    },
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
]

const categoryIcons = {
  "Electronics & Gadgets": Smartphone,
  "Fashion & Accessories": ShoppingBag,
  "Home & Living": Home,
  "Books & Media": Book,
  "Sports & Fitness": Package,
  "Arts & Crafts": Camera,
  "Tools & Equipment": Package,
  "Automotive & Transport": Car,
}

export default function BrowsePage() {
  const [mounted, setMounted] = useState(false)
  const [items, setItems] = useState<Item[]>(realNigerianProducts)
  const [filteredItems, setFilteredItems] = useState<Item[]>(realNigerianProducts)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedState, setSelectedState] = useState("")
  const [selectedCondition, setSelectedCondition] = useState("")
  const [sortBy, setSortBy] = useState("newest")

  useEffect(() => {
    setMounted(true)
    loadItems()
  }, [])

  useEffect(() => {
    filterItems()
  }, [searchQuery, selectedCategory, selectedState, selectedCondition, sortBy, items])

  const loadItems = async () => {
    const result = await getItems()
    if (result.success && result.data && result.data.length > 0) {
      setItems(result.data)
    }
    // If no items from database, we'll use the real Nigerian products as fallback
  }

  const filterItems = () => {
    let filtered = [...items]

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.category.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    // Category filter
    if (selectedCategory) {
      filtered = filtered.filter((item) => item.category === selectedCategory)
    }

    // State filter
    if (selectedState) {
      filtered = filtered.filter((item) => item.state === selectedState)
    }

    // Condition filter
    if (selectedCondition) {
      filtered = filtered.filter((item) => item.condition === selectedCondition)
    }

    // Sort
    switch (sortBy) {
      case "newest":
        filtered.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
        break
      case "oldest":
        filtered.sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime())
        break
      case "price-high":
        filtered.sort((a, b) => (b.estimated_value || 0) - (a.estimated_value || 0))
        break
      case "price-low":
        filtered.sort((a, b) => (a.estimated_value || 0) - (b.estimated_value || 0))
        break
      case "popular":
        filtered.sort((a, b) => (b.views_count || 0) - (a.views_count || 0))
        break
    }

    setFilteredItems(filtered)
  }

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedCategory("")
    setSelectedState("")
    setSelectedCondition("")
    setSortBy("newest")
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
                <h1 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">Browse Items</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Discover amazing products from Barter Warriors across Nigeria 🇳🇬
                </p>
              </div>
            </div>
            <Link href="/dashboard">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                <Package className="h-4 w-4 mr-2" />
                My Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </motion.header>

      <div className="container mx-auto px-4 py-8">
        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-6 shadow-xl mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search items..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-white dark:bg-gray-700"
                />
              </div>
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {PRODUCT_CATEGORIES.map((category) => (
                  <SelectItem key={category.name} value={category.name}>
                    {category.icon} {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedState} onValueChange={setSelectedState}>
              <SelectTrigger>
                <SelectValue placeholder="State" />
              </SelectTrigger>
              <SelectContent>
                {NIGERIAN_STATES.map((state) => (
                  <SelectItem key={state} value={state}>
                    {state}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedCondition} onValueChange={setSelectedCondition}>
              <SelectTrigger>
                <SelectValue placeholder="Condition" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Brand New">Brand New</SelectItem>
                <SelectItem value="Like New">Like New</SelectItem>
                <SelectItem value="Excellent">Excellent</SelectItem>
                <SelectItem value="Good">Good</SelectItem>
                <SelectItem value="Fair">Fair</SelectItem>
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center justify-between mt-4">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Showing {filteredItems.length} of {items.length} items
            </p>
            <Button variant="outline" onClick={clearFilters} size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Clear Filters
            </Button>
          </div>
        </motion.div>

        {/* Category Quick Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap gap-3 mb-8"
        >
          {PRODUCT_CATEGORIES.slice(0, 6).map((category, index) => {
            const IconComponent = categoryIcons[category.name as keyof typeof categoryIcons] || Package
            return (
              <motion.button
                key={category.name}
                onClick={() => setSelectedCategory(selectedCategory === category.name ? "" : category.name)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-200 ${
                  selectedCategory === category.name
                    ? "bg-emerald-600 text-white shadow-lg"
                    : "bg-white/80 text-gray-700 hover:bg-emerald-50 dark:bg-gray-800/80 dark:text-gray-300 dark:hover:bg-emerald-900/50"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <IconComponent className="h-4 w-4" />
                <span className="text-sm font-medium">{category.name}</span>
              </motion.button>
            )
          })}
        </motion.div>

        {/* Items Grid */}
        <AnimatePresence>
          {filteredItems.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
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
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">No items found</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Try adjusting your search criteria or browse different categories
              </p>
              <Button onClick={clearFilters} className="bg-emerald-600 hover:bg-emerald-700 text-white">
                Clear All Filters
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
