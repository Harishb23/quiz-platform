import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./component/Home";
import Quiz from "./component/Quiz";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Contact from "./component/Contact";
import Feedback from "./component/Feedback";
import Navbar from "./component/Navbar";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/login"
            element={!isAuthenticated ? <Login /> : <Navigate to="/quiz" />}
          />
          <Route
            path="/quiz"
            element={isAuthenticated ? <Quiz /> : <Navigate to="/signup" />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
