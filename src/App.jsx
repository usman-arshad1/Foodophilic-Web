import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorView from "./views/ErrorView";
import MainLayout from "./layouts/MainLayout";
import Profile from "./views/Profile";
import Main from "./views/Main";
import "./App.css";
import { Login } from "@mui/icons-material";
import { LoginPage } from "./components/login";


//firebase
import { getDocs, getFirestore, collection } from "firebase/firestore";
import {
  FirebaseAppProvider,
  FirestoreProvider,
  useFirestoreDocData,
  useFirestore,
  useFirebaseApp,
  useFirestoreCollection,
} from "reactfire";

import { firebaseConfig } from "../firebaseAPI";

var userCollection;
var postCollection;
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

function Status() {
  const firestore = useFirestore();

  userCollection = collection(firestore, "users");
  // getDocs(userCollection).then((users) => {
  //   users.forEach((user) => {
  //     console.log("user", user.data());
  //   });
  // });

  // postCollection = collection(firestore, "posts");
  // // use for posts
  // getDocs(postCollection).then((posts) => {
  //   posts.forEach((post) => {
  //     console.log("post", post.data());
  //   });
  // });
  //till here
  return;
}

function ConnectToDB() {
  const firestoreInstance = getFirestore(useFirebaseApp());
  return (
    <FirestoreProvider sdk={firestoreInstance}>
      {/* <Status /> */}
    </FirestoreProvider>
  );
}

function App() {
  return (
    <div className="App">
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <ConnectToDB />
        <RouterProvider router={router} />
      </FirebaseAppProvider>
    </div>
  );
}

export default App;
