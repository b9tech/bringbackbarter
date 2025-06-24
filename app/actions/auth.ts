"use server"

import { createServerClient } from "@/lib/supabase"

export async function signUpUser(formData: FormData) {
  const supabase = createServerClient()

  const userData = {
    email: formData.get("email") as string,
    full_name: formData.get("full_name") as string,
    phone: formData.get("phone") as string,
    location: formData.get("location") as string,
    state: formData.get("state") as string,
    lga: formData.get("lga") as string,
  }

  try {
    // Insert user into our custom users table
    const { data, error } = await supabase.from("users").insert([userData]).select().single()

    if (error) {
      console.error("Error creating user:", error)
      return { success: false, error: error.message }
    }

    return { success: true, data }
  } catch (error) {
    console.error("Unexpected error:", error)
    return { success: false, error: "An unexpected error occurred" }
  }
}

export async function signInUser(formData: FormData) {
  const supabase = createServerClient()

  const email = formData.get("email") as string

  try {
    // Check if user exists
    const { data, error } = await supabase.from("users").select("*").eq("email", email).single()

    if (error || !data) {
      return { success: false, error: "User not found. Please sign up first." }
    }

    // For demo purposes, we'll just return success
    // In production, you'd implement proper authentication
    return { success: true, data }
  } catch (error) {
    console.error("Sign in error:", error)
    return { success: false, error: "Sign in failed" }
  }
}
