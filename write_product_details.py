from pathlib import Path

content = '''import { motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard.jsx'
import Button from '../components/Button.jsx'
import { productsCatalog } from '../data/sampleProducts.js'

const FALLBACK_IMAGE = 'https://via.placeholder.com/900x900?text=Camera'
const currencyFormatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0,
})

const tabOptions = [
  { id: 'specs', label: 'Specifications' },
  { id: 'description', label: 'Description' },
]

const ProductDetailsPage = () => {
  const { id } = useParams()
  const productId = Number(id)
  const [activeTab, setActiveTab] = useState('specs')
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  const product = useMemo(
    () => productsCatalog.find((item) => item.id === productId),
    [productId],
  )

  const galleryImages = useMemo(() => {
    if (!product) {
      return []
    }

    const base = Array.isArray(product.gallery) ? product.gallery.filter(Boolean) : []
    if (product.image && !base.includes(product.image)) {
      base.unshift(product.image)
    }

    const filled = [...base]
    while (filled.length < 4) {
      filled.push(product.image ?? '')
    }

    return filled.filter(Boolean).slice(0, 4)
  }, [product])

  useEffect(() => {
    setActiveImageIndex(0)
  }, [product?.id])

  const formattedPrice = product
    ? product.priceLabel ?? currencyFormatter.format(product.priceValue ?? 0)
    : '?0'

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

  const handleImageError = (event) => {
    event.currentTarget.src = FALLBACK_IMAGE
  }

  if (!product) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className= p-6
      >
        <p className=text-lg font-semibold text-gray-900>Product not found</p>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className=mx-auto max-w-6xl space-y-12 py-16 px-4 sm:px-6 lg:px-0
    >
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className=grid gap-12 lg:grid-cols-2
      >
        <div className=space-y-4>
          <div className=relative overflow-hidden rounded-2xl bg-slate-100 shadow-lg>
            <img
              src={galleryImages[activeImageIndex] ?? product.image ?? FALLBACK_IMAGE}
              alt={${product.name} main view}
              loading=lazy
              onError={handleImageError}
              className=aspect-square w-full object-cover transition-transform duration-500 hover:scale-105
            />
            <div className=absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/60 to-transparent />
          </div>
          <div className=grid grid-cols-4 gap-3>
            {galleryImages.map((src, index) => (
              <button
                key={${src}-}
                type=button
                aria-label={Show  thumbnail }
                onClick={() => setActiveImageIndex(index)}
                className={elative overflow-hidden rounded-2xl border-2 transition hover:shadow-xl }
              >
                <img
                  src={src}
                  alt={${product.name} }
                  loading=lazy
                  onError={handleImageError}
                  className=h-20 w-full object-cover transition duration-500 hover:scale-105
                />
                <span
                  className={bsolute inset-x-0 bottom-2 mx-auto block h-1 w-10 rounded-full bg-indigo-500 transition-opacity }
                />
              </button>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className=space-y-6 rounded-2xl bg-white/70 p-6 shadow-lg backdrop-blur-md
        >
          <div className=flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.5em] text-indigo-600>
            <span className=rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1>
              {product.category}
            </span>
            <span className=rounded-full border border-slate-100 bg-slate-50 px-3 py-1 text-slate-600>
              {product.sensor}
            </span>
          </div>
          <div className=space-y-2>
            <h1 className=text-3xl font-semibold text-gray-900>{product.name}</h1>
            <p className=text-sm text-gray-600>{product.summary}</p>
          </div>
          <div className=flex items-baseline gap-2>
            <p className=text-2xl font-bold text-indigo-600>{formattedPrice}</p>
            <p className=text-sm font-medium text-gray-500>Inclusive of all taxes</p>
          </div>
          <div className=h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent />
          <div className=grid grid-cols-2 gap-4>
            <div className=rounded-xl border border-dashed border-gray-200 bg-white/80 px-4 py-3 shadow-sm>
              <p className=text-xs font-semibold uppercase tracking-[0.4em] text-gray-700>Brand</p>
              <p className=text-lg font-semibold text-gray-900>{product.brand}</p>
            </div>
            <div className=rounded-xl border border-dashed border-gray-200 bg-white/80 px-4 py-3 shadow-sm>
              <p className=text-xs font-semibold uppercase tracking-[0.4em] text-gray-700>Sensor</p>
              <p className=text-lg font-semibold text-gray-900>{product.sensor}</p>
            </div>
          </div>
          <div className=flex gap-3>
            <Button className=h-12 px-6 shadow-md>Add to Wishlist</Button>
            <Button variant=ghost className=h-12 px-6 shadow-md text-indigo-600>
              Add to Compare
            </Button>
          </div>
        </motion.div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className=space-y-6 rounded-2xl bg-white/70 p-6 shadow-lg backdrop-blur-md
      >
        <div className=flex items-center justify-between>
          <div className=flex gap-6>
            {tabOptions.map((tab) => (
              <button
                key={tab.id}
                type=button
                onClick={() => setActiveTab(tab.id)}
                className=relative pb-3 text-sm font-semibold uppercase tracking-[0.4em] text-gray-600 transition hover:text-gray-900
              >
                {tab.label}
                <span
                  className={bsolute left-0 bottom-0 h-0.5 w-full bg-indigo-600 transition-transform duration-300 }
                />
              </button>
            ))}
          </div>
          <p className=text-xs font-semibold tracking-[0.3em] text-gray-500>Deep dive</p>
        </div>
        <div>
          {activeTab === 'specs' ? (
            <div className=grid gap-4 md:grid-cols-2>
              {specEntries.map((spec) => (
                <div
                  key={spec.label}
                  className=rounded-2xl border border-gray-100 bg-white/80 px-5 py-4 shadow-sm
                >
                  <p className=text-xs font-semibold uppercase tracking-[0.35em] text-gray-700>
                    {spec.label}
                  </p>
                  <p className=text-base font-semibold text-black>{spec.value}</p>
                </div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className=space-y-4 text-sm leading-relaxed text-gray-700
            >
              <p>{product.description}</p>
              <p>
                Crafted for demanding creators, this rig pairs intuitive controls with premium finishing touches so every shoot feels effortless.
              </p>
            </motion.div>
          )}
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className=space-y-4
      >
        <div className=flex items-center justify-between>
          <h2 className=text-2xl font-semibold text-gray-900>Similar products</h2>
          <p className=text-sm font-medium text-gray-600>Select another hero</p>
        </div>
        <div className=flex gap-4 overflow-x-auto pb-3>
          {similarProducts.length ? (
            similarProducts.map((item) => (
              <motion.div
                key={item.id}
                className=min-w-[260px] flex-shrink-0
                whileHover={{ y: -4 }}
              >
                <ProductCard product={item} />
              </motion.div>
            ))
          ) : (
            <p className=text-sm text-gray-500>No additional matches in this category yet.</p>
          )}
        </div>
      </motion.section>
    </motion.div>
  )
}

export default ProductDetailsPage
'''
Path('src/pages/ProductDetailsPage.jsx').write_text(content)
