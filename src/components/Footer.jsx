import { Link } from 'react-router-dom'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  const quickLinks = [
    { label: 'Home', to: '/' },
    { label: 'Products', to: '/products' },
    { label: 'Compare', to: '/compare' },
    { label: 'Wishlist', to: '/wishlist' },
  ]

  const categories = ['DSLR', 'Mirrorless', 'Lenses', 'Accessories']
  const supportLinks = [
    { label: 'About Us', to: '/about' },
    { label: 'Contact', to: '/contact' },
    { label: 'Privacy Policy', to: '/privacy' },
    { label: 'Terms & Conditions', to: '/terms' },
  ]

  return (
    <footer className="bg-[#f8f9fb] border-t border-gray-200 py-10 text-slate-600">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 sm:px-10 lg:px-0">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-600">
                <span className="text-lg font-black">CA</span>
              </div>
              <div>
                <p className="text-lg font-semibold text-slate-900">CameraApp</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition duration-300 hover:bg-pink-500 hover:text-white"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition duration-300 hover:bg-blue-500 hover:text-white"
                aria-label="Twitter"
              >
                <FaTwitter size={18} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition duration-300 hover:bg-red-500 hover:text-white"
                aria-label="YouTube"
              >
                <FaYoutube size={18} />
              </a>
            </div>
          </div>

          <div className="space-y-3 pb-4">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-400">Quick links</p>
            <div className="space-y-2 text-sm text-gray-600">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="block rounded-xl px-2 py-1 transition hover:text-indigo-600"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-400">Categories</p>
            <div className="space-y-2 text-sm text-gray-600">
              {categories.map((category) => (
                <Link
                  key={category}
                  to="/products"
                  className="block rounded-xl px-2 py-1 transition hover:text-indigo-600"
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-400">Support</p>
            <div className="space-y-2 text-sm text-gray-600">
              {supportLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="block rounded-xl px-2 py-1 transition hover:text-indigo-600"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 bg-white/60 py-4">
        <p className="text-center text-sm uppercase tracking-[0.3em] text-slate-400 mt-4">
          © 2026 Camera App. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
