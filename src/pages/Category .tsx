import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { Article } from "../components";
import { fetchProductsByCategory } from "../features/productSlice";
import { Link, useParams } from "react-router-dom";
import { formatCategoryName } from "../utils/helpers";

export const Category = () => {
  const { key } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductsByCategory(key!));
  }, [dispatch, key]);

  const { responseProductsByCategory, isLoadingProductsByCategory } =
    useAppSelector((state) => state.product);

  if (isLoadingProductsByCategory) {
    return "loading...";
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
                Category
              </span>
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
              <span className="text-gray-800">{formatCategoryName(key!)}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {responseProductsByCategory.products.map((product) => (
          <Article key={product.id} {...product}></Article>
        ))}
      </div>
    </div>
  );
};
