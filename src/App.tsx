import { RouteObject, useRoutes } from "react-router-dom";
import { Layout } from "./components";
import { Cart, Category, Home } from "./pages";
import { Searcher } from "./pages/Searcher";

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
          path: "category/:key",
          element: <Category />,
        },
        {
          path: "search",
          element: <Searcher />,
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
