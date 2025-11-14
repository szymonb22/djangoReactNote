import React from "react"
import Register from "./pages/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";

function Logout() {
  localStorage.clear();
  return <Navigate to="/login/" />
}

function RegisterAndLogout() {
  localStorage.clear();
  return <Register />
}

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <ProtectedRoute><Home /></ProtectedRoute>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterAndLogout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
