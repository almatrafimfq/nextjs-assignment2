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
