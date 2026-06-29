export interface RecipeSearchResult {
  id: string;
  title: string;
  publisher: string;
  image_url: string;
}

export interface ForkifySearchResponse {
  status: string;
  results: number;
  data: {
    recipes: RecipeSearchResult[];
  };
}

interface RecipeIngredient {
  quantity: number;
  unit: string;
  description: string;
}

export interface RecipeDetailsResult {
  status: string;
  data: {
    recipe: {
      publisher: string;
      ingredients: RecipeIngredient[];
      source_url: string;
      image_url: string;
      title: string;
      servings: number;
      cooking_time: number;
      id: string;
    };
  };
}
