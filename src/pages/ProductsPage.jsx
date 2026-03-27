import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Button from '../components/Button.jsx'
import ProductCard from '../components/ProductCard.jsx'
import { productsCatalog } from '../data/sampleProducts.js'

const brandOptions = ['Canon', 'Sony', 'Nikon', 'Fujifilm']
const categoryOptions = ['DSLR', 'Mirrorless', 'Lenses', 'Accessories']
const sensorOptions = ['Full Frame', 'APS-C']
const sortOptions = [
  { value: 'latest', label: 'Latest' },
  { value: 'price_low', label: 'Price: Low → High' },
  { value: 'price_high', label: 'Price: High → Low' },
]

const FilterPanel = ({
  priceMin,
  priceMax,
  onPriceChange,
  activeBrands,
  activeCategories,
  activeSensors,
  onToggle,
  onReset,
  onClose,
}) => (
  <div className="flex flex-col gap-6 rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
    <div className="flex items-center justify-between">
      <h3 className="text-sm font-semibold uppercase tracking-[0.4em] text-gray-500">Filters</h3>
      <div className="flex items-center gap-2">
        <button
          type="button"
          className="text-xs font-semibold uppercase tracking-[0.4em] text-gray-400 transition hover:text-gray-700"
          onClick={onReset}
        >
          Clear
        </button>
        {onClose && (
          <button
            type="button"
            className="rounded-full border border-gray-200 px-2 py-1 text-xs font-semibold text-gray-700"
            onClick={() => onClose()}
          >
            Close
          </button>
        )}
      </div>
    </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gray-800">Price range</p>
            <div className="flex gap-2">
        <input
          type="number"
          min="0"
          value={priceMin}
          onChange={(event) => onPriceChange('priceMin', event.target.value)}
          placeholder="Min ₹"
          className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-700 placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none"
        />
        <input
          type="number"
          min="0"
          value={priceMax}
          onChange={(event) => onPriceChange('priceMax', event.target.value)}
          placeholder="Max ₹"
          className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-700 placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none"
        />
      </div>
    </div>

      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gray-800">Brands</p>
      <div className="grid gap-2">
        {brandOptions.map((brand) => (
          <label
            key={brand}
            className="flex items-center gap-2 rounded-2xl border border-gray-200 px-3 py-2 text-sm font-semibold text-gray-800 transition hover:border-indigo-500 hover:text-indigo-700"
          >
            <input
              type="checkbox"
              checked={activeBrands.includes(brand)}
              onChange={() => onToggle('brand', brand)}
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            {brand}
          </label>
        ))}
      </div>
    </div>

      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gray-800">Category</p>
      <div className="grid gap-2">
        {categoryOptions.map((category) => (
          <label
            key={category}
            className="flex items-center gap-2 rounded-2xl border border-gray-200 px-3 py-2 text-sm font-semibold text-gray-800 transition hover:border-indigo-500 hover:text-indigo-700"
          >
            <input
              type="checkbox"
              checked={activeCategories.includes(category)}
              onChange={() => onToggle('category', category)}
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            {category}
          </label>
        ))}
      </div>
    </div>

      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gray-800">Sensor type</p>
      <div className="grid gap-2">
        {sensorOptions.map((sensor) => (
          <label
            key={sensor}
            className="flex items-center gap-2 rounded-2xl border border-gray-200 px-3 py-2 text-sm font-semibold text-gray-800 transition hover:border-indigo-500 hover:text-indigo-700"
          >
            <input
              type="checkbox"
              checked={activeSensors.includes(sensor)}
              onChange={() => onToggle('sensor', sensor)}
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            {sensor}
          </label>
        ))}
      </div>
    </div>
  </div>
)

const ProductsPage = () => {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false)
  const [visibleCount, setVisibleCount] = useState(6)
  const [searchParams, setSearchParams] = useSearchParams()

  const priceMin = searchParams.get('priceMin') ?? ''
  const priceMax = searchParams.get('priceMax') ?? ''
  const activeBrands = searchParams.getAll('brand')
  const activeCategories = searchParams.getAll('category')
  const activeSensors = searchParams.getAll('sensor')
  const sort = searchParams.get('sort') ?? 'latest'

  useEffect(() => {
    setVisibleCount(6)
  }, [searchParams.toString()])

  const handlePriceChange = (key, raw) => {
    const cleaned = raw.replace(/\D/g, '')
    const params = new URLSearchParams(searchParams)
    if (cleaned) {
      params.set(key, cleaned)
    } else {
      params.delete(key)
    }
    setSearchParams(params)
  }

  const toggleMultiFilter = (key, value) => {
    const params = new URLSearchParams(searchParams)
    const existing = params.getAll(key)
    if (existing.includes(value)) {
      const remaining = existing.filter((item) => item !== value)
      params.delete(key)
      remaining.forEach((item) => params.append(key, item))
    } else {
      params.append(key, value)
    }
    setSearchParams(params)
  }

  const handleSortChange = (event) => {
    const params = new URLSearchParams(searchParams)
    params.set('sort', event.target.value)
    setSearchParams(params)
  }

  const handleResetFilters = () => {
    setSearchParams({})
  }

  const filteredProducts = useMemo(() => {
    const minValue = Number(priceMin) || 0
    const maxValue = priceMax ? Number(priceMax) : Infinity
    return productsCatalog.filter((product) => {
      const matchesPrice = product.priceValue >= minValue && product.priceValue <= maxValue
      const matchesBrand = activeBrands.length === 0 || activeBrands.includes(product.brand)
      const matchesCategory = activeCategories.length === 0 || activeCategories.includes(product.category)
      const matchesSensor = activeSensors.length === 0 || activeSensors.includes(product.sensor)
      return matchesPrice && matchesBrand && matchesCategory && matchesSensor
    })
  }, [activeBrands, activeCategories, activeSensors, priceMax, priceMin])

  const sortedProducts = useMemo(() => {
    const sorted = [...filteredProducts]
    if (sort === 'price_low') {
      sorted.sort((a, b) => a.priceValue - b.priceValue)
    } else if (sort === 'price_high') {
      sorted.sort((a, b) => b.priceValue - a.priceValue)
    } else {
      sorted.sort(
        (a, b) => new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf(),
      )
    }
    return sorted
  }, [filteredProducts, sort])

  const visibleProducts = sortedProducts.slice(0, visibleCount)

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 md:px-6 lg:flex-row lg:gap-10">
        <aside className="hidden w-72 shrink-0 lg:block">
          <FilterPanel
            priceMin={priceMin}
            priceMax={priceMax}
            onPriceChange={handlePriceChange}
            activeBrands={activeBrands}
            activeCategories={activeCategories}
            activeSensors={activeSensors}
            onToggle={toggleMultiFilter}
            onReset={handleResetFilters}
          />
        </aside>

        <section className="flex-1 space-y-6">
          <div className="flex flex-col gap-4 rounded-3xl border border-gray-200 bg-white px-6 py-5 shadow-sm md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-lg font-semibold text-gray-900">Product Catalog</h2>
              <span className="text-sm text-gray-500">
                {sortedProducts.length} items
              </span>
            </div>
            <div className="flex items-center gap-3">
            <Button className="lg:hidden border border-gray-200 bg-white/80 text-gray-700 hover:text-white hover:bg-indigo-500">
              <span className="-ml-0.5 text-lg leading-none">+</span>
              <span className="ml-2 text-xs uppercase tracking-[0.3em] text-gray-700">Filters</span>
            </Button>
              <label className="hidden text-xs uppercase tracking-[0.4em] text-gray-400 lg:block">
                Sort
              </label>
              <select
                value={sort}
                onChange={handleSortChange}
                className="mr-4 rounded-2xl border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 focus:border-indigo-500 focus:outline-none"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">
            {visibleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
            {visibleProducts.length === 0 && (
              <div className="col-span-full rounded-3xl border border-dashed border-gray-300 bg-white/70 p-8 text-center text-gray-500">
                No products match the selected filters.
              </div>
            )}
          </div>

          {visibleCount < sortedProducts.length && (
          <div className="flex justify-center">
            <Button className="px-6 py-3 uppercase tracking-[0.4em]" onClick={() => setVisibleCount((prev) => prev + 6)}>
              Load more
            </Button>
          </div>
          )}
        </section>
      </div>

      {isFilterModalOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/40 px-4 py-6">
          <div className="max-h-[90vh] w-full max-w-sm overflow-auto rounded-3xl bg-white p-6 shadow-2xl">
            <FilterPanel
              priceMin={priceMin}
              priceMax={priceMax}
              onPriceChange={handlePriceChange}
              activeBrands={activeBrands}
              activeCategories={activeCategories}
              activeSensors={activeSensors}
              onToggle={toggleMultiFilter}
              onReset={() => {
                handleResetFilters()
                setIsFilterModalOpen(false)
              }}
              onClose={() => setIsFilterModalOpen(false)}
            />
          </div>
        </div>
      )}
    </main>
  )
}

export default ProductsPage
