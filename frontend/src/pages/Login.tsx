import React from "react";

const Login: React.FC = () => {
  // const handleLogin = () => {
  //   window.location.href = "http://localhost:5000/api/auth/google/callback";
  // };

  return (
    // <div>
    //   <h2>Login Page</h2>
    //   <button onClick={handleLogin}>Login with Google</button>
    // </div>
    <div>
      <h1>Login page</h1>
      <a href="/profile"><button>View Dashboard</button></a>
    </div>
  );
};

export default Login;
