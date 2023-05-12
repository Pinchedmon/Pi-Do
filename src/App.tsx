import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Home from "./pages/Home";

function App() {
  return (
    <div className="w-full h-full ">
      <Routes>
        <Route element={<Home />} path="/start" />
        <Route element={<Main />} path="/" />
      </Routes>
    </div>
  );
}

export default App;
