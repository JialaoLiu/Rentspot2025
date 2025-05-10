// src/services/propertyService.js

// Mock data for development (replace with actual API calls later)
const mockProperties = [
  {
    id: 101,
    title: 'Modern 2-Bed Apartment in CBD',
    address: '15 Grote St, Adelaide SA',
    price: 620,
    bedrooms: 2,
    bathrooms: 1,
    lat: -34.92846,
    lng: 138.59593,
    image: 'https://picsum.photos/id/1031/600/400',
    description: 'This modern apartment offers spacious living in the heart of Adelaide CBD.'
  },
  {
    id: 102,
    title: 'Spacious Family House in North Adelaide',
    address: '18 Jeffcott St, North Adelaide SA',
    price: 890,
    bedrooms: 4,
    bathrooms: 2,
    lat: -34.90571,
    lng: 138.59544,
    image: 'https://picsum.photos/id/1040/600/400',
    description: 'Large family home with garden in a quiet North Adelaide street.'
  },
  {
    id: 103,
    title: 'Cozy Studio near University',
    address: '5 Frome Road, Adelaide SA',
    price: 380,
    bedrooms: 1,
    bathrooms: 1,
    lat: -34.92146,
    lng: 138.60745,
    image: 'https://picsum.photos/id/175/600/400',
    description: 'Compact and affordable studio apartment, perfect for students.'
  },
  {
    id: 104,
    title: 'Modern Townhouse with Garden',
    address: '42 King William Road, Unley SA',
    price: 750,
    bedrooms: 3,
    bathrooms: 2,
    lat: -34.94723,
    lng: 138.60132,
    image: 'https://picsum.photos/id/306/600/400',
    description: 'Contemporary townhouse with private garden in Unley.'
  }
]

// Functions to fetch properties
export async function fetchProperties() {
  // This would be replaced with an actual API call
  // e.g., return fetch('/api/properties').then(res => res.json())
  return Promise.resolve(mockProperties)
}

export async function getPropertyById(id) {
  // Find property by ID
  const property = mockProperties.find(p => p.id === parseInt(id))
  return Promise.resolve(property || null)
}