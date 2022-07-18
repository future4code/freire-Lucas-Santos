import { useEffect, useState } from "react";
import axios from "axios";
import { UrlGetTrips } from "../../api/RequestInfos";
import { Grayout, DivFullPage, Div } from "../../components/GlobalStyledComps";
import { TripCard } from "../../components/TripCard";

export const AdminHomePage = () => {
  const [trips, setTrips] = useState([]);
  window.localStorage.setItem("privilege", "private");

  useEffect((e) => {
    const getTrips = async () => {
      await axios.get(UrlGetTrips)
      .then(response => {
        setTrips(response.data.trips);
        window.localStorage.setItem("trips", JSON.stringify(response.data.trips));
      })
      .catch(error => {
        console.log(error);
      })
    }
    getTrips();
  }, []);
  
  return (
    <DivFullPage>
      <Grayout/>
      <Div maxW="100%" fw="wrap" fd="row" gap="0.75em" pad="0">
        {trips.map(trip => (
          <TripCard key={trip.id} trip={trip} />
        ))}
      </Div>
    </DivFullPage>
  );
}