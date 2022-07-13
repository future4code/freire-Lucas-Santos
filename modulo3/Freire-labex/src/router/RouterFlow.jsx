import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import { HomePage } from '../pages/HomePage.jsx';
import { LoginPage } from "../pages/LoginPage";
import { ListPage } from "../pages/ListPage";
import { AdminPage } from "../pages/AdminPage";
import { FormNewTripPage } from "../pages/FormNewTripPage";
import { ErrorPage } from "../pages/ErrorPage";

export const RouterFlow = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/new-trip" element={<FormNewTripPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}