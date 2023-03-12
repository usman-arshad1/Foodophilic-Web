import "./../styles/login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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

var userCollection;
function Status() {
  const firestore = useFirestore();

  userCollection = collection(firestore, "users");

  return <div></div>;
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
        )
          navi("/");
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
            src="src\assets\Food_Network_logo.svg.png"
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
          There is no love sincerer than the love of food
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
