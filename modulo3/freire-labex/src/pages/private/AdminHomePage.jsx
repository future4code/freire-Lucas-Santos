import { useEffect, useState } from "react";
import axios from "axios";
import { UrlGetTrips } from "../../api/RequestInfos";
import { Grayout, DivFullPage, Div } from "../../components/GlobalStyledComps";
import { TripCard } from "../../components/TripCard";
import { Header } from "../../components/Header";
import { Loading } from "../../components/Loading";
import { useNavigate } from "react-router-dom";
import { goToLogin } from "../../routers/RouterFlow";

export const AdminHomePage = () => {
  const navigate = useNavigate();
  const [trips, setTrips] = useState([]);
  const [showPage, setShowPage] = useState(false);
  window.localStorage.setItem("privilege", "private");

  useEffect((e) => {
    const getTrips = async () => {
      await axios.get(UrlGetTrips)
      .then(response => {
        setTrips(response.data.trips);
        setShowPage(true);
      })
      .catch(error => {
        getTrips();
      })
    } 
    
    window.localStorage.getItem("token") === null ? goToLogin(navigate) : getTrips();
  }, []);
  
  return (
    showPage ? (
      <DivFullPage>
        <Header />
        <Grayout/>
        <Div maxW="100%" fw="wrap" fd="row" gap="0.75em" pad="0">
          {trips.map(trip => (
            <TripCard key={trip.id} trip={trip} />
          ))}
        </Div>
      </DivFullPage>
    ) : (
      <Loading />
    )
  );
}