import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useStore } from "../store/useStore.js"
import toast from "react-hot-toast"

const CartPage = () => {
  const cart = useStore((state) => state.cart)
  const removeFromCart = useStore((state) => state.removeFromCart)
  const increaseQuantity = useStore((state) => state.increaseQuantity)
  const decreaseQuantity = useStore((state) => state.decreaseQuantity)
  const navigate = useNavigate()
  const [loadingCart, setLoadingCart] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoadingCart(false), 600)
    return () => clearTimeout(timer)
  }, [])

  const total = cart.reduce(
    (sum, item) => sum + (item.priceValue ?? 0) * (item.quantity || 1),
    0,
  )

  if (loadingCart) {
    return (
      <div className="animate-fadeIn max-w-6xl mx-auto px-4 py-16 text-center text-gray-500">
        Loading cart...
      </div>
    )
  }

  if (cart.length === 0) {
    return (
      <div className="animate-fadeIn max-w-3xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-semibold mb-2">Your cart is empty 🛒</h2>
        <p className="text-gray-500 mb-4">Looks like you haven’t added anything yet.</p>
        <button
          type="button"
          onClick={() => navigate('/products')}
          className="btn-primary"
        >
          Browse Products
        </button>
      </div>
    )
  }

  return (
    <div className="animate-fadeIn max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-10">
      {/* LEFT - CART ITEMS */}
      <div className="lg:col-span-2 space-y-6">
        <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>

        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-white p-5 rounded-2xl shadow-sm border hover:shadow-md transition"
          >
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 text-xs">
                Img
              </div>
              <div>
                <h2 className="font-semibold text-black">{item.name}</h2>
                <p className="text-sm text-gray-500 mt-1">₹{item.priceValue ?? 0}</p>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    type="button"
                    onClick={() => decreaseQuantity(item.id)}
                    className="w-8 h-8 border rounded-lg hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="text-sm font-medium">{item.quantity || 1}</span>
                  <button
                    type="button"
                    onClick={() => increaseQuantity(item.id)}
                    className="w-8 h-8 border rounded-lg hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                removeFromCart(item.id)
                toast.error("Removed from cart ❌")
              }}
              className="text-red-500 hover:text-red-600 text-sm font-medium"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      {/* RIGHT - SUMMARY */}
      <div className="bg-white p-7 rounded-2xl shadow-lg border sticky top-24 flex flex-col gap-5 w-full min-w-0 lg:min-w-[280px]">
        <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

        <div className="space-y-3 text-sm">
          <div className="flex justify-between text-gray-600">
            <span>Subtotal</span>
            <span>₹{total}</span>
          </div>

          <div className="flex justify-between text-gray-600">
            <span>Shipping</span>
            <span>Free</span>
          </div>

          <div className="pt-4 border-t space-y-4">
            <div className="flex justify-between font-semibold text-black text-lg">
              <span>Total</span>
              <span>₹{total}</span>
            </div>

            <button
              type="button"
              className="w-full py-3 px-4 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition shadow-md"
              onClick={() => navigate('/checkout')}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage
