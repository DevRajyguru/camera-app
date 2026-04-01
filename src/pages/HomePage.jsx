import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ProductCard from '../components/ProductCard.jsx'
import Button from '../components/Button.jsx'
import dslrImage from '../assets/images/DSLR.jpg'
import mirrorlessImage from '../assets/images/mirrorless.jpg'
import lensesImage from '../assets/images/lenses.jpg'
import accessoriesImage from '../assets/images/Accessories.jpg'
import defaultCategoryImage from '../assets/hero.png'
import {
  categoryTiles,
  featuredBrands,
  newLaunches,
  trendingProducts,
} from '../data/sampleProducts.js'

const categoryImages = {
  DSLR: dslrImage,
  MIRRORLESS: mirrorlessImage,
  LENSES: lensesImage,
  ACCESSORIES: accessoriesImage,
}

const HomePage = () => {
  const navigate = useNavigate()
  const trendingBase = useMemo(() => trendingProducts.slice(0, 3), [])
  const [trendingPaused, setTrendingPaused] = useState(false)
  const [trendingSlidesPerView, setTrendingSlidesPerView] = useState(3)
  const [trendingIndex, setTrendingIndex] = useState(0)
  const [trendingTransition, setTrendingTransition] = useState(true)
  const trendingSlides = useMemo(() => {
    if (!trendingBase.length) return []

    const slides = []
    for (let start = 0; start < trendingBase.length; start += trendingSlidesPerView) {
      let group = trendingBase.slice(start, start + trendingSlidesPerView)
      if (group.length < trendingSlidesPerView) {
        group = [...group, ...trendingBase.slice(0, trendingSlidesPerView - group.length)]
      }
      slides.push(group)
    }

    // Ensure we always have at least 2 slides so the animation is visible on desktop.
    if (slides.length === 1) {
      slides.push(slides[0])
    }

    return slides
  }, [trendingBase, trendingSlidesPerView])

  useEffect(() => {
    const updateSlidesPerView = () => {
      const width = window.innerWidth
      const nextSlidesPerView = width < 640 ? 1 : width < 1024 ? 2 : 3
      setTrendingSlidesPerView((current) => {
        if (current !== nextSlidesPerView) {
          setTrendingTransition(false)
          setTrendingIndex(0)
          requestAnimationFrame(() => {
            setTrendingTransition(true)
          })
        }
        return nextSlidesPerView
      })
    }

    updateSlidesPerView()
    window.addEventListener('resize', updateSlidesPerView)
    return () => window.removeEventListener('resize', updateSlidesPerView)
  }, [])

  useEffect(() => {
    if (trendingPaused) return
    if (trendingSlides.length <= 1) return

    const intervalId = setInterval(() => {
      setTrendingIndex((prev) => (prev + 1) % trendingSlides.length)
    }, 3000)

    return () => clearInterval(intervalId)
  }, [trendingPaused, trendingSlides.length])

  return (
  <main className="bg-gray-50 overflow-x-hidden">
    <div className="mx-auto flex w-full max-w-7xl flex-col space-y-20 px-4 pb-16 pt-10 sm:px-6 lg:px-8">
    <section className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-indigo-50 via-white to-white px-6 py-20 shadow-xl transition-shadow duration-300 hover:shadow-2xl">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.25),_transparent_60%)] blur-3xl" />
      <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl space-y-5">
          <p className="text-sm uppercase tracking-[0.6em] text-gray-500">Lens Intelligence</p>
          <h1 className="text-5xl font-bold leading-tight tracking-tight text-gray-900 sm:text-6xl lg:text-[4.5rem]">
            Discover the Best Cameras
          </h1>
          <p className="text-lg text-gray-500">
            Premium gear curated for creators who crave clarity, cinematic drama, and timeless ergonomics.
            Every drop is selected for visual storytellers who demand precision.
          </p>
          <button
            type="button"
            onClick={() => navigate('/products')}
            className="btn-primary mt-3 rounded-full px-8 py-3 uppercase tracking-[0.4em] transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
          >
            Explore Now
          </button>
        </div>
        <div className="relative w-full max-w-sm rounded-[32px] border border-gray-200 bg-white/90 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <p className="text-xs uppercase tracking-[0.4em] text-gray-500">Lens Labs</p>
          <p className="mt-3 text-3xl font-bold text-gray-900">Curated drops every week</p>
          <p className="mt-2 text-sm text-gray-500">
            Join the insider waitlist for limited releases, stories, and bespoke bundles.
          </p>
          <div className="mt-6 flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Next release</p>
              <p className="text-xl font-semibold text-gray-900">Tomorrow</p>
            </div>
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-blue-500 text-white">
              24h
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="mx-auto h-px max-w-4xl bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

    <section className="space-y-8 rounded-3xl bg-white px-6 py-16 shadow-lg md:px-10 md:py-20">
      <div className="flex flex-col gap-2">
        <h2 className="text-xl md:text-2xl font-semibold tracking-wide text-gray-900">Featured Brands</h2>
        <p className="text-sm text-gray-500">Trusted partners powering every frame.</p>
      </div>
      <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {featuredBrands.map((brand) => (
          <div
            key={brand}
            className="flex h-28 items-center justify-center rounded-2xl border border-gray-200 bg-white shadow-md ring-1 ring-slate-200/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <span className="text-lg font-semibold tracking-[0.4em] text-gray-900">{brand}</span>
          </div>
        ))}
      </div>
    </section>

    <div className="mx-auto h-px max-w-4xl bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

    <section className="space-y-8 rounded-3xl bg-white px-6 py-16 shadow-lg md:px-10 md:py-20">
      <div className="flex flex-col gap-2">
        <h2 className="text-xl md:text-2xl font-semibold tracking-wide text-gray-900">Shop by Category</h2>
        <p className="text-sm text-gray-500">Choose a focus and let the light follow.</p>
      </div>
  <div className="grid gap-6 md:gap-8 md:grid-cols-2">
        {categoryTiles.map((category) => {
          const normalizedTitle = category.title?.toUpperCase()
          const categoryImage =
            categoryImages[category.title] ||
            categoryImages[normalizedTitle] ||
            defaultCategoryImage
          console.log('Category:', category.title)

          return (
            <article
              key={category.title}
              className="group flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg ring-1 ring-slate-200/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative">
                <div className="h-48 w-full overflow-hidden rounded-t-2xl bg-gray-100">
                  <img
                    src={categoryImage}
                    alt={category.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="space-y-3 px-6 py-6">
                <p className="text-xs uppercase tracking-[0.5em] text-gray-500">{category.subtitle}</p>
                <h3 className="text-3xl font-semibold text-gray-900">{category.title}</h3>
                <Button
                  className="w-full justify-between px-6 py-2 uppercase tracking-[0.4em] transition-all duration-300 hover:shadow-lg active:scale-95"
                  onClick={() => navigate(`/products?category=${encodeURIComponent(category.title)}`)}
                >
                  Browse
                  <span className="text-2xl leading-none">&rarr;</span>
                </Button>
              </div>
            </article>
          )
        })}
      </div>
    </section>

    <div className="mx-auto h-px max-w-4xl bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

    <section className="space-y-8 rounded-3xl bg-white px-6 py-16 shadow-lg md:px-10 md:py-20">
      <div className="flex flex-col gap-2">
        <h2 className="text-xl md:text-2xl font-semibold tracking-wide text-gray-900">Trending Products</h2>
        <p className="text-sm text-gray-500">Curated by our editors for cinematic stories.</p>
      </div>
      <div
        className="overflow-hidden"
        onMouseEnter={() => setTrendingPaused(true)}
        onMouseLeave={() => setTrendingPaused(false)}
      >
        <div
          className={`flex ${trendingTransition ? 'transition-transform duration-700 ease-in-out' : ''}`}
          style={{ transform: `translateX(-${trendingIndex * 100}%)` }}
        >
          {trendingSlides.map((group, slideIndex) => (
            <div key={`trending-slide-${slideIndex}`} className="min-w-full flex gap-6 md:gap-8">
              {group.map((product) => (
                <div key={product.id} className="flex-1 min-w-0">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 flex justify-center gap-2">
        {trendingSlides.map((_, index) => (
          <button
            key={`trending-dot-${index}`}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => setTrendingIndex(index)}
            className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
              trendingIndex === index
                ? 'bg-indigo-500 scale-110 shadow-sm'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </section>

    <div className="mx-auto h-px max-w-4xl bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

    <section className="space-y-8 rounded-3xl bg-white px-6 py-16 shadow-lg md:px-10 md:py-20">
      <div className="flex flex-col gap-2">
        <h2 className="text-xl md:text-2xl font-semibold tracking-wide text-gray-900">New Launches</h2>
        <p className="text-sm text-gray-500">Fresh drops ready for your next act.</p>
      </div>
      <div className="grid items-stretch gap-6 md:gap-8 md:grid-cols-2">
        {newLaunches.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
    </div>
  </main>
  )
}

export default HomePage
