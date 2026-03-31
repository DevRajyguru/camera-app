import heroImage from '../assets/images/SummicronMirrorless.jpg'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col lg:flex-row items-center gap-10">
        <div className="w-full text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight tracking-tight">
              Capture Moments Like Never Before
          </h1>
          <p className="text-gray-600 mt-4 max-w-md mx-auto lg:mx-0">
            Discover premium cameras, lenses, and accessories curated for creators who care about every detail.
          </p>
          <div className="mt-8 flex justify-center lg:justify-start">
            <Link
              to="/products"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-white font-semibold shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Shop Now
            </Link>
          </div>
        </div>

        <div className="w-full max-w-md">
          <div className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-lg">
            <img
              src={heroImage}
              alt="Premium camera gear"
              className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-10 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
    </section>
  )
}

export default Hero
