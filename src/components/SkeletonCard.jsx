export default function SkeletonCard() {
  return (
    <div className="animate-pulse rounded-2xl bg-white p-4 shadow">
      <div className="h-40 w-full rounded-lg bg-gray-200" />
      <div className="mt-4 space-y-2">
        <div className="h-4 w-3/4 rounded bg-gray-200" />
        <div className="h-4 w-1/2 rounded bg-gray-200" />
      </div>
    </div>
  )
}
