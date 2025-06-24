"use server"

import { createServerClient } from "@/lib/supabase"

export async function submitContactForm(formData: FormData) {
  const supabase = createServerClient()

  const contactData = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
    subject: formData.get("subject") as string,
    message: formData.get("message") as string,
  }

  try {
    const { data, error } = await supabase.from("contact_inquiries").insert([contactData]).select().single()

    if (error) {
      console.error("Error submitting contact form:", error)
      return { success: false, error: error.message }
    }

    return { success: true, data }
  } catch (error) {
    console.error("Unexpected error:", error)
    return { success: false, error: "Failed to submit form" }
  }
}

export async function joinWaitlist(formData: FormData) {
  const supabase = createServerClient()

  const waitlistData = {
    email: formData.get("email") as string,
    name: formData.get("name") as string,
    phone: formData.get("phone") as string,
    location: formData.get("location") as string,
    referral_source: formData.get("referral_source") as string,
  }

  try {
    const { data, error } = await supabase.from("waitlist").insert([waitlistData]).select().single()

    if (error) {
      console.error("Error joining waitlist:", error)
      return { success: false, error: error.message }
    }

    return { success: true, data }
  } catch (error) {
    console.error("Unexpected error:", error)
    return { success: false, error: "Failed to join waitlist" }
  }
}
