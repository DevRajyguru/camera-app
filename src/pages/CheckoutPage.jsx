import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStore } from '../store/useStore.js'
import toast from 'react-hot-toast'

const CheckoutPage = () => {
  const cart = useStore((state) => state.cart)
  const clearCart = useStore((state) => state.clearCart)
  const total = cart.reduce((sum, item) => sum + (item.priceValue ?? 0), 0)
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    pincode: '',
  })
  const [touched, setTouched] = useState({})

  const validate = () => {
    const newErrors = {}
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required'
    if (!formData.address.trim()) newErrors.address = 'Address is required'
    if (!formData.city.trim()) newErrors.city = 'City is required'
    if (!formData.pincode.trim()) newErrors.pincode = 'Pincode is required'
    return newErrors
  }

  const getInputClass = (field) =>
    `w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 transition ${
      touched[field] && !formData[field].trim()
        ? 'border-red-500 focus:ring-red-500'
        : 'border-gray-300 focus:ring-indigo-500'
    }`

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }))
  }

  const handlePlaceOrder = () => {
    const validationErrors = validate()
    if (Object.keys(validationErrors).length === 0) {
      clearCart()
      toast.success('Order placed successfully 🎉')
      navigate('/order-success')
    }
  }

  if (!cart.length) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h2 className="text-xl font-semibold">No items to checkout</h2>
        <p className="text-gray-500 mt-2">Add products to your cart before placing an order.</p>
      </div>
    )
  }

  const errors = validate()

  return (
    <div className="animate-fadeIn mx-auto max-w-6xl py-16 px-4">
      <div className="grid lg:grid-cols-2 gap-12 items-stretch">
        <div className="bg-white rounded-2xl shadow-md p-8 h-full flex flex-col space-y-6">
          <h2 className="text-xl font-semibold">Shipping Details</h2>

          <div className="space-y-1">
            <input
              type="text"
              placeholder="Full Name"
              className={getInputClass('fullName')}
              value={formData.fullName}
              onChange={(event) =>
                setFormData((prev) => ({ ...prev, fullName: event.target.value }))
              }
              onBlur={() => handleBlur('fullName')}
            />
            {touched.fullName && !formData.fullName.trim() && (
              <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>
            )}
          </div>

          <div className="space-y-1">
            <input
              type="email"
              placeholder="Email"
              className={getInputClass('email')}
              value={formData.email}
              onChange={(event) =>
                setFormData((prev) => ({ ...prev, email: event.target.value }))
              }
              onBlur={() => handleBlur('email')}
            />
            {touched.email && !formData.email.trim() && (
              <p className="text-xs text-red-500 mt-1">{errors.email}</p>
            )}
          </div>

          <div className="space-y-1">
            <input
              type="tel"
              placeholder="Phone"
              className={getInputClass('phone')}
              value={formData.phone}
              onChange={(event) =>
                setFormData((prev) => ({ ...prev, phone: event.target.value }))
              }
              onBlur={() => handleBlur('phone')}
            />
            {touched.phone && !formData.phone.trim() && (
              <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
            )}
          </div>

          <div className="space-y-1">
            <textarea
              placeholder="Address"
              className={getInputClass('address')}
              value={formData.address}
              onChange={(event) =>
                setFormData((prev) => ({ ...prev, address: event.target.value }))
              }
              onBlur={() => handleBlur('address')}
            />
            {touched.address && !formData.address.trim() && (
              <p className="text-xs text-red-500 mt-1">{errors.address}</p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <input
                type="text"
                placeholder="City"
                className={getInputClass('city')}
                value={formData.city}
                onChange={(event) =>
                  setFormData((prev) => ({ ...prev, city: event.target.value }))
                }
                onBlur={() => handleBlur('city')}
              />
              {touched.city && !formData.city.trim() && (
                <p className="text-xs text-red-500 mt-1">{errors.city}</p>
              )}
            </div>
            <div className="space-y-1">
              <input
                type="text"
                placeholder="Pincode"
                className={getInputClass('pincode')}
                value={formData.pincode}
                onChange={(event) =>
                  setFormData((prev) => ({ ...prev, pincode: event.target.value }))
                }
                onBlur={() => handleBlur('pincode')}
              />
              {touched.pincode && !formData.pincode.trim() && (
                <p className="text-xs text-red-500 mt-1">{errors.pincode}</p>
              )}
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6 h-full flex flex-col justify-between">
          <div>
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
            </div>
          </div>
          <div>
            <div className="border-t pt-3">
              <div className="flex justify-between font-semibold text-black text-lg">
                <span>Total</span>
                <span>₹{total}</span>
              </div>
            </div>
            <div className="mt-6">
              <button
                className="w-full h-12 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
                type="button"
                onClick={handlePlaceOrder}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage
