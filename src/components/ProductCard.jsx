import { motion } from 'framer-motion'
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
    <motion.article
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.src = 'https://via.placeholder.com/400x300?text=Camera'
          }}
          className="h-48 w-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />
        <span className="absolute inset-x-0 bottom-3 px-4 text-xs font-semibold uppercase tracking-[0.4em] text-white">
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
    </motion.article>
  )
}

export default ProductCard
