export type MoviesStatus = 'idle' | 'loading' | 'success' | 'error';

export interface Movie {
  id: number;
  title: string;
  overview: string;
  rating: number;
  release_date: string;
  poster_path: string;
}
