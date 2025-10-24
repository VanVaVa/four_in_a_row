import GamePage from "./pages/game/GamePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/main/MainPage";

const router = createBrowserRouter([
  {
    path: "/game",
    element: <GamePage />,
  },
  {
    path: "/",
    element: <MainPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
