import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import AuthHandler from "./pages/AuthHandler";
import Profile from "./pages/Profile/Profile";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/auth/google/callback" element={<AuthHandler />} />
        <Route path="/dashboard" element={<h2>Welcome to Dashboard</h2>} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
