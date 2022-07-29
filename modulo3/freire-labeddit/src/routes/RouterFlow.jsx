import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { LoginPage } from "../pages/LoginPage";
import { PostPage } from "../pages/PostPage";
import { SignupPage } from "../pages/SignupPage";

export const RouterFlow = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/post/:id" element={<PostPage />} /> 
      </Routes>
    </BrowserRouter>
  )
}