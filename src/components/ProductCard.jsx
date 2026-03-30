import { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStore } from '../store/useStore.js'

const ProductCard = ({ product }) => {
  const navigate = useNavigate()
  const addToCompare = useStore((state) => state.addToCompare)
  const compareItems = useStore((state) => state.compareItems)
  const isInCompare = compareItems.some((item) => item.id === product.id)
  const priceLabel =
    product.priceLabel ??
    new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(product.priceValue ?? 0)

  return (
<article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:scale-[1.03] hover:shadow-xl cursor-pointer">
      <div className="relative">
        <div className="h-48 w-full overflow-hidden rounded-t-2xl bg-gray-100">
          <img
            src={product?.image}
            alt={product?.name}
            className="h-full w-full object-cover"
          />
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
      <div className="mt-auto flex flex-wrap items-center justify-between border-t border-gray-100 px-5 py-4 gap-2">
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
        <button
          type="button"
          disabled={isInCompare || compareItems.length >= 4}
          className="rounded-full border border-indigo-200 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-indigo-600 transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:cursor-not-allowed disabled:text-indigo-300"
          onClick={() => addToCompare(product)}
        >
          {isInCompare ? 'In Compare' : 'Add to Compare'}
        </button>
      </div>
    </article>
  )
}

export default memo(ProductCard)
