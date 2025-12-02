import { NavLink, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <header className="flex justify-center gap-16 border-b-gray-300 border-b px-8 py-4">
        <NavLink to="/" className="hover:border-b-2 hover:border-neutral-500">Browse films</NavLink>
        <NavLink to="/watchlist" className="hover:border-b-2 hover:border-neutral-500">Watchlist</NavLink>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
};
