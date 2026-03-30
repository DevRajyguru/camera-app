import { useEffect, useMemo, useState } from 'react'
import Button from '../components/Button.jsx'
import ProductCard from '../components/ProductCard.jsx'
import SkeletonCard from '../components/SkeletonCard.jsx'
import { useStore } from '../store/useStore.js'
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
  priceRange,
  selectedBrands,
  selectedCategories,
  selectedSensors,
  onPriceChange,
  onToggleBrand,
  onToggleCategory,
  onToggleSensor,
  onClear,
  onClose,
}) => (
  <div className="flex flex-col gap-6 rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
    <div className="flex items-center justify-between">
      <h3 className="text-sm font-semibold uppercase tracking-[0.4em] text-gray-500">Filters</h3>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onClear}
          className="text-xs font-semibold uppercase tracking-[0.4em] text-gray-400 transition hover:text-gray-700"
        >
          Clear
        </button>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-gray-200 px-2 py-1 text-xs font-semibold text-gray-700"
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
          value={priceRange.min}
          onChange={(event) => onPriceChange('min', event.target.value)}
          placeholder="Min ₹"
          className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-700 placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none"
        />
        <input
          type="number"
          min="0"
          value={priceRange.max}
          onChange={(event) => onPriceChange('max', event.target.value)}
          placeholder="Max ₹"
          className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-700 placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none"
        />
      </div>
    </div>

    <div className="space-y-3">
      <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gray-800">Sensor</p>
      <div className="grid gap-2">
        {sensorOptions.map((sensor) => (
          <label
            key={sensor}
            className="flex items-center gap-2 rounded-2xl border border-gray-200 px-3 py-2 text-sm font-semibold text-gray-800 transition hover:border-indigo-500 hover:text-indigo-700"
          >
            <input
              type="checkbox"
              checked={selectedSensors.includes(sensor)}
              onChange={() => onToggleSensor(sensor)}
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            {sensor}
          </label>
        ))}
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
              checked={selectedBrands.includes(brand)}
              onChange={() => onToggleBrand(brand)}
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
              checked={selectedCategories.includes(category)}
              onChange={() => onToggleCategory(category)}
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            {category}
          </label>
        ))}
      </div>
    </div>
  </div>
)

const ProductsPage = () => {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false)
  const [visibleCount, setVisibleCount] = useState(6)
  const [loading, setLoading] = useState(true)

  const searchQuery = useStore((state) => state.searchQuery)
  const debouncedSearch = useStore((state) => state.debouncedSearch)
  const setSearchQuery = useStore((state) => state.setSearchQuery)
  const setDebouncedSearch = useStore((state) => state.setDebouncedSearch)
  const selectedBrands = useStore((state) => state.selectedBrands)
  const selectedCategories = useStore((state) => state.selectedCategories)
  const selectedSensors = useStore((state) => state.selectedSensors)
  const priceRange = useStore((state) => state.priceRange)
  const setBrands = useStore((state) => state.setBrands)
  const setCategories = useStore((state) => state.setCategories)
  const setSensors = useStore((state) => state.setSensors)
  const setPriceRange = useStore((state) => state.setPriceRange)
  const clearFilters = useStore((state) => state.clearFilters)
  const sortOption = useStore((state) => state.sortOption)
  const setSortOption = useStore((state) => state.setSortOption)

  useEffect(() => {
    setVisibleCount(6)
  }, [
    debouncedSearch,
    selectedBrands,
    selectedCategories,
    selectedSensors,
    priceRange.min,
    priceRange.max,
    sortOption,
  ])

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(searchQuery), 400)
    return () => clearTimeout(timer)
  }, [searchQuery, setDebouncedSearch])

  const handlePriceChange = (field, rawValue) => {
    const value = rawValue === '' ? 0 : Number(rawValue)
    setPriceRange({
      ...priceRange,
      [field]: value,
    })
  }

  const toggleBrand = (brand) => {
    const next = selectedBrands.includes(brand)
      ? selectedBrands.filter((item) => item !== brand)
      : [...selectedBrands, brand]
    setBrands(next)
  }

  const toggleCategory = (category) => {
    const next = selectedCategories.includes(category)
      ? selectedCategories.filter((item) => item !== category)
      : [...selectedCategories, category]
    setCategories(next)
  }

  const toggleSensor = (sensor) => {
    const next = selectedSensors.includes(sensor)
      ? selectedSensors.filter((item) => item !== sensor)
      : [...selectedSensors, sensor]
    setSensors(next)
  }

  const filteredProducts = useMemo(() => {
    const query = (debouncedSearch || '').toLowerCase().trim()
    return productsCatalog.filter((product) => {
      const name = product.name?.toLowerCase() ?? ''
      const brand = product.brand?.toLowerCase() ?? ''
      const category = product.category?.toLowerCase() ?? ''
      const sensor = product.sensor?.toLowerCase() ?? ''
      const price = product.priceValue ?? 0

      const matchesSearch =
        query === '' || name.includes(query) || brand.includes(query) || category.includes(query)

      const matchesBrand =
        selectedBrands.length === 0 || selectedBrands.includes(product.brand)

      const matchesCategory =
        selectedCategories.length === 0 || selectedCategories.includes(product.category)

      const matchesSensor =
        selectedSensors.length === 0 || selectedSensors.includes(product.sensor)

      const matchesPrice = price >= priceRange.min && price <= priceRange.max

      return (
        matchesSearch &&
        matchesBrand &&
        matchesCategory &&
        matchesSensor &&
        matchesPrice
      )
    })
  }, [
    debouncedSearch,
    selectedBrands,
    selectedCategories,
    selectedSensors,
    priceRange.min,
    priceRange.max,
  ])

  const sortedProducts = useMemo(() => {
    const sorted = [...filteredProducts]
    if (sortOption === 'price_low') {
      sorted.sort((a, b) => (a.priceValue ?? 0) - (b.priceValue ?? 0))
    } else if (sortOption === 'price_high') {
      sorted.sort((a, b) => (b.priceValue ?? 0) - (a.priceValue ?? 0))
    } else {
      sorted.sort(
        (a, b) => new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf(),
      )
    }
    return sorted
  }, [filteredProducts, sortOption])

  const visibleProducts = sortedProducts.slice(0, visibleCount)

  if (!loading && filteredProducts.length === 0) {
    return (
      <main className="animate-fadeIn min-h-screen bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 py-20 text-center">
          <h2 className="text-xl font-semibold mb-2">No products found 😕</h2>
          <p className="text-gray-500">Try adjusting your filters or search.</p>
        </div>
      </main>
    )
  }

  return (
    <main className="animate-fadeIn min-h-screen bg-gray-50">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 md:px-6 lg:flex-row lg:gap-10">
        <aside className="hidden w-72 shrink-0 lg:block">
          <FilterPanel
            priceRange={priceRange}
            selectedBrands={selectedBrands}
            selectedCategories={selectedCategories}
            selectedSensors={selectedSensors}
            onPriceChange={handlePriceChange}
            onToggleBrand={toggleBrand}
            onToggleCategory={toggleCategory}
            onToggleSensor={toggleSensor}
            onClear={clearFilters}
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
              <Button
                className="lg:hidden border border-gray-200 bg-white/80 text-gray-700 hover:text-white hover:bg-indigo-500"
                onClick={() => setIsFilterModalOpen(true)}
              >
                <span className="-ml-0.5 text-lg leading-none">+</span>
                <span className="ml-2 text-xs uppercase tracking-[0.3em] text-gray-700">Filters</span>
              </Button>
              <label className="hidden text-xs uppercase tracking-[0.4em] text-gray-400 lg:block">
                Sort
              </label>
              <select
                value={sortOption}
                onChange={(event) => setSortOption(event.target.value)}
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

          <div className="rounded-2xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
            <input
              type="text"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search cameras, lenses, accessories"
              className="w-full rounded-2xl border border-gray-200 px-4 py-2 text-sm focus:border-indigo-500 focus:outline-none"
            />
          </div>

          {loading ? (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <SkeletonCard key={index} />
              ))}
            </div>
          ) : (
            <div className="grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">
              {visibleProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          {!loading && visibleCount < sortedProducts.length && (
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
              priceRange={priceRange}
              selectedBrands={selectedBrands}
              selectedCategories={selectedCategories}
              selectedSensors={selectedSensors}
              onPriceChange={handlePriceChange}
              onToggleBrand={toggleBrand}
              onToggleCategory={toggleCategory}
              onToggleSensor={toggleSensor}
              onClear={() => {
                clearFilters()
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
