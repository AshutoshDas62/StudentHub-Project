import { useEffect } from "react";
import { Sun, Moon, Menu } from "lucide-react";

export default function Navbar() {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-100 dark:border-gray-800 sticky top-0 z-50">
      <div className="max-w-9xl mx-0 px-0 sm:px-0 lg:px-8">
        <div className="flex justify-between items-center h-10">
          
          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            StudentHub
          </h2>

          <nav className="hidden md:flex space-x-8">
            {["Features", "Pricing", "Resources", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-medium transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Sun className="h-5 w-5 hidden dark:block" />
              <Moon className="h-5 w-5 dark:hidden" />
            </button>

            <a className="text-sm text-gray-600 dark:text-gray-300">Sign In</a>
            <a className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
              Get Started
            </a>

            <Menu className="md:hidden h-6 w-6 text-gray-600 dark:text-gray-300" />
          </div>
        </div>
      </div>
    </header>
  );
}
