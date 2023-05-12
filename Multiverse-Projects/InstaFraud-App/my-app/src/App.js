import React from "react";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import DashboardPage from "./Pages/Dashboard/DashboardPage";
import Profile from "./Pages/Profile/ProfilePage";
import Users from "./Pages/Users/Users";
import UnAuthorized from './Components/UnAuthorized/UnAuthorized'
import LoginPage from "./Pages/LoginPage/LoginPage";
import SignUpPage from "./Pages/SignUpPage/SignUpPage";
import SuccessPage from "./Pages/SuccessPage/SuccessPage";


function App() {
  return (
    <Router>
      <Routes>
        {/* public routes  */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/unauthorized" element={<UnAuthorized />} />
        {/* protected routes  */}
        <Route element={<RequireAuth roles={"user"} />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route element={<RequireAuth roles={"admin"} />}>
          <Route path="/users" element={<Users />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
