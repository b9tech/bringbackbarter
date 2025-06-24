"use server"

import { createServerClient } from "@/lib/supabase"
import type { Item } from "@/lib/types"

export async function createItem(formData: FormData) {
  const supabase = createServerClient()

  const itemData = {
    user_id: formData.get("user_id") as string,
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    category: formData.get("category") as string,
    subcategory: formData.get("subcategory") as string,
    condition: formData.get("condition") as string,
    estimated_value: Number.parseFloat(formData.get("estimated_value") as string) || 0,
    location: formData.get("location") as string,
    state: formData.get("state") as string,
    lga: formData.get("lga") as string,
  }

  try {
    const { data, error } = await supabase.from("items").insert([itemData]).select().single()

    if (error) {
      console.error("Error creating item:", error)
      return { success: false, error: error.message }
    }

    return { success: true, data }
  } catch (error) {
    console.error("Unexpected error:", error)
    return { success: false, error: "Failed to create item" }
  }
}

export async function getItems(filters?: {
  category?: string
  state?: string
  condition?: string
  limit?: number
}) {
  const supabase = createServerClient()

  try {
    let query = supabase
      .from("items")
      .select(`
        *,
        user:users(full_name, location, is_verified, trust_score)
      `)
      .eq("is_available", true)
      .eq("status", "active")
      .order("created_at", { ascending: false })

    if (filters?.category) {
      query = query.eq("category", filters.category)
    }

    if (filters?.state) {
      query = query.eq("state", filters.state)
    }

    if (filters?.condition) {
      query = query.eq("condition", filters.condition)
    }

    if (filters?.limit) {
      query = query.limit(filters.limit)
    }

    const { data, error } = await query

    if (error) {
      console.error("Error fetching items:", error)
      return { success: false, error: error.message }
    }

    return { success: true, data: data as Item[] }
  } catch (error) {
    console.error("Unexpected error:", error)
    return { success: false, error: "Failed to fetch items" }
  }
}

export async function incrementItemViews(itemId: string) {
  const supabase = createServerClient()

  try {
    const { error } = await supabase
      .from("items")
      .update({ views_count: supabase.raw("views_count + 1") })
      .eq("id", itemId)

    if (error) {
      console.error("Error incrementing views:", error)
    }
  } catch (error) {
    console.error("Unexpected error:", error)
  }
}
