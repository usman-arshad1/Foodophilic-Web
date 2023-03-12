import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { FirebaseAppProvider } from "reactfire";
import { firebaseConfig } from "../firebaseAPI";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
<<<<<<< HEAD
    <App />
    <EditProfile />
    <CreatePost />

  </React.StrictMode>,
)
=======
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <App />
    </FirebaseAppProvider>
  </React.StrictMode>
);
>>>>>>> e64094c0cc09ee286cf18db3827e3cc487f0249d
