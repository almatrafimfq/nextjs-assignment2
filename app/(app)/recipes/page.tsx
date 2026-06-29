import RecipesList from "@/components/RecipesList";
import { redirect } from "next/navigation";

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const RecipesPage = async ({ searchParams }: PageProps) => {
  const { search } = await searchParams;

  if (!search) redirect(`/recipes?search=pizza`);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-12">
      <RecipesList />
    </section>
  );
};
export default RecipesPage;
