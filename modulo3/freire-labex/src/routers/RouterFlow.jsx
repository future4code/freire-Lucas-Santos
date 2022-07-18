import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../components/Header";
import { HomePage } from "../pages/public/HomePage";
import { LoginPage } from "../pages/public/LoginPage";
import { ListTripsPage } from "../pages/public/ListTripsPage";
import { ApplyTripPage } from "../pages/public/ApplyTripPage";
import { AdminHomePage } from "../pages/private/AdminHomePage";
import { TripDetailsPage } from "../pages/private/TripDetailsPage";
import { CreateTripPage } from "../pages/private/CreateTripPage";
import { ErrorPage } from "../pages/public/ErrorPage";

export const RouterFlow = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="list-trips" element={<ListTripsPage />} />
        <Route path="list-trips/apply-trip/:id" element={<ApplyTripPage />} />
        <Route path="admin" element={<AdminHomePage />} />
        <Route path="admin/trip-details/:id" element={<TripDetailsPage />} />
        <Route path="admin/create-trip" element={<CreateTripPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export const goToHome = (navigate) => navigate("/")
export const goToLogin = (navigate) => navigate("/login")
export const goToListTrips = (navigate) => navigate("/list-trips")
export const goToApplyTrip = (navigate, id) => navigate(`/list-trips/apply-trip/${id}`)
export const goToAdmin = (navigate) => navigate("/admin")
export const goToTripDetails = (navigate, id) => navigate(`/admin/trip-details/${id}`)
export const goToCreateTrip = (navigate) => navigate("/admin/create-trip")
export const goToError = (navigate) => navigate("/error")