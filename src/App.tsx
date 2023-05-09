import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";

function App() {
  return (
    <div className="w-full h-full ">
      <Routes>
        <Route element={<Home />} path="/" />
      </Routes>
    </div>
  );
}

export default App;
