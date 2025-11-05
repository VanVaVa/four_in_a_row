import GamePage from "./pages/game/GamePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/main/MainPage";
import Leaderboard from "./pages/leaderboard/Leaderboard";

const router = createBrowserRouter([
  {
    path: "/game",
    element: <GamePage />,
  },
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/leaderboard",
    element: <Leaderboard />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
