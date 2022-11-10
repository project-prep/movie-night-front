import React from "react";
import '../Login.css';
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <>

      <div className="login-div">
        <h1 className='welcome'>Welcome to Movie Night</h1>
        <button className="login-btn" onClick={() => loginWithRedirect()}>Log In</button>
      </div>
      <div className="login-description">
        <p> Movie night is a web application that allows users to search movies and their streaming information. It saves time and makes it easier for date night choices.</p>

        <p> It also lets the user keep track of their favorite lists or move movies into the watch list. With over 200 streaming services in the US, Movie Night will save you time. Come and check out our website. </p>

      </div>

    </>
  );
};

export default Login;
