export const featuredBrands = ['Canon', 'Sony', 'Nikon', 'Fujifilm']

export const categoryTiles = [
  {
    title: 'DSLR',
    subtitle: 'Pro Capture',
    image: 'https://images.unsplash.com/photo-1519183071298-a2962be96f8d?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Mirrorless',
    subtitle: 'Lightweight power',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Lenses',
    subtitle: 'Sharp optics',
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Accessories',
    subtitle: 'Finish the kit',
    image: 'https://images.unsplash.com/photo-1495121605193-b116b5b09a8c?auto=format&fit=crop&w=800&q=80',
  },
]

const products = [
  {
    id: '1',
    name: 'Summicron Mirrorless',
    brand: 'Sony',
    category: 'Mirrorless',
    sensor: 'Full Frame',
    priceValue: 199117,
    priceLabel: '₹1,99,117',
    createdAt: '2026-03-16T08:00:00Z',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '2',
    name: 'Edge Prime Lens',
    brand: 'Canon',
    category: 'Lenses',
    sensor: 'Full Frame',
    priceValue: 99517,
    priceLabel: '₹99,517',
    createdAt: '2026-03-14T08:00:00Z',
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '3',
    name: 'Rogue Studio Flash',
    brand: 'Nikon',
    category: 'Accessories',
    sensor: 'APS-C',
    priceValue: 62167,
    priceLabel: '₹62,167',
    createdAt: '2026-03-12T08:00:00Z',
    image: 'https://images.unsplash.com/photo-1495121605193-b116b5b09a8c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '4',
    name: 'Atlas DSLR Pro',
    brand: 'Nikon',
    category: 'DSLR',
    sensor: 'Full Frame',
    priceValue: 145067,
    priceLabel: '₹1,45,067',
    createdAt: '2026-03-10T08:00:00Z',
    image: 'https://images.unsplash.com/photo-1519183071298-a2962be96f8d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '5',
    name: 'Nova Cine Lens',
    brand: 'Fujifilm',
    category: 'Lenses',
    sensor: 'APS-C',
    priceValue: 244850,
    priceLabel: '₹2,44,850',
    createdAt: '2026-03-08T08:00:00Z',
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '6',
    name: 'Horizon APS-C Body',
    brand: 'Sony',
    category: 'Mirrorless',
    sensor: 'APS-C',
    priceValue: 174500,
    priceLabel: '₹1,74,500',
    createdAt: '2026-03-06T08:00:00Z',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '7',
    name: 'Prism Grip Kit',
    brand: 'Canon',
    category: 'Accessories',
    sensor: 'Full Frame',
    priceValue: 83800,
    priceLabel: '₹83,800',
    createdAt: '2026-03-04T08:00:00Z',
    image: 'https://images.unsplash.com/photo-1495121605193-b116b5b09a8c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '8',
    name: 'Apex Prime 85',
    brand: 'Fujifilm',
    category: 'Lenses',
    sensor: 'Full Frame',
    priceValue: 211500,
    priceLabel: '₹2,11,500',
    createdAt: '2026-03-02T08:00:00Z',
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80',
  },
]

export const productsCatalog = products
export const trendingProducts = products.slice(0, 3)
export const newLaunches = products.slice(3, 6)
