import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SkeletonCard from '../components/SkeletonCard.jsx'
import { useStore } from '../store/useStore.js'
import toast from 'react-hot-toast'

const WishlistPage = () => {
  const wishlist = useStore((state) => state.wishlist)
  const removeFromWishlist = useStore((state) => state.removeFromWishlist)
  const navigate = useNavigate()
  const [loadingWishlist, setLoadingWishlist] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoadingWishlist(false), 600)
    return () => clearTimeout(timer)
  }, [])

  if (loadingWishlist) {
    return (
      <div className="animate-fadeIn max-w-6xl px-4 py-16">
        <SkeletonCard />
      </div>
    )
  }

  if (!wishlist?.length) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-semibold mb-2">Your wishlist is empty ❤️</h2>
        <p className="text-gray-500 mb-4">Save items you love for later.</p>
        <button
          type="button"
          onClick={() => navigate('/products')}
          className="btn-primary"
        >
          Explore Products
        </button>
      </div>
    )
  }

  return (
    <div className="animate-fadeIn max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-2xl font-bold mb-6">Your Wishlist</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {wishlist?.map((item) => (
          <div
            key={item.id}
            className="bg-white p-5 rounded-2xl shadow-md border hover:shadow-lg transition"
          >
            <h2 className="font-semibold text-black">{item.name}</h2>
            <p className="text-gray-500 text-sm mt-1">₹{item.priceValue}</p>

            <div className="flex justify-between mt-4">
              <button
                type="button"
                onClick={() => navigate(`/products/${item.id}`)}
                className="text-indigo-600 text-sm font-medium"
              >
                View
              </button>

              <button
                type="button"
                onClick={() => {
                  removeFromWishlist(item.id)
                  toast.error('Removed from wishlist ❌')
                }}
                className="text-red-500 text-sm"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WishlistPage
