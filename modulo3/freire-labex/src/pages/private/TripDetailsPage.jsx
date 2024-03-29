import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { UrlGetTripDetails, Header } from "../../api/RequestInfos";
import { ContextButton, Grayout, DivFullPage, Div, TextG, TextM, TextP, ButtonFill, Br } from "../../components/GlobalStyledComps";
import { CandidateCard } from "../../components/CandidateCard";
import { ApprovedCard } from "../../components/ApprovedCard";
import { Loading } from "../../components/Loading";
import { useNavigate } from "react-router-dom";
import { goToLogin } from "../../routers/RouterFlow";
import { FaAngleLeft } from "react-icons/fa";


export const TripDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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
        window.location.reload();
      })
    }
    
    window.localStorage.getItem("token") === null ? goToLogin(navigate) : getTrip();
  }, []);

  return (
    showPage ? (
      <DivFullPage>
        <Grayout/>
        <Div maxW="72em" fw="wrap" fd="row" gap="0.75em" pad="0 0 1em 0" bg="var(--color-2a)">
          <TextG minH="2em" pad="0.5em 0.25em" bg="var(--color-1b)">{trip.name}</TextG>
          <TextM pad="0 0.5em">{trip.description}</TextM>
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

          <TextG minH="1.5em" pad="0.5em 0.25em" bg="var(--color-2b)">PENDENTES</TextG>
          {trip.candidates !== undefined && trip.candidates.length > 0 ? 
            <Div fd="row" fw="wrap" gap="0.5em" pad="0.5em" maxW="100%">
              {trip.candidates.map(candidate => (
                <CandidateCard key={candidate.id} candidate={candidate} />
              ))}       
            </Div>
          :
            <TextP pad="0 0 1em 0">Nenhum candidato pendente</TextP>
          }
          <TextG minH="1.5em" pad="0.5em 0.25em" bg="var(--color-2b)">APROVADOS</TextG>
          {trip.approved !== undefined && trip.approved.length > 0 ?
            <Div fd="row" fw="wrap" gap="0.5em" pad="0.5em" maxW="100%">
              {trip.approved.map(candidate => (
                <ApprovedCard key={candidate.id} candidate={candidate} />
              ))}       
            </Div>
          :
            <TextP>Nenhum candidato aprovado</TextP>
          }
        </Div>
        <ContextButton onClick={() => navigate(-1)}>
          <FaAngleLeft size="2.5em"/>
        </ContextButton>
      </DivFullPage>
    ) : (
      <Loading />
    )
  );
}