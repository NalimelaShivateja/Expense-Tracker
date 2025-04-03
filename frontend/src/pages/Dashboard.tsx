import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";

interface User {
  name: string;
  email: string;
}

const Dashboard: React.FC = () => {
  // const navigate = useNavigate();
  // const [user, setUser] = useState<User | null>(null);

  // useEffect(() => {
  //   const token = localStorage.getItem("authToken");

  //   if (!token) {
  //     navigate("/login"); // Redirect to login if no token found
  //   } else {
  //     const decodedUser = jwtDecode<User>(token);
  //     setUser(decodedUser);
  //   }
  // }, [navigate]);

  return (
    <div>
      <h2>Welcome to Dashboard</h2>
      <a href="/profile">View your profile</a>
    </div>
  );
};

export default Dashboard;
