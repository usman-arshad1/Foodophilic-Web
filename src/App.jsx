import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage } from "./components/login";
import { getFirestore } from "firebase/firestore";
import { FirestoreProvider, useFirebaseApp } from "reactfire";

import ErrorView from "./views/ErrorView";
import MainLayout from "./layouts/MainLayout";
import Profile from "./views/Profile";
import Main from "./views/Main";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorView />,
    children: [
      {
        path: "/",
        element: <Main />,
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
  const firestoreInstance = getFirestore(useFirebaseApp());

  return (
    <div className="App">
      <FirestoreProvider sdk={firestoreInstance}>
        <RouterProvider router={router} />
      </FirestoreProvider>
    </div>
  );
}

export default App;
