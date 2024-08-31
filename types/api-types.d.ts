interface Recipe {
  id: number;
  title: string;
  image: string;
  imageType: string;
}

interface SearchResponse {
  results: Recipe[];
  offset: number;
  number: number;
  totalResults: number;
}

interface SearchParams {
  query?: string;
  cuisine?: string;
  diet?: string;
  intolerances?: string;
  type?: string;
  maxReadyTime?: number;
}
