import ProductCard from '../components/ProductCard.jsx'
import Button from '../components/Button.jsx'
import {
  categoryTiles,
  featuredBrands,
  newLaunches,
  trendingProducts,
} from '../data/sampleProducts.js'

const HomePage = () => (
  <main className="bg-gray-50">
    <div className="mx-auto flex max-w-7xl flex-col space-y-20 px-4 pb-16 pt-10 md:px-8 lg:px-12">
    <section className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-indigo-50 via-white to-white px-6 py-20 shadow-xl">
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
          <Button className="mt-3 px-8 py-3 uppercase tracking-[0.4em]">
            Explore Now
          </Button>
        </div>
        <div className="relative w-full max-w-sm rounded-[32px] border border-gray-200 bg-white/90 p-6 shadow-lg">
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
            className="flex h-28 items-center justify-center rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
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
        {categoryTiles.map((category) => (
          <article
            key={category.title}
            className="flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="relative overflow-hidden">
              <div className="h-48 w-full flex items-center justify-center bg-gray-100 rounded-xl">
                <p className="text-sm text-gray-500">No Image</p>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <div className="space-y-3 px-6 py-6">
              <p className="text-xs uppercase tracking-[0.5em] text-gray-500">{category.subtitle}</p>
              <h3 className="text-3xl font-semibold text-gray-900">{category.title}</h3>
              <Button className="w-full justify-between px-6 py-2 uppercase tracking-[0.4em]">
                Browse
                <span className="text-2xl leading-none">&rarr;</span>
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>

    <div className="mx-auto h-px max-w-4xl bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

    <section className="space-y-8 rounded-3xl bg-white px-6 py-16 shadow-lg md:px-10 md:py-20">
      <div className="flex flex-col gap-2">
        <h2 className="text-xl md:text-2xl font-semibold tracking-wide text-gray-900">Trending Products</h2>
        <p className="text-sm text-gray-500">Curated by our editors for cinematic stories.</p>
      </div>
      <div className="grid items-stretch gap-6 md:gap-8 md:grid-cols-2 xl:grid-cols-3">
        {trendingProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
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

export default HomePage
