import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import { HomePage } from '../pages/HomePage.jsx';
import { LoginPage } from "../pages/LoginPage";
import { ListTripPage } from "../pages/ListTripPage";
import { AdminHomePage } from "../pages/AdminHomePage";
import { ApplicationFormPage } from "../pages/ApplicationFormPage";
import { TripDetailsPage } from "../pages/TripDetailsPage";
import { CreateTripPage } from "../pages/CreateTripPage";
import { WhoWeAre } from "../pages/WhoWeAre.jsx";
import { ErrorPage } from "../pages/ErrorPage";
//Components
import { Header } from "../components/Header.jsx";
//Apagar depois
import { useEffect, useState } from "react";

export const RouterFlow = () => {
  const [ScreenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
        setScreenWidth(window.innerWidth);        }
    , false);
  } , []);
  return (
    <BrowserRouter>
      <Header />      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/list" element={<ListTripPage />} />
        <Route path="/admin" element={<AdminHomePage />} />
        <Route path="/new-trip" element={<ApplicationFormPage />} />
        <Route path="/trip-details" element={<TripDetailsPage />} />
        <Route path="/create-trip" element={<CreateTripPage />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <h3 style={{position:"fixed",bottom:0,left:128,}}>{ScreenWidth}</h3>
    </BrowserRouter>
  )
}

export const goTo = (navigate, path) => {
  navigate(path);
}