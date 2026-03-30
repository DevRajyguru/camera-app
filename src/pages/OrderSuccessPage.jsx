import { useNavigate } from 'react-router-dom'

const OrderSuccessPage = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <div className="w-full max-w-md">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
          <span className="text-3xl text-green-600">✔</span>
        </div>
        <h1 className="text-2xl font-semibold mb-2">Order Placed Successfully</h1>
        <p className="text-gray-600 mb-6">Thank you for your purchase 🎉</p>
        <button
          type="button"
          onClick={() => navigate('/')}
          className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  )
}

export default OrderSuccessPage
