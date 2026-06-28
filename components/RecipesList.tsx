"use client";

import { ForkifySearchResponse, RecipeSearchResult } from "@/types/recipesApi";
import Image from "next/image";
import { useState } from "react";

interface RecipesListProps {
  recipes: RecipeSearchResult[];
}

const RecipesList = ({ recipes }: RecipesListProps) => {
  const [recipeList, setRecipeList] = useState(recipes);
  const [searchQuery, setSearchQuery] = useState("Pizza");
  const [headerTitle, setHeaderTitle] = useState(searchQuery);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;

    setLoading(true);

    try {
      const response = await fetch(
        `https://forkify-api.jonas.io/api/v2/recipes?search=${searchQuery}`,
      );
      const result = (await response.json()) as ForkifySearchResponse;
      setRecipeList(result.data.recipes);
      setHeaderTitle(searchQuery);
    } catch (error) {
      console.log("Fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-zinc-800 tracking-tight">
          {headerTitle} Recipes
        </h1>

        <section>
          <input
            type="text"
            className="border rounded mr-1 p-0.5"
            placeholder="Enter Recipe"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="border rounded p-0.5 cursor-pointer active:bg-zinc-200"
          >
            {loading ? "..." : "Search"}
          </button>
        </section>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {recipeList.length == 0 && <p>There are no recipes to find.</p>}
        {recipeList.map((recipe) => (
          <div
            key={recipe.id}
            className="group flex flex-col bg-white overflow-hidden"
          >
            <div className="relative aspect-square w-full overflow-hidden bg-zinc-100 rounded-lg">
              <Image
                src={recipe.image_url}
                alt={recipe.title}
                fill
                sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>
            <div className="pt-4 flex flex-col flex-1">
              <span className="text-xs uppercase tracking-wider text-zinc-400 font-medium mb-1">
                {recipe.publisher}
              </span>
              <h3 className="text-base font-semibold text-zinc-800 line-clamp-2 leading-snug group-hover:text-zinc-600 transition-colors">
                {recipe.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default RecipesList;
