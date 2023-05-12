import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Main from "./pages/Main";

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
