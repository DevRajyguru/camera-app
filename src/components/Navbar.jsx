import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaHeart, FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { useStore } from '../store/useStore.js'

const Navbar = () => {
  const navigate = useNavigate()
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const cart = useStore((state) => state.cart)
  const wishlist = useStore((state) => state.wishlist)
  const searchQuery = useStore((state) => state.searchQuery)
  const setSearchQuery = useStore((state) => state.setSearchQuery)
  const resetFilters = useStore((state) => state.resetFilters)

  const handleHomeSearch = (value = searchQuery) => {
    resetFilters()
    setSearchQuery(value)
    navigate('/products')
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/70 shadow-sm shadow-slate-900/10 backdrop-blur-md transition-all duration-300 relative">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="text-lg font-semibold tracking-wide text-slate-900 transition-opacity duration-300 hover:opacity-80"
          onClick={() => resetFilters()}
        >
          CameraApp
        </Link>

        <div className="flex flex-1 justify-center">
          <div className="w-full max-w-md">
            <label htmlFor="site-search" className="sr-only">
              Search camera gear
            </label>
            <div className="relative hidden sm:block">
              <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-slate-400">
                <FaSearch />
              </span>
              <input
                id="site-search"
                type="search"
                placeholder="Search cameras, lenses, accessories"
                value={searchQuery}
                onChange={(event) => {
                  setSearchQuery(event.target.value)
                }}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    handleHomeSearch(searchQuery)
                  }
                }}
                className="w-full rounded-full border border-gray-200 bg-white px-4 py-2.5 pl-12 text-sm text-slate-700 shadow-sm transition-all duration-300 placeholder:text-slate-400 hover:border-slate-300 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200/60 focus:shadow-md"
              />
            </div>

            <button
              type="button"
              className="flex sm:hidden h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-slate-600 shadow-sm ring-1 ring-slate-200/60 transition-all duration-300 hover:bg-indigo-500 hover:text-white active:scale-95 mx-auto"
              aria-label="Open search"
              onClick={() => setIsSearchOpen(true)}
            >
              <FaSearch className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="flex gap-3">
          <Link
            to="/cart"
            className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-slate-600 shadow-sm ring-1 ring-slate-200/60 transition-all duration-300 hover:scale-110 hover:bg-indigo-500 hover:text-white hover:shadow-md active:scale-95"
            aria-label="Cart"
          >
            <FaShoppingCart className="h-4 w-4" />
            {cart.length > 0 && (
              <span className="absolute -top-2 right-0 rounded-full bg-red-500 px-1.5 text-[0.55rem] font-semibold text-white">
                {cart.length}
              </span>
            )}
          </Link>

          <Link
            to="/wishlist"
            className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-slate-600 shadow-sm ring-1 ring-slate-200/60 transition-all duration-300 hover:scale-110 hover:bg-indigo-500 hover:text-white hover:shadow-md active:scale-95"
            aria-label="Wishlist"
          >
            <FaHeart className="h-4 w-4" />
            {wishlist.length > 0 && (
              <span className="absolute -top-2 right-0 rounded-full bg-red-500 px-1.5 text-[0.55rem] font-semibold text-white">
                {wishlist.length}
              </span>
            )}
          </Link>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-slate-600 shadow-sm ring-1 ring-slate-200/60 transition-all duration-300 hover:scale-110 hover:bg-indigo-500 hover:text-white hover:shadow-md active:scale-95"
            aria-label="User account"
          >
            <FaUser className="h-4 w-4" />
          </button>
        </div>
      </div>

      {isSearchOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/10 sm:hidden"
            onClick={() => setIsSearchOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute left-0 top-full z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-md sm:hidden">
            <div className="mx-auto w-full max-w-7xl px-4 py-4">
              <div className="relative">
                <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-slate-400">
                  <FaSearch />
                </span>
                <input
                  autoFocus
                  type="search"
                  placeholder="Search cameras, lenses, accessories"
                  value={searchQuery}
                  onChange={(event) => {
                    setSearchQuery(event.target.value)
                  }}
                  onKeyDown={(event) => {
                    if (event.key === 'Escape') {
                      setIsSearchOpen(false)
                      return
                    }

                    if (event.key === 'Enter') {
                      handleHomeSearch(searchQuery)
                      setIsSearchOpen(false)
                    }
                  }}
                  onBlur={() => {
                    setIsSearchOpen(false)
                  }}
                  className="w-full rounded-full border border-gray-200 bg-white px-4 py-2.5 pl-12 text-sm text-slate-700 shadow-sm transition-all duration-300 placeholder:text-slate-400 hover:border-slate-300 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200/60 focus:shadow-md"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  )
}

export default Navbar
