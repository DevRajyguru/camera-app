import { Link, useNavigate } from "react-router-dom"
import { useStore } from "../store/useStore.js"

const Navbar = () => {
  const navigate = useNavigate()
  const cart = useStore((state) => state.cart)
  const wishlist = useStore((state) => state.wishlist)
  const searchQuery = useStore((state) => state.searchQuery)
  const setSearchQuery = useStore((state) => state.setSearchQuery)
  const resetFilters = useStore((state) => state.resetFilters)

  const handleHomeSearch = (value = searchQuery) => {
    resetFilters()
    setSearchQuery(value)
    navigate("/products")
  }

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 py-3 shadow-sm shadow-slate-900/10 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 sm:gap-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="text-lg font-semibold tracking-wide text-slate-900 transition hover:text-slate-700"
          onClick={() => resetFilters()}
        >
          CameraApp
        </Link>
        <div className="hidden flex-1 md:flex justify-center">
          <div className="w-full max-w-md">
            <label htmlFor="site-search" className="sr-only">
              Search camera gear
            </label>
            <div className="relative">
              <button
                type="button"
                onClick={() => handleHomeSearch(searchQuery)}
                className="absolute inset-y-0 left-4 flex items-center text-slate-400 transition hover:text-slate-600"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="11" cy="11" r="7" />
                  <line x1="16.5" x2="22" y1="16.5" y2="22" />
                </svg>
              </button>
              <input
                id="site-search"
                type="search"
                placeholder="Search cameras, lenses, accessories"
                value={searchQuery}
                onChange={(event) => {
                  setSearchQuery(event.target.value)
                }}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    handleHomeSearch(searchQuery)
                  }
                }}
                className="w-full rounded-full border border-slate-200 bg-white px-4 py-2.5 pl-11 text-sm text-slate-700 shadow-sm transition focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-100"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Link
            to="/cart"
            className="relative rounded-full border border-slate-200 p-2 text-slate-600 transition hover:border-slate-300 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400"
            aria-label="Cart"
          >
            <div className="relative">
              🛒
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
                  {cart.length}
                </span>
              )}
            </div>
          </Link>
          <button
            type="button"
            onClick={() => navigate('/wishlist')}
            className="relative rounded-full border border-slate-200 p-2 text-slate-600 transition hover:border-slate-300 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400"
            aria-label="Wishlist"
          >
            <div className="relative">
              ❤️
              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
                  {wishlist.length}
                </span>
              )}
            </div>
          </button>
          <button
            type="button"
            className="rounded-full border border-slate-200 p-2 text-slate-600 transition hover:border-slate-300 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400"
            aria-label="User account"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="8" r="3.5" />
              <path d="M5.5 20c0-2.76 2.24-5 6.5-5s6.5 2.24 6.5 5" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
