import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";

export const RouterFlow = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}