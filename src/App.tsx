import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Preview from "./pages/Preview";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="w-full h-full ">
      <Routes>
        <Route element={<Preview />} path="/" />
        <Route
          element={
            // <ProtectedRoute>
            <Main />
            //</ProtectedRoute>
          }
          path="/home"
        />
        <Route element={<Login />} path="/login" />
        <Route element={<Signup />} path="/signup" />
      </Routes>
    </div>
  );
}

export default App;
