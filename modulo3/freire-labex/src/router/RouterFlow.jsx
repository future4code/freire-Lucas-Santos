import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { ListTripsPage } from "../pages/ListTripsPage";
import { AdminHomePage } from "../pages/AdminHomePage";
import { ErrorPage } from "../pages/ErrorPage";

export const RouterFlow = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="list-trips" element={<ListTripsPage />} />
        <Route path="admin" element={<AdminHomePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}