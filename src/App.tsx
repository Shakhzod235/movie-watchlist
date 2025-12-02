import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'; 
import { NotFound } from './components/NotFound';
import { BrowseMovies } from './components/BrowseMovies';
import { MovieWatchlist } from './components/MovieWatchlist';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<BrowseMovies />} />
          <Route path="watchlist" element={<MovieWatchlist />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
