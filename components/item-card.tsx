"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Eye, Heart, Star, Shield } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import type { Item } from "@/lib/types"

interface ItemCardProps {
  item: Item
  onViewItem?: (item: Item) => void
  onInterested?: (item: Item) => void
}

export function ItemCard({ item, onViewItem, onInterested }: ItemCardProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <motion.div whileHover={{ scale: 1.02, y: -5 }} transition={{ duration: 0.2 }}>
      <Card className="backdrop-blur-xl bg-white/80 dark:bg-gray-800/80 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
        <CardContent className="p-0">
          <div className="relative h-48">
            <Image
              src={item.images?.[0] || "/placeholder.svg?height=200&width=300"}
              alt={item.title}
              fill
              className="object-cover"
            />
            <div className="absolute top-2 right-2 flex gap-2">
              <Badge
                className={`${
                  item.condition === "Brand New"
                    ? "bg-emerald-100 text-emerald-800"
                    : item.condition === "Like New"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {item.condition}
              </Badge>
              {item.is_featured && (
                <Badge className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white">Featured</Badge>
              )}
            </div>
            <div className="absolute bottom-2 left-2">
              <Badge className="bg-black/70 text-white">
                {item.estimated_value ? formatCurrency(item.estimated_value) : "Price on request"}
              </Badge>
            </div>
          </div>

          <div className="p-4">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-1">{item.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">{item.description}</p>

            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <MapPin className="h-4 w-4 mr-1" />
                {item.location}, {item.state}
              </div>
              <Badge variant="outline" className="text-xs">
                {item.category}
              </Badge>
            </div>

            {item.user && (
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center">
                    <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                      {item.user.full_name.charAt(0)}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.user.full_name}</span>
                  {item.user.is_verified && <Shield className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />}
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {(item.user.trust_score / 20).toFixed(1)}
                  </span>
                </div>
              </div>
            )}

            <div className="flex items-center justify-between text-sm mb-4">
              <div className="flex items-center gap-4">
                <span className="text-gray-600 dark:text-gray-300 flex items-center">
                  <Eye className="h-4 w-4 mr-1" />
                  {item.views_count} views
                </span>
                <span className="text-emerald-600 dark:text-emerald-400 flex items-center">
                  <Heart className="h-4 w-4 mr-1" />
                  {item.interested_count} interested
                </span>
              </div>
            </div>

            <div className="flex gap-2">
              <Button size="sm" variant="outline" className="flex-1" onClick={() => onViewItem?.(item)}>
                View Details
              </Button>
              <Button
                size="sm"
                className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white"
                onClick={() => onInterested?.(item)}
              >
                I'm Interested
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
