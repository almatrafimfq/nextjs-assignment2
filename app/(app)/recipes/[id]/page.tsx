import { RecipeDetailsResult } from "@/types/recipesApi";
import Image from "next/image";
import Link from "next/link";

import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function RecipeDetailsPage({ params }: PageProps) {
  const { id } = await params;

  const response = await fetch(
    `https://forkify-api.jonas.io/api/v2/recipes/${id}`,
  );
  if (!response.ok) notFound();

  const result = (await response.json()) as RecipeDetailsResult;
  const { recipe } = result.data;

  return (
    <main className="max-w-4xl mx-auto p-6 md:p-12 space-y-8">
      {/* Header Section */}
      <header className="border-b border-zinc-100 pb-6">
        {/* Back Button */}
        <Link
          href="/recipes"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-800 transition-colors"
        >
          <span>←</span>
          Back to recipes
        </Link>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">
          {recipe.title}
        </h1>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-3 text-sm text-zinc-500">
          <span>{recipe.cooking_time} mins</span>
          <span className="text-zinc-300">•</span>
          <span>{recipe.servings} servings</span>
          <span className="text-zinc-300">•</span>
          <Link
            href={recipe.source_url}
            target="_blank"
            className="hover:text-zinc-800 underline underline-offset-4"
          >
            By {recipe.publisher}
          </Link>
        </div>
      </header>

      {/* Content Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Ingredients List */}
        <section className="space-y-4">
          <h2 className="text-lg font-medium text-zinc-800">Ingredients</h2>
          <ul className="space-y-3 text-zinc-600 border-t border-zinc-100 pt-4">
            {recipe.ingredients.map((ingredient, index) => (
              <li
                key={`${index}-${ingredient.description}`}
                className="flex items-start gap-2 text-sm leading-relaxed"
              >
                <span className="text-zinc-400 select-none">•</span>
                <span>
                  {ingredient.quantity && `${ingredient.quantity} `}
                  {ingredient.unit && `${ingredient.unit} `}
                  {ingredient.description}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Media */}
        <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-zinc-50">
          <Image
            src={recipe.image_url}
            alt={recipe.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </main>
  );
}
