import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Preview from "./pages/Preview";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { AuthContextProvider } from "./context/AuthContext";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="w-full h-full ">
      <AuthContextProvider>
        <Routes>
          <Route element={<Preview />} path="/" />
          <Route
            element={
              <ProtectedRoute>
                <Main />
              </ProtectedRoute>
            }
            path="/home"
          />
          <Route element={<Login />} path="/login" />
          <Route element={<Profile />} path="/login" />
          <Route element={<Signup />} path="/signup" />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
