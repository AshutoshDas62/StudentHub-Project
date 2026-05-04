import { useEffect, useState } from "react";
import { Sun, Moon, Menu } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {

  const [dark, setDark] = useState(false);

  // Load saved theme
 useEffect(() => {
  const saved = localStorage.getItem("theme") === "dark";
  setDark(saved);
  }, []);

  // Toggle theme
  const toggleTheme = () => {
  const html = document.documentElement;
  const newTheme = !dark;

  setDark(newTheme);

  if (newTheme) {
    html.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    html.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
};

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-100 dark:border-gray-800 sticky top-0 z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            StudentHub
          </Link>

          {/* Menu */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="nav-link">Features</a>
            <a href="#" className="nav-link">Pricing</a>
            <a href="#" className="nav-link">Resources</a>
            <a href="#" className="nav-link">Contact</a>
          </nav>

          {/* Right */}
          <div className="flex items-center space-x-4">

            {/* ✅ FIXED THEME BUTTON */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              {dark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>

            <Link
              to="/login"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
            >
              Get Started
            </Link>

            <Menu className="md:hidden h-6 w-6 text-gray-600 dark:text-gray-300" />
          </div>
        </div>
      </div>
    </header>
  );
}