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
    // Use UPSERT so duplicates (same email) are ignored gracefully.
    // `ignoreDuplicates: true` performs `ON CONFLICT DO NOTHING`.
    const { data, error } = await supabase.from("waitlist").upsert([waitlistData], {
      onConflict: "email",
      ignoreDuplicates: true,
      // Returning all columns if a new row was inserted; may be empty when ignored
      returning: "representation",
    })

    // If a duplicate was ignored, `data` will be empty.
    if (error) {
      throw error
    }

    return {
      success: true,
      data: data?.[0] ?? waitlistData, // fallback so the caller still gets something useful
      message:
        data?.length === 0
          ? "You're already on the waitlist — thanks for your interest!"
          : "Successfully joined the waitlist!",
    }
  } catch (error: any) {
    // Any other unexpected error
    console.error("Error joining waitlist:", error)
    return { success: false, error: "Failed to join waitlist" }
  }
}
