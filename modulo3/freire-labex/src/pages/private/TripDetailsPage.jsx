import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { UrlGetTripDetails, Header } from "../../api/RequestInfos";
import { Grayout, DivFullPage, Div, TextG, TextM, ButtonFill } from "../../components/GlobalStyledComps";
import { CandidateCard } from "../../components/CandidateCard";
import { ApprovedCard } from "../../components/ApprovedCard";
import { Loading } from "../../components/Loading";

export const TripDetailsPage = () => {
  const { id } = useParams();
  const [trip, setTrip] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPage, setShowPage] = useState(false);
  
  useEffect((e) => {
    const getTrip = async () => {
      setLoading(true);
      await axios.get(UrlGetTripDetails(id), {headers: Header})
      .then(response => {
        setTrip(response.data.trip);
        setLoading(false);
        setShowPage(true);
      })
      .catch(error => {
        console.log(error);
      })
    }
    getTrip();
  }, []);

  return (
    showPage ? (
      <DivFullPage pad="2em">
        <Grayout/>
        <Div maxW="100%" fw="wrap" fd="row" gap="0.75em" pad="0 0 2em 0" bg="var(--color-2a)">
          <TextG minH="2em" bg="var(--color-2b)">{trip.name}</TextG>
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
          {trip.candidates !== undefined ?
            <Div fd="row" fw="wrap" gap="0.5em" pad="0.5em" maxW="100%">
              {trip.candidates.map(candidate => (
                <CandidateCard key={candidate.id} candidate={candidate} />
              ))}       
            </Div>
          :
            <TextM>Nenhum candidato pendente</TextM>
          }

          <TextG>APROVADOS</TextG>
          {trip.approved !== undefined ?
            <Div fd="row" fw="wrap" gap="0.5em" pad="0.5em" maxW="100%">
              {trip.approved.map(candidate => (
                <ApprovedCard key={candidate.id} candidate={candidate} />
              ))}       
            </Div>
          :
            <TextM>Nenhum candidato aprovado</TextM>
          }
        </Div>
      </DivFullPage>
    ) : (
      <Loading />
    )
  );
}