import { useEffect } from "react";
import { fetchProductsByCategory, fetctProducts } from "../features/productSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetctCategories } from "../features/categorySlice";
import { Article } from "../components";

export const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetctProducts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetctCategories());
  }, [dispatch]);

  const { responseProducts, isLoadingProducts } =
    useAppSelector((state) => state.product);
  const { response } = useAppSelector((state) => state.category);

  if (isLoadingProducts) {
    return "loading...";
  }

  return (
    <div>
      {/* {
        response.map(category => (
          <p key={category}>{category}</p>
        ))
      } */}
      <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {responseProducts.products.map((product) => (
          <Article key={product.id} {...product}></Article>
        ))}
      </div>
    </div>
  );
};
