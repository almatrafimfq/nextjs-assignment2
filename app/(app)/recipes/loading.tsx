export default function LoadingRecipes() {
  return (
    <div className="animate-pulse">
      {/* Header Skeleton */}
      <div className="flex justify-between items-center mb-8">
        <div className="h-8 w-48 bg-zinc-200 rounded" />

        {/* Search bar placeholder */}
        <div className="flex gap-1">
          <div className="h-7 w-40 bg-zinc-100 rounded border border-zinc-200" />
          <div className="h-7 w-16 bg-zinc-100 rounded border border-zinc-200" />
        </div>
      </div>

      {/* Grid Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="flex flex-col">
            {/* Image Skeleton */}
            <div className="relative aspect-square w-full bg-zinc-200 rounded-lg" />

            {/* Content Skeleton */}
            <div className="pt-4 space-y-2">
              {/* Publisher line */}
              <div className="h-3 w-20 bg-zinc-100 rounded" />
              {/* Title line */}
              <div className="h-5 w-5/6 bg-zinc-200 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
