import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const linkClass = (path: string) =>
    `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
      location.pathname === path
        ? "bg-white/20 text-white"
        : "text-white/70 hover:text-white hover:bg-white/10"
    }`;

  return (
    <nav className="bg-primary px-6 py-3 flex items-center justify-between">
      <Link to="/" className="text-white text-xl font-bold tracking-tight no-underline">
        Meeter
      </Link>
      <div className="flex gap-1">
        <Link to="/" className={`${linkClass("/")} no-underline`}>Home</Link>
        <Link to="/calculator" className={`${linkClass("/calculator")} no-underline`}>Calculator</Link>
        <Link to="/dashboard" className={`${linkClass("/dashboard")} no-underline`}>Dashboard</Link>
      </div>
    </nav>
  );
}
