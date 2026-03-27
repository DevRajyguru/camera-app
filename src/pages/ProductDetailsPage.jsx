import { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard.jsx'
import Button from '../components/Button.jsx'
import { productsCatalog } from '../data/sampleProducts.js'

const ProductDetailsPage = () => {
  const { id } = useParams()
  const [activeTab, setActiveTab] = useState('specs')

  const product = useMemo(
    () => productsCatalog.find((item) => item.id === id) ?? productsCatalog[0],
    [id],
  )

  const similarProducts = useMemo(
    () =>
      productsCatalog
        .filter((item) => item.category === product.category && item.id !== product.id)
        .slice(0, 3),
    [product],
  )

  const galleryImages = [product.image]
  while (galleryImages.length < 4) {
    galleryImages.push(product.image)
  }

  return (
    <div className="space-y-12 p-4 pb-16 md:p-6 lg:p-10">
      <div className="space-y-6 rounded-3xl bg-white px-4 py-6 shadow-lg md:px-8 md:py-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-4">
            <div className="grid gap-3 md:grid-cols-2">
              {galleryImages.map((src, index) => (
                <div
                  key={`${src}-${index}`}
                  className="overflow-hidden rounded-2xl border border-gray-200"
                >
                  <img
                    src={src}
                    alt={`${product.name} gallery ${index + 1}`}
                    loading="lazy"
                    className="h-48 w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.6em] text-gray-400">Product details</p>
            <h1 className="text-3xl font-semibold text-gray-900">{product.name}</h1>
            <p className="text-xl font-bold text-indigo-600">{product.priceLabel}</p>
            <div className="space-y-3 rounded-2xl border border-gray-200 bg-gray-50 p-4">
              <p className="text-sm font-semibold text-gray-500">Brand</p>
              <p className="text-lg font-semibold text-gray-900">{product.brand}</p>
              <p className="text-sm font-semibold text-gray-500">Sensor</p>
              <p className="text-lg font-semibold text-gray-900">{product.sensor}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button className="px-4 py-2 uppercase tracking-[0.4em]">Add to Compare</Button>
              <Button className="border border-gray-200 bg-white px-4 py-2 text-gray-700 hover:text-white">Add to Wishlist</Button>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] transition ${
                activeTab === 'specs'
                  ? 'bg-indigo-500 text-white'
                  : 'bg-white text-gray-500 border border-gray-200'
              }`}
              onClick={() => setActiveTab('specs')}
            >
              Specifications
            </button>
            <button
              type="button"
              className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] transition ${
                activeTab === 'description'
                  ? 'bg-indigo-500 text-white'
                  : 'bg-white text-gray-500 border border-gray-200'
              }`}
              onClick={() => setActiveTab('description')}
            >
              Description
            </button>
          </div>
          {activeTab === 'specs' ? (
            <div className="space-y-3 rounded-2xl border border-gray-200 bg-white p-4">
              <div className="grid gap-3 md:grid-cols-2">
                <p className="text-sm font-semibold text-gray-500">Sensor</p>
                <p className="text-sm text-gray-900">{product.sensor}</p>
                <p className="text-sm font-semibold text-gray-500">Category</p>
                <p className="text-sm text-gray-900">{product.category}</p>
                <p className="text-sm font-semibold text-gray-500">Available since</p>
                <p className="text-sm text-gray-900">
                  {new Date(product.createdAt).toLocaleDateString('en-IN')}
                </p>
              </div>
            </div>
          ) : (
            <div className="rounded-2xl border border-gray-200 bg-white p-4 text-sm text-gray-600">
              <p>
                {product.name} blends premium engineering with intuitive ergonomics. The hybrid
                autofocus, precise color science, and durable alloy body make it ready for the
                toughest shoots. The kit is built to last and stay cool under pressure.
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">Similar products</h2>
          <p className="text-sm text-gray-500">Pick another hero</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {similarProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductDetailsPage
