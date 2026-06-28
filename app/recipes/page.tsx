import RecipesList from "@/components/RecipesList";
import { ForkifySearchResponse } from "@/types/recipesApi";

const RecipesPage = async () => {
  const data = await fetch(
    "https://forkify-api.jonas.io/api/v2/recipes?search=pizza",
  );
  const response = (await data.json()) as ForkifySearchResponse;

  const recipes = response?.data?.recipes || [];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-12">
      <RecipesList recipes={recipes} />
    </section>
  );
};
export default RecipesPage;
