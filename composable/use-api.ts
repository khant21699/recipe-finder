const API_KEY = process.env.SPOONACULAR_API_KEY;

// Function to search recipes with pagination support
export async function searchRecipes(
  params: SearchParams & { page?: number; limit?: number } = {}
): Promise<SearchResponse> {
  const baseUrl = "https://api.spoonacular.com/recipes/complexSearch";

  // Construct the query string
  const queryParams = new URLSearchParams(
    Object.entries({ apiKey: API_KEY, ...params }).reduce(
      (acc, [key, value]) => ({ ...acc, [key]: String(value) }),
      {}
    )
  );

  try {
    const response = await fetch(`${baseUrl}?${queryParams.toString()}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: SearchResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Error searching recipes:", error);
    throw error;
  }
}
