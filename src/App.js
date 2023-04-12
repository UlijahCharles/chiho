import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./Pages/Landing";
import MainPage from "./Pages/MainPage";
import About from "./Pages/About";
import ItemPage from "./Pages/ItemPage";
import MenuPage from "./Pages/MenuPage";
import RootLayout from "./Pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "home", element: <MainPage /> },
      { path: "about", element: <About /> },
      { path: "item", element: <ItemPage /> },
      { path: "menu", element: <MenuPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
