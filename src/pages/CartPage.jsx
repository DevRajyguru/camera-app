import { useNavigate } from "react-router-dom"
import { useStore } from "../store/useStore.js"

const CartPage = () => {
  const cart = useStore((state) => state.cart)
  const removeFromCart = useStore((state) => state.removeFromCart)
  const navigate = useNavigate()

  const total = cart.reduce((sum, item) => sum + (item.priceValue ?? 0), 0)

  if (cart.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-16 text-center">
        <div className="text-center py-20">
          <h2 className="text-xl font-semibold">Your cart is empty</h2>
          <p className="text-gray-500 mt-2">Start adding products to see them here</p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-10">
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
                  <button className="px-2 py-1 border rounded">-</button>
                  <span className="text-sm font-medium">1</span>
                  <button className="px-2 py-1 border rounded">+</button>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 hover:text-red-600 text-sm font-medium"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      {/* RIGHT - SUMMARY */}
      <div className="bg-white p-7 rounded-2xl shadow-lg border sticky top-24 flex flex-col gap-5 min-w-[280px]">
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
