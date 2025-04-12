import React from "react";

const Login = () => {
  const handleLogin = () => {
    window.location.href = "http://localhost:5000/api/auth/google/callback";
  };

  return (
    // <div>

    // </div>
    <div>
      <h1>Login page</h1>
      <button onClick={handleLogin}>Login with Google</button>
      <a href="/profile"><button>View Dashboard</button></a>
    </div>
  );
};

export default Login;
