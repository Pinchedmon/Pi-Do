import React from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthContextProvider } from "./context/AuthContext";
import Preview from "./pages/Preview/index";
import Login from "./pages/Login/index";
import Main from "./pages/Main/index";
import Profile from "./pages/Profile/index";
import Signup from "./pages/Signup/index";

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
            path="/home*"
          />
          <Route element={<Login />} path="/login" />
          <Route element={<Profile />} path="/profile" />
          <Route element={<Signup />} path="/signup" />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
