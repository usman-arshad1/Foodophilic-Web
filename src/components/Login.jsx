import "./../styles/login.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

//firebase
import { getDocs, getFirestore } from "firebase/firestore";
import {
  FirebaseAppProvider,
  FirestoreProvider,
  useFirestoreDocData,
  useFirestore,
  useFirebaseApp,
  useFirestoreCollection,
} from "reactfire";
import { firebaseConfig } from "../../firebaseAPI";
import { collection } from "firebase/firestore";

//user storage

import UserProfile from "./userProfile";


var userCollection;

function Status() {
  const firestore = useFirestore();

  userCollection = collection(firestore, "users");

  return;
}

function Login() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event, navi) => {
    event.preventDefault();
    
    getDocs(userCollection).then((users) => {
      users.forEach((user) => {
        
        if (
          user.data().password == inputs.password &&
          user.data().username == inputs.username
        ){
            UserProfile.setFirstName(user.data().firstName);
            UserProfile.setUsername(user.data().username)
            UserProfile.setUserID(user.id)
            UserProfile.setBio(user.data().bio);
              navi("/main");
        }
        
      });
    });
  };
  const firestoreInstance = getFirestore(useFirebaseApp());
  const navigate = useNavigate();
  return (
    <FirestoreProvider sdk={firestoreInstance}>
      <div className="login-page">
        <div className="loginSection">
          <img
            src="src\assets\logo.png"
            className="login-logo"
          ></img>

          <form
            onSubmit={(event) => {
              handleSubmit(event, navigate);
            }}
            method="get"
            className="login"
          >
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={handleChange}
            />
            <div className="login-forgetPassword">Forget Password?</div>

            <Status />

            <input type="submit" className="login-btn" value="Login" />
          </form>

          <div className="login-line"></div>
          <div id="orText">OR</div>
          <form action="" method="get" className="login ">
            <input type="submit" className="sign-up" value="Sign Up" />
          </form>
        </div>
        <div className="login-banner">
          <img src="src\assets\banner_image.webp" alt="Not found" />
        </div>
      </div>
    </FirestoreProvider>
  );
}

const LoginPage = () => {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Login />
    </FirebaseAppProvider>
  );
};

export { LoginPage };
