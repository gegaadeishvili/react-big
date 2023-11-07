import React from "react";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Enter } from "./components/Enter";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Enter" element={<Enter />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
