import { useEffect } from "react";
import { fetctProducts } from "../features/productSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { Article } from "../components";
import { Hero } from "../components/Hero";

export const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetctProducts());
  }, [dispatch]);

  const { responseProducts, isLoadingProducts } = useAppSelector(
    (state) => state.product
  );

  if (isLoadingProducts) {
    return (
      <div>
        <Hero></Hero>
        ...Loading
      </div>
    );
  }

  return (
    <div>
      <Hero></Hero>
      <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {responseProducts.products.map((product) => (
          <Article key={product.id} {...product}></Article>
        ))}
      </div>
    </div>
  );
};
