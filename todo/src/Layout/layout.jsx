// Layout.jsx
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header style={{ padding: "20px", background: "#222", color: "#fff" }}>
        <nav style={{ display: "flex", gap: "20px" }}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <main style={{ padding: "40px", minHeight: "70vh" }}>
        <Outlet />
      </main>

      <footer style={{ padding: "20px", background: "#222", color: "#fff" }}>
        Footer Content
      </footer>
    </>
  );
}


