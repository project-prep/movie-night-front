import React from "react";
import '../Login.css';
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <>

      <div className="login-div">
        <h1>Welcome to Movie Night</h1>
        <button onClick={() => loginWithRedirect()}>Log In</button>
      </div>
      <div>
        
      </div>
      
    </>
  );
};

export default Login;
