import "./../styles/login.css";

const LoginPage = () => {
  return (
    <div className="login-page">
        <div className="loginSection">
            <img src = "src\assets\Food_Network_logo.svg.png" className="login-logo"></img>
            <form action="" method="get" className="login">
            <input type="text" placeholder="Username"/>
            <input type="password" name="password" id="password" placeholder="Password"/>
            <div className="login-forgetPassword">Forget Password?</div>
            <button type = "submit" className= "login-btn" >Login</button>
            </form>
            <div className = "login-line" >
            </div>
            <div id= "orText">
             OR 
            </div>
            <form action="" method="get" className="login ">
            <button type = "submit" className="sign-up">
                Sign Up
            </button>
            </form>
            
        </div>
        <div className="login-banner">There is no love 
            sincerer than the 
            love of food
        </div>
    </div>
  )
}

export { LoginPage }