import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-500 font-semibold"
      : "text-gray-300 hover:text-blue-400";

  return (
    <nav className="sticky top-0 z-50 bg-gray-950/90 backdrop-blur border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <NavLink to="/" className="text-2xl font-bold text-blue-500">
          VideoCreatorsHub
        </NavLink>

        <div className="hidden md:flex gap-8">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>

          <NavLink to="/pricing" className={linkClass}>
            Pricing
          </NavLink>

          <NavLink to="/dashboard" className={linkClass}>
            Dashboard
          </NavLink>

          <NavLink to="/login" className={linkClass}>
            Login
          </NavLink>
        </div>

        <NavLink
          to="/login"
          className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg transition"
        >
          Get Started
        </NavLink>
      </div>
    </nav>
  );
}