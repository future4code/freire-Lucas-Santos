import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import { HomePage } from '../pages/HomePage.jsx';
import { LoginPage } from "../pages/LoginPage";
import { ListPage } from "../pages/ListPage";
import { AdminPage } from "../pages/AdminPage";
import { FormNewTripPage } from "../pages/FormNewTripPage";
import { WhoWeAre } from "../pages/WhoWeAre.jsx";
import { ErrorPage } from "../pages/ErrorPage";
import { Header } from "../components/Header.jsx";

export const RouterFlow = () => {
  return (
    <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/new-trip" element={<FormNewTripPage />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}