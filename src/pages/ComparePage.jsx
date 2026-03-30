import Button from '../components/Button.jsx'
import { useStore } from '../store/useStore.js'

const formatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0,
})

const ComparePage = () => {
  const compareItems = useStore((state) => state.compareItems)
  const removeFromCompare = useStore((state) => state.removeFromCompare)
  const clearCompare = useStore((state) => state.clearCompare)

  if (!compareItems.length) {
    return (
      <main className="flex items-center justify-center p-12">
        <div className="max-w-3xl rounded-3xl border border-dashed border-gray-300 bg-white p-10 text-center shadow-lg">
          <p className="text-lg font-semibold text-gray-900">No products selected</p>
          <p className="text-sm text-gray-500">Add up to four products to compare their specs.</p>
        </div>
      </main>
    )
  }

  return (
    <main className="animate-fadeIn max-w-6xl space-y-6 px-4 py-16 mx-auto">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900">Product Comparison</h1>
        </div>
        <Button variant="ghost" className="px-6 py-3" onClick={clearCompare}>
          Clear all
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {compareItems.map((item) => (
          <div key={item.id} className="rounded-2xl border border-gray-200 bg-white p-6 shadow">
            <div className="h-48 w-full overflow-hidden rounded-2xl">
              <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
            </div>
            <div className="mt-4 space-y-2">
              <h2 className="text-lg font-semibold text-gray-900">{item.name}</h2>
              <p className="text-sm text-gray-500">{item.category}</p>
              <p className="text-sm font-medium text-indigo-600">{formatter.format(item.priceValue ?? 0)}</p>
              <p className="text-xs uppercase tracking-[0.3em] text-gray-400">{item.brand}</p>
              <button
                type="button"
                onClick={() => removeFromCompare(item.id)}
                className="mt-3 w-full rounded-full border border-red-200 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-red-500"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default ComparePage
