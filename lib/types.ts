export interface User {
  id: string
  email: string
  full_name: string
  phone?: string
  location?: string
  state?: string
  lga?: string
  profile_image?: string
  bio?: string
  is_verified: boolean
  trust_score: number
  total_trades: number
  successful_trades: number
  created_at: string
  updated_at: string
}

export interface Item {
  id: string
  user_id: string
  title: string
  description: string
  category: string
  subcategory?: string
  condition: string
  estimated_value?: number
  currency: string
  images?: string[]
  location: string
  state: string
  lga?: string
  is_available: boolean
  is_featured: boolean
  views_count: number
  interested_count: number
  status: string
  created_at: string
  updated_at: string
  user?: User
}

export interface Trade {
  id: string
  initiator_id: string
  receiver_id: string
  initiator_item_id: string
  receiver_item_id: string
  status: string
  meeting_location?: string
  meeting_date?: string
  notes?: string
  rating_by_initiator?: number
  rating_by_receiver?: number
  review_by_initiator?: string
  review_by_receiver?: string
  created_at: string
  updated_at: string
}

export interface ContactInquiry {
  id: string
  name: string
  email: string
  phone?: string
  subject: string
  message: string
  status: string
  created_at: string
}
