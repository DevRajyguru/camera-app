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
    <article className="group overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-slate-200/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
        <img
          src={product?.image}
          alt={product?.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-black/70 px-2 py-1 text-xs font-semibold text-white backdrop-blur-sm">
          {product.category}
        </span>
      </div>

      <div className="p-4">
        <h3 className="text-base font-semibold text-slate-900 line-clamp-2">{product.name}</h3>
        <p className="mt-1 text-xs text-gray-500">
          {product.brand} - {product.sensor}
        </p>
        <p className="mt-2 text-lg font-bold text-indigo-600">{priceLabel}</p>

        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
          <button
            type="button"
            className="w-full rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm transition-all duration-300 hover:bg-gray-50 hover:shadow-md active:scale-95 sm:w-auto"
            onClick={() => navigate(`/products/${product.id}`)}
          >
            View
          </button>
          <button
            type="button"
            disabled={isInCompare || compareItems.length >= 4}
            className="w-full rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            onClick={() => addToCompare(product)}
          >
            {isInCompare ? 'In Compare' : 'Add to Compare'}
          </button>
        </div>
      </div>
    </article>
  )
}

export default memo(ProductCard)
