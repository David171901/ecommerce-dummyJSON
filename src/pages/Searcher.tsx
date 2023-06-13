import { Link, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { useEffect } from "react";
import { fetctProductsBySearch } from "../features/productSlice";
import { Article } from "../components";

export const Searcher = () => {
  const location = useLocation();
  console.log("🚀 ~ file: Searcher.tsx:6 ~ Searcher ~ location:", location);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetctProductsBySearch(location.state));
  }, [dispatch]);

  const { responseProductsBySearch, isLoadingProductssBySearch } =
    useAppSelector((state) => state.product);

  if (isLoadingProductssBySearch) {
    return <div>...Loading</div>;
  }

  return (
    <div>
              <div className="py-4 px-6">
        <div className="max-w-7xl mx-auto">
          <ul className="flex items-center space-x-2 text-sm font-medium text-gray-600">
            <li>
              <Link to="/" className="flex items-center">
                Home
              </Link>
            </li>
            <li>
              <svg
                className="h-4 w-4 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </li>
            <li>
              <span className="flex items-center">
                Products
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {responseProductsBySearch.products.map((product) => (
          <Article key={product.id} {...product}></Article>
        ))}
      </div>
    </div>
  );
};
