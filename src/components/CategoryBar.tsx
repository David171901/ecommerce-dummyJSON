import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetctCategories } from "../features/categorySlice";
import { formatCategoryName } from "../utils/helpers";
import { Link } from "react-router-dom";

export const CategoryBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const dispatch = useAppDispatch();
  const { response } = useAppSelector((state) => state.category);

  useEffect(() => {
    dispatch(fetctCategories());
  }, [dispatch]);

  return (
    <nav className="bg-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {response.slice(0, 8).map((category) => (
                  <Link
                    key={category}
                    to={`category/${category}`}
                    className="px-3 py-2 rounded-md text-sm font-medium text-black hover:text-gray-700 focus:outline-none"
                  >
                    {formatCategoryName(category)}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-black focus:outline-none focus:text-black"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {response.slice(0, 8).map((category) => (
              <Link
                key={category}
                to={`category/${category}`}
                className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-gray-700 focus:outline-none"
              >
                {formatCategoryName(category)}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
