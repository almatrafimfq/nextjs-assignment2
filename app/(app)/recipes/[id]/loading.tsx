export default function LoadingRecipeDetails() {
  return (
    <main className="max-w-4xl mx-auto p-6 md:p-12 space-y-8 animate-pulse">
      {/* Header Skeleton */}
      <div className="border-b border-zinc-100 pb-6 space-y-4">
        {/* Back Button Skeleton */}
        <div className="h-4 w-24 bg-zinc-200 rounded" />
        {/* Title Skeleton */}
        <div className="h-8 w-2/3 bg-zinc-200 rounded" />
        {/* Meta Skeleton */}
        <div className="flex gap-4 pt-1">
          <div className="h-4 w-16 bg-zinc-200 rounded" />
          <div className="h-4 w-20 bg-zinc-200 rounded" />
          <div className="h-4 w-24 bg-zinc-200 rounded" />
        </div>
      </div>

      {/* Content Layout Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Ingredients Skeleton */}
        <div className="space-y-4">
          <div className="h-6 w-28 bg-zinc-200 rounded" />
          <div className="space-y-3 border-t border-zinc-100 pt-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-4 w-full bg-zinc-100 rounded" />
            ))}
          </div>
        </div>

        {/* Media Skeleton */}
        <div className="aspect-square w-full rounded-lg bg-zinc-200" />
      </div>
    </main>
  );
}
