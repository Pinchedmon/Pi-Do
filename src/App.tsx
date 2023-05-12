import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Preview from "./pages/Preview";

function App() {
  return (
    <div className="w-full h-full ">
      <Routes>
        <Route element={<Preview />} path="/start" />
        <Route element={<Main />} path="/" />
      </Routes>
    </div>
  );
}

export default App;
