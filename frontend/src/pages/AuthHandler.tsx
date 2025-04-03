import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";

const AuthHandler: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Extract token from URL
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      localStorage.setItem("authToken", token); // Store token
      const user = jwtDecode<{ name: string }>(token); // Decode JWT
      console.log("Logged-in User:", user);

      // Remove token from URL by replacing it with /dashboard
      navigate("/dashboard", { replace: true });
    } else {
      navigate("/login"); // If no token, redirect to login
    }
  }, [navigate]);

  return <h2>Logging you in...</h2>;
};

export default AuthHandler;
