import { NavLink, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <header className="flex justify-center gap-16 border-b-gray-300 border-b px-8 py-4">
        <NavLink to="/">Browse films</NavLink>
        <NavLink to="/watchlist">Watchlist</NavLink>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
};
