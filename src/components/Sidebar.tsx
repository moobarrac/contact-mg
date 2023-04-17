// Importing required modules and hooks
import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  // Declaring a state variable called isMenuOpen using useState hook and initial value as false
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Defining a function called toggleMenu that updates the isMenuOpen state variable to its opposite value
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Rendering the JSX
  return (
    <div className="bg-gray-800 text-white h-full flex flex-col justify-between md:w-64">
      <div className="p-4">
        <div className="flex justify-between items-center">
          <button
            className="block md:hidden focus:outline-none text-white hover:text-gray-300"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        <ul
          className={`${
            isMenuOpen ? "flex gap-5 flex-col w-48" : "hidden"
          } mt-4 md:block`}
        >
          <h1 className="text-2xl font-bold mb-20">My App</h1>
          <li>
            <Link
              to="/"
              className="block py-2 hover:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard"
              className="block py-2 hover:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              COVID-19 World Stats
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar; // export Sidebar component for use in other parts of the application as default
