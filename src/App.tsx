import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { fetchProductsByCategory, fetctProducts } from "./features/productSlice";
import { fetctCategories } from "./features/categorySlice";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductsByCategory('smartphones'));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetctCategories());
  }, [dispatch])
  

  const {responseProductsByCategory, isLoadingProductsByCategory} = useAppSelector((state) => state.product);
  const {response} = useAppSelector((state) => state.category);

  if (isLoadingProductsByCategory) {
    return "loading...";
  }

  return (
    <div>
      {
        response.map(category => (
          <p key={category}>{category}</p>
        ))
      }
      {responseProductsByCategory.products.map((product) => (
        <div key={product.id}>
          <p>{product.title}</p>
          <img src={`${product.images[0]}`}></img>
          <p>USD {product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
