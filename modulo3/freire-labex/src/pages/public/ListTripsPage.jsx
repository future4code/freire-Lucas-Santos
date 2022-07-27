import { useState, useEffect } from "react"
import axios from "axios";
import { UrlGetTrips } from "../../api/RequestInfos";
import { ContextButton, Grayout, DivFullPage, Div, TextM } from "../../components/GlobalStyledComps"
import { TripCard } from "../../components/TripCard"
import { Loading } from "../../components/Loading"
import { FaAngleLeft } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

export const ListTripsPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [trips, setTrips] = useState([]);
  window.localStorage.setItem("privilege", "public");

  useEffect((e) => {
    const getTrips = async () => {
      setLoading(true);
      await axios.get(UrlGetTrips)
      .then(response => {
        setTrips(response.data.trips);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch(error => {
        getTrips();
      })
    }
    getTrips();
  }, []);

  return (
    <DivFullPage jc="flex-start" minH="100%">
      <Grayout/>
      <Div maxW="100%" fw="wrap" fd="row" gap="0.75em" pad="0">
        {trips.map(trip => (
          <TripCard key={trip.id} trip={trip} />
        ))}
      </Div>
      {loading && <Loading />}
      <ContextButton onClick={() => navigate(-1)}>
        <FaAngleLeft size="2.5em"/>
      </ContextButton>
    </DivFullPage>
  )
}