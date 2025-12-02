import { Layout } from "../../layouts/Layout";
import { BrowseMovies } from "../../pages/BrowseMovies";
import { MovieWatchlist } from "../../pages/MovieWatchlist";
import { NotFound } from "../../pages/NotFound";

export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <BrowseMovies /> },
      { path: "watchlist", element: <MovieWatchlist /> },
      { path: "*", element: <NotFound /> }
    ]
  }
]
