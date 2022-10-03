import React, { useState } from "react";
import { Navigate, useNavigate, Route, Routes } from "react-router-dom";
import "./App.css";

import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import Profile from "../Profile/Profile";
import FeedPage from "../Feed/Feed";
import Write from "../Write/Write";
import About from "../../components/About/About";

import userService from "../../utils/userService";

function App() {
  const [user, setUser] = useState(userService.getUser()); 

  const navigate = useNavigate();

  function handleSignUpOrLogin() {
    setUser(userService.getUser()); // getting the user from localstorage decoding the jwt
  }

  function handleLogout() {
    userService.logout();
    setUser(null);
    navigate("/");
  }

  if (user) {
    return (
      <Routes>
        <Route path="/" element={<FeedPage loggedUser={user} handleLogout={handleLogout} />} />
        <Route
          path="/login"
          element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
        />
        <Route
          path="/signup"
          element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />}
        />
        <Route
          path="/:username"
          element={<Profile loggedUser={user} handleLogout={handleLogout} />}
        />
        <Route
          path="/write"
          element={<Write loggedUser={user} handleLogout={handleLogout} />}
        />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route
        path="/login"
        element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
      />
      <Route
        path="/signup"
        element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />}
      />
       <Route
        path="/"
        element={<FeedPage handleLogout={handleLogout} />}
      />
      <Route path="/about" element={<About />} />
      <Route path="/*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
