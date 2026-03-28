import { useStore } from '../store/useStore.js'

const CheckoutPage = () => {
  const cart = useStore((state) => state.cart)
  const total = cart.reduce((sum, item) => sum + (item.priceValue ?? 0), 0)

  if (!cart.length) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h2 className="text-xl font-semibold">No items to checkout</h2>
        <p className="text-gray-500 mt-2">Add products to your cart before placing an order.</p>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-10">
      <div className="lg:col-span-2">
        <div className="bg-white p-6 rounded-2xl shadow border space-y-5">
          <h2 className="text-xl font-semibold">Shipping Details</h2>

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="tel"
            placeholder="Phone"
            className="w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <textarea
            placeholder="Address"
            className="w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 h-24"
          />

          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="City"
              className="w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="text"
              placeholder="Pincode"
              className="w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
      </div>

      <div className="bg-white p-7 rounded-2xl shadow-lg border sticky top-24 space-y-4">
        <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between text-gray-600">
            <span>Subtotal</span>
            <span>₹{total}</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="border-t pt-3">
            <div className="flex justify-between font-semibold text-black text-lg">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
          </div>
        </div>
        <button className="w-full mt-4 bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition">
          Place Order
        </button>
      </div>
    </div>
  )
}

export default CheckoutPage
