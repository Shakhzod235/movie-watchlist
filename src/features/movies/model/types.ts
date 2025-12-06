export type MoviesStatus = 'idle' | 'loading' | 'success' | 'error';

export interface Movie {
  id: number;
  title: string;
  overview: string;
  rating: number;
  releaseDate: string;
  posterUrl: string;
}
