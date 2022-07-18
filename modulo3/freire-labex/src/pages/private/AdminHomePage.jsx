import { useEffect, useState } from "react";
import axios from "axios";
import { UrlGetTrips } from "../../api/RequestInfos";
import { ContextButton, Grayout, DivFullPage, Div, TextG } from "../../components/GlobalStyledComps";
import { TripCard } from "../../components/TripCard";
import { Loading } from "../../components/Loading";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { goToLogin, goToCreateTrip } from "../../routers/RouterFlow";

export const AdminHomePage = () => {
  const navigate = useNavigate();
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(false);
  window.localStorage.setItem("privilege", "private");

  useEffect((e) => {
    const getTrips = async () => {
      setLoading(true);
      await axios.get(UrlGetTrips)
      .then(response => {
        setTrips(response.data.trips);
        setTimeout(() => {
          setLoading(false);
        }, 1500);
      })
      .catch(error => {
        getTrips();
      })
    } 
    
    window.localStorage.getItem("token") === null ? goToLogin(navigate) : getTrips();
    window.localStorage.removeItem("page")
  }, []);
  
  return (
    <DivFullPage jc="flex-start" pad="5em 0.5em 2em 0.5em" minH="100%">
      <Grayout/>
      <Div maxW="100%" fw="wrap" fd="row" gap="0.75em" pad="0">
        {trips.map(trip => (
          <TripCard key={trip.id} trip={trip} />
        ))}
      </Div>
      {loading && <Loading />}
      <ContextButton onClick={() => goToCreateTrip(navigate)}>
        <FaPlus size="2em" />
      </ContextButton>
    </DivFullPage>
  );
}