import { RouteObject, useRoutes } from "react-router-dom";
import { Layout } from "./components";
import { Cart, Category, Home } from "./pages";

function App() {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
          index: true,
        },
        {
          path: "category/:id",
          element: <Category />,
        },
      ],
    },
    {
      path: "/cart",
      element: <Cart />,
    },
  ];

  const element = useRoutes(routes);

  return <div>{element}</div>;
}

export default App;
