import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorView from "./views/ErrorView";
import MainLayout from "./layouts/MainLayout";
import Profile from "./views/Profile"
import Main from "./views/Main"
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorView />,
    children: [
      {
        path: "/",
        element: <Main/>,
      },
      {
        path: "restaurant",
        element: <div>Restaurants view</div>,
      },
      {
        path: "recipe",
        element: <div>Recipes view</div>,
      },
      {
        path: "message",
        element: <div>Messages view</div>,
      },
      {
        path: "review",
        element: <div>Reviews view</div>,
      },
      {
        path: "profile",
        element: <Profile user="Usman" username="ytiggiwS" numberPosts={200} />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
