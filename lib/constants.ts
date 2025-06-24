// Nigerian States and LGAs
export const NIGERIAN_STATES = [
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "FCT",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
]

// Updated Product Categories - DURABLE GOODS ONLY (No Consumables)
export const PRODUCT_CATEGORIES = [
  {
    name: "Electronics & Gadgets",
    subcategories: [
      "Smartphones",
      "Laptops",
      "Tablets",
      "Gaming Consoles",
      "Smart Watches",
      "Headphones",
      "Cameras",
      "TVs",
      "Audio Systems",
    ],
    description: "Durable electronic devices and gadgets",
    icon: "📱",
  },
  {
    name: "Fashion & Accessories",
    subcategories: [
      "Bags & Purses",
      "Shoes",
      "Watches",
      "Jewelry",
      "Designer Clothing",
      "Sunglasses",
      "Belts",
      "Scarves",
    ],
    description: "Quality fashion items and accessories",
    icon: "👜",
  },
  {
    name: "Home & Living",
    subcategories: [
      "Furniture",
      "Appliances",
      "Decor",
      "Kitchen Equipment",
      "Bedding",
      "Storage Solutions",
      "Lighting",
    ],
    description: "Durable home goods and furniture",
    icon: "🏠",
  },
  {
    name: "Books & Media",
    subcategories: ["Books", "DVDs", "Vinyl Records", "Magazines", "Comics", "Educational Materials", "Art Prints"],
    description: "Educational and entertainment media",
    icon: "📚",
  },
  {
    name: "Sports & Fitness",
    subcategories: [
      "Exercise Equipment",
      "Sports Gear",
      "Outdoor Equipment",
      "Bicycles",
      "Fitness Accessories",
      "Camping Gear",
    ],
    description: "Sports and fitness equipment",
    icon: "⚽",
  },
  {
    name: "Arts & Crafts",
    subcategories: [
      "Art Supplies",
      "Musical Instruments",
      "Craft Materials",
      "Collectibles",
      "Antiques",
      "Handmade Items",
    ],
    description: "Creative and artistic items",
    icon: "🎨",
  },
  {
    name: "Tools & Equipment",
    subcategories: [
      "Power Tools",
      "Hand Tools",
      "Garden Equipment",
      "Professional Equipment",
      "Machinery",
      "Workshop Tools",
    ],
    description: "Professional and DIY tools",
    icon: "🔧",
  },
  {
    name: "Automotive & Transport",
    subcategories: ["Car Accessories", "Motorcycle Parts", "Bicycle Parts", "Tools", "Electronics", "Safety Equipment"],
    description: "Vehicle parts and accessories",
    icon: "🚗",
  },
]

// Prohibited Items - Consumables and Restricted Goods
export const PROHIBITED_ITEMS = [
  "Food items and consumables",
  "Beverages and drinks",
  "Perishable goods",
  "Medications and drugs",
  "Alcohol and tobacco",
  "Weapons and ammunition",
  "Adult content",
  "Live animals",
  "Hazardous materials",
  "Counterfeit goods",
  "Stolen items",
  "Items requiring special licenses",
]

export const ITEM_CONDITIONS = ["Brand New", "Like New", "Excellent", "Good", "Fair", "Needs Repair"]

export const NIGERIAN_GREETINGS = [
  "Sannu!", // Hausa
  "Bawo!", // Yoruba
  "Ndewo!", // Igbo
  "How far?", // Pidgin
  "Wetin dey happen?", // Pidgin
  "Good morning o!",
  "How body?",
]

export const NIGERIAN_PHRASES = [
  "No wahala!", // No problem
  "E go better!", // It will be better
  "God dey!", // God is there
  "We move!", // Let's go
  "Sabi person!", // Knowledgeable person
  "Sharp sharp!", // Quickly
  "Correct!", // Right/Good
  "Na so!", // That's right
  "Chop knuckle!", // High five
]

// Community Guidelines
export const COMMUNITY_PRINCIPLES = [
  {
    title: "Trust is our currency",
    description: "Respect agreements, show up when you say you will, and honor trades.",
    icon: "🤝",
  },
  {
    title: "Barter must be fair",
    description: "Always represent your items or services truthfully.",
    icon: "⚖️",
  },
  {
    title: "People come first",
    description: "Treat others with dignity — we're building a value-based community.",
    icon: "❤️",
  },
  {
    title: "Safety first",
    description: "Always meet in public, safe, and well-lit areas.",
    icon: "🛡️",
  },
]

// Legal Documents Metadata
export const LEGAL_DOCUMENTS = {
  terms: {
    title: "Terms & Conditions",
    lastUpdated: "June 21, 2025",
    version: "1.0",
    operator: "B9Tech Consult",
  },
  privacy: {
    title: "Privacy Policy",
    lastUpdated: "June 21, 2025",
    version: "1.0",
    compliance: "NDPR & GDPR",
  },
  guidelines: {
    title: "Community Guidelines",
    lastUpdated: "June 21, 2025",
    version: "1.0",
    focus: "#BringBackBarter Movement",
  },
}
