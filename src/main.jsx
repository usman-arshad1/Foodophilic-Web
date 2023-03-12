import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { FirebaseAppProvider } from "reactfire";
import { firebaseConfig } from "../firebaseAPI";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <App />
    </FirebaseAppProvider>
  </React.StrictMode>
);
