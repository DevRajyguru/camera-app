import { memo, useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard.jsx'
import SkeletonCard from '../components/SkeletonCard.jsx'
import Button from '../components/Button.jsx'
import { productsCatalog } from '../data/sampleProducts.js'
import { useStore } from '../store/useStore.js'
import toast from 'react-hot-toast'

const currencyFormatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0,
})

const tabOptions = [
  { id: 'specs', label: 'Specifications' },
  { id: 'description', label: 'Description' },
]

const SimilarProductsList = memo(function SimilarProductsList({ products }) {
  if (!products.length) {
    return <p className="text-sm text-gray-500">No additional matches in this category yet.</p>
  }

  return (
    <div className="flex gap-4 overflow-x-auto pb-3">
      {products.map((item) => (
        <div key={item.id} className="min-w-[260px] flex-shrink-0">
          <ProductCard product={item} />
        </div>
      ))}
    </div>
  )
})

SimilarProductsList.displayName = 'SimilarProductsList'

const ProductDetailsPage = () => {
  const { id } = useParams()
  const productId = Number(id)
  const product = productsCatalog.find((item) => item.id === productId)
  const [activeTab, setActiveTab] = useState('specs')
  const [loading, setLoading] = useState(true)
  const addToCart = useStore((state) => state.addToCart)
  const addToWishlist = useStore((state) => state.addToWishlist)
  const wishlist = useStore((state) => state.wishlist)
  const isInWishlist = Boolean(product && wishlist.some((item) => item.id === product.id))

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => setLoading(false), 700)
    return () => clearTimeout(timer)
  }, [productId])

  const formattedPrice = useMemo(() => {
    if (!product) {
      return '?0'
    }

    return product.priceLabel ?? currencyFormatter.format(product.priceValue ?? 0)
  }, [product])

  const specEntries = useMemo(() => {
    if (!product) {
      return []
    }

    const baseSpecs = [
      { label: 'Sensor', value: product.sensor },
      { label: 'Category', value: product.category },
      { label: 'Brand', value: product.brand },
      {
        label: 'Available since',
        value: new Date(product.createdAt).toLocaleDateString('en-IN', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        }),
      },
    ]

    const customSpecs = Array.isArray(product.specs)
      ? product.specs.filter((entry) => !baseSpecs.some((row) => row.label === entry.label))
      : []

    return [...customSpecs, ...baseSpecs]
  }, [product])

  const similarProducts = useMemo(() => {
    if (!product) {
      return []
    }

    return productsCatalog
      .filter((item) => item.category === product.category && item.id !== product.id)
      .slice(0, 4)
  }, [product])

  if (loading) {
    return (
      <div className="animate-fadeIn mx-auto max-w-6xl px-4 py-16">
        <SkeletonCard />
      </div>
    )
  }

  if (!product) {
    return (
      <div className="p-6">
        <p className="text-lg font-semibold text-gray-900">Product not found</p>
      </div>
    )
  }

  return (
    <div className="animate-fadeIn mx-auto max-w-6xl space-y-12 py-16 px-4 sm:px-6 lg:px-0">
      <section className="grid gap-12 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="flex items-center justify-center h-[400px] rounded-2xl bg-gray-100">
            <p className="text-gray-500 text-sm">Image unavailable</p>
          </div>
        </div>
        <div className="space-y-6 rounded-2xl bg-white/70 p-6 shadow-lg backdrop-blur-md">
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.5em] text-indigo-600">
            <span className="rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1">
              {product.category}
            </span>
            <span className="rounded-full border border-slate-100 bg-slate-50 px-3 py-1 text-slate-600">
              {product.sensor}
            </span>
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold text-gray-900">{product.name}</h1>
            <p className="text-sm text-gray-600">{product.summary}</p>
          </div>
          <div className="flex items-baseline gap-2">
            <p className="text-2xl font-bold text-indigo-600">{formattedPrice}</p>
            <p className="text-sm font-medium text-gray-500">Inclusive of all taxes</p>
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-dashed border-gray-200 bg-white/80 px-4 py-3 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gray-700">Brand</p>
              <p className="text-lg font-semibold text-gray-900">{product.brand}</p>
            </div>
            <div className="rounded-xl border border-dashed border-gray-200 bg-white/80 px-4 py-3 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gray-700">Sensor</p>
              <p className="text-lg font-semibold text-gray-900">{product.sensor}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Button
              className="h-12 px-6 shadow-md"
              onClick={() => {
                if (!product) return
                addToCart(product)
                toast.success('Added to cart 🛒')
              }}
            >
              Add to Cart
            </Button>
            <Button
              className={`h-12 px-6 shadow-md rounded-2xl transition ${
                isInWishlist
                  ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                  : 'text-indigo-600 border border-indigo-200 hover:bg-indigo-50'
              }`}
              onClick={() => {
                if (!product || isInWishlist) {
                  return
                }
                addToWishlist(product)
                toast.success('Added to wishlist ❤️')
              }}
              disabled={isInWishlist}
            >
              {isInWishlist ? '❤️ In Wishlist' : 'Add to Wishlist'}
            </Button>
          </div>
        </div>
      </section>
      <section className="space-y-6 rounded-2xl bg-white/70 p-6 shadow-lg backdrop-blur-md">
        <div className="flex items-center justify-between">
          <div className="flex gap-6">
            {tabOptions.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className="relative pb-3 text-sm font-semibold uppercase tracking-[0.4em] text-gray-600 transition hover:text-gray-900"
              >
                {tab.label}
                <span className="absolute left-0 bottom-0 h-0.5 w-full bg-indigo-600 transition-transform duration-300" />
              </button>
            ))}
          </div>
          <p className="text-xs font-semibold tracking-[0.3em] text-gray-500">Deep dive</p>
        </div>
        <div>
          {activeTab === 'specs' ? (
            <div className="grid gap-4 md:grid-cols-2">
              {specEntries.map((spec) => (
                <div
                  key={spec.label}
                  className="rounded-2xl border border-gray-100 bg-white/80 px-5 py-4 shadow-sm"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-700">
                    {spec.label}
                  </p>
                  <p className="text-base font-semibold text-black">{spec.value}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4 text-sm leading-relaxed text-gray-700">
              <p>{product.description}</p>
              <p>
                Crafted for demanding creators, this rig pairs intuitive controls with premium
                finishing touches so every shoot feels effortless.
              </p>
            </div>
          )}
        </div>
      </section>
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-900">Similar products</h2>
          <p className="text-sm font-medium text-gray-600">Select another hero</p>
        </div>
        <SimilarProductsList products={similarProducts} />
      </section>
    </div>
  )
}

export default ProductDetailsPage
