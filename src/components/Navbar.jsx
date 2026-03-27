import { Link } from 'react-router-dom'

const Navbar = () => (
  <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 py-3 shadow-sm shadow-slate-900/10 backdrop-blur-md">
    <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 sm:gap-4 sm:px-6 lg:px-8">
      <Link
        to="/"
        className="text-lg font-semibold tracking-wide text-slate-900 transition hover:text-slate-700"
      >
        CameraApp
      </Link>
      <div className="hidden flex-1 md:flex justify-center">
        <div className="w-full max-w-md">
          <label htmlFor="site-search" className="sr-only">
            Search camera gear
          </label>
          <div className="relative">
            <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-slate-400">
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
            </span>
              <input
                id="site-search"
                type="search"
                placeholder="Search cameras, lenses, accessories"
                className="w-full rounded-full border border-slate-200 bg-white px-4 py-2.5 pl-11 text-sm text-slate-700 shadow-sm transition focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-100"
              />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Link
          to="/wishlist"
          className="rounded-full border border-slate-200 p-2 text-slate-600 transition hover:border-slate-300 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400"
          aria-label="Wishlist"
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
            <path d="M3.172 5.172a4 4 0 015.656 0L12 8.343l3.172-3.171a4 4 0 115.656 5.657L12 21.657 3.172 10.828a4 4 0 010-5.656z" />
          </svg>
        </Link>
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

export default Navbar
