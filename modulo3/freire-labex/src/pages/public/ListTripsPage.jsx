import { useState, useEffect } from "react"
import axios from "axios";
import { UrlGetTrips } from "../../api/RequestInfos";
import { Grayout, DivFullPage, Div, TextM } from "../../components/GlobalStyledComps"
import { TripCard } from "../../components/TripCard"
import { Loading } from "../../components/Loading"

export const ListTripsPage = () => {
  const [loading, setLoading] = useState(false);
  const [trips, setTrips] = useState([]);
  window.localStorage.setItem("privilege", "public");

  useEffect((e) => {
    const getTrips = async () => {
      setLoading(true);
      await axios.get(UrlGetTrips)
      .then(response => {
        setTrips(response.data.trips);
        setLoading(false);
      })
      .catch(error => {
        getTrips();
      })
    }
    getTrips();
  }, []);

  return (
    <DivFullPage pad="2em 0.5em">
      <Grayout/>
      <Div maxW="100%" fw="wrap" fd="row" gap="0.75em" pad="0">
        {trips.map(trip => (
          <TripCard key={trip.id} trip={trip} />
        ))}
      </Div>
      {loading && <Loading />}
    </DivFullPage>
  )
}