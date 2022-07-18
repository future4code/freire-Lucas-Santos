import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { UrlGetTripDetails, Header } from "../../api/RequestInfos";
import { Grayout, DivFullPage, Div, TextG, TextM, TextP, ButtonFill } from "../../components/GlobalStyledComps";
import { CandidateCard } from "../../components/CandidateCard";

export const TripDetailsPage = () => {
  const { id } = useParams();
  const [trip, setTrip] = useState({});
  const [candidates, setCandidates] = useState([]);
  
  useEffect((e) => {
    const getTrip = async () => {
      await axios.get(UrlGetTripDetails(id), {headers: Header})
      .then(response => {
        setTrip(response.data.trip);
        setCandidates(response.data.trip.candidates);
        console.log(response.data.trip.candidates);
      })
      .catch(error => {
        console.log(error);
      })
    }
    getTrip();
  }, []);

  return (
    <DivFullPage>
      <Grayout/>
      <Div maxW="100%" fw="wrap" fd="row" gap="0.75em" pad="0" >
        <TextG>{trip.name}</TextG>
        <TextM>{trip.description}</TextM>
        <Div fd="row" gap="0em" pad="0.5em">
          <ButtonFill minH="3em" margin="0">
            <TextM>{trip.planet}</TextM>
          </ButtonFill>
          <ButtonFill minH="3em" margin="0 1em">
            <TextM>{trip.durationInDays} dias</TextM>
          </ButtonFill>
          <ButtonFill minH="3em" margin="0">
            <TextM>{trip.date}</TextM>
          </ButtonFill>
        </Div>
        <TextG>PENDENTES</TextG>
        <Div fd="row" fw="wrap" gap="0.5em" pad="0.5em" maxW="100%">
          {candidates.map(candidate => (
            <CandidateCard key={candidate.id} candidate={candidate} />
          ))}       
        </Div>
        <TextG>APROVADOS</TextG>
        <Div fd="row" fw="wrap" gap="0.5em" pad="0.5em" maxW="100%">
          {candidates.map(candidate => (
            <CandidateCard key={candidate.id} candidate={candidate} />
          ))}       
        </Div>
      </Div>
    </DivFullPage>
  );
}