export interface Show {
  genres: string[];
  id: number;
  name: string;
  language: string;
  runtime: number;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  rating: {
    average: number;
  }
}
