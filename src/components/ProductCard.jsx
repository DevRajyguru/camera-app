import { memo } from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ product }) => {
  const navigate = useNavigate()
  const priceLabel =
    product.priceLabel ??
    new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(product.priceValue ?? 0)

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative">
        <div className="h-40 bg-gray-100 flex items-center justify-center rounded-t-2xl">
          <p className="text-xs text-gray-400">No Image</p>
        </div>
        <span className="absolute inset-x-0 bottom-3 mx-auto w-max rounded-full bg-black/60 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-white shadow-lg">
          {product.category}
        </span>
      </div>
      <div className="flex-1 space-y-2 px-5 py-6">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
            <span className="text-base font-bold text-indigo-600">{priceLabel}</span>
          </div>
          <p className="text-xs uppercase tracking-[0.3em] text-gray-600">
            {product.brand} • {product.sensor}
          </p>
      </div>
      <div className="mt-auto flex items-center justify-between border-t border-gray-100 px-5 py-4">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gray-500">
          <div className="h-2 w-2 rounded-full bg-indigo-200"></div>
          Live
        </div>
        <button
          type="button"
          className="rounded-full bg-gradient-to-r from-indigo-500 to-blue-600 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
          onClick={() => navigate(`/products/${product.id}`)}
        >
          View
        </button>
      </div>
    </article>
  )
}

export default memo(ProductCard)
