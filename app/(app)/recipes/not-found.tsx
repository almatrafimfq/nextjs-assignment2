import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center text-center px-4 space-y-4">
      <div className="space-y-2">
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900">
          Recipe Not Found
        </h1>
        <p className="text-sm text-zinc-500 max-w-sm mx-auto">
          The recipe you are looking for does not exist or may have been
          removed.
        </p>
      </div>

      <Link
        href="/recipes"
        className="inline-flex items-center justify-center rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow hover:bg-zinc-800 transition-colors"
      >
        Back to recipes
      </Link>
    </main>
  );
}
