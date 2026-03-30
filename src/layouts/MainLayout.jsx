import Navbar from '../components/Navbar.jsx'
import { useNavigate } from 'react-router-dom'
import { useStore } from '../store/useStore.js'
import Footer from '../components/Footer.jsx'

const MainLayout = ({ children }) => {
  const navigate = useNavigate()
  const compareItems = useStore((state) => state.compareItems)

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <div className="flex flex-1 flex-col bg-slate-50 text-slate-900">
        <Navbar />
        <main className="flex-1 mx-auto flex max-w-7xl flex-col px-4 py-10 sm:px-6 lg:px-8">
          {children}
        </main>
        <Footer />
      </div>
      {compareItems.length > 0 && (
        <button
          type="button"
          onClick={() => navigate('/compare')}
          className="fixed bottom-6 right-6 z-20 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-xl transition hover:bg-blue-500"
        >
          Compare ({compareItems.length})
        </button>
      )}
    </div>
  )
}

export default MainLayout
