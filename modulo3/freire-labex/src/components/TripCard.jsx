import styled from "styled-components"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { Div, TextM, TextP, ButtonFill } from "./GlobalStyledComps"
import { goToApplyTrip, goToTripDetails } from "../routers/RouterFlow"
import { FaRocket, FaTrashAlt } from "react-icons/fa"
import { UrlDeleteTrip, Header } from "../api/RequestInfos"

const Img = styled.img`
  z-index: 0;
  width: ${props => props.w || "100%"};
  height: ${props => props.h || "100%"};
  opacity: 1;
`
const BuyButton = styled.button`
  z-index: 1;
  position: absolute;
  display: flex;
  margin: 1em 1em 0 0;
  padding: 1em;
  background-color: var(--color-1b);
  border: none;
  border-radius: var(--radius);
  transition: var(--transition-fast);
  &:hover {
    background-color: var(--color-1a);
    border-color: var(--color-1a);
    box-shadow: var(--shadow);
  }
`
export const TripCard = ({trip}) => {
  const navigate = useNavigate()

  const privilege = window.localStorage.getItem("privilege")

  const handleTripDelete = () => {
    window.localStorage.setItem("tripId", trip.id)
    if (window.confirm("Você realmente deseja deletar esta viagem?")) {
      axios.delete(UrlDeleteTrip, {headers: Header})
      .then(response => {
        alert("Viagem deletada com sucesso!")
      })
      .catch(error => {
        alert(error.response.data.message)
      })
    }
  }      

  return (
    privilege === "public" && (
      <Div ai="flex-end" jc="flex-start" maxW="20em" pad="0 0 0.25em 0" bg="var(--color-2b)" bs="var(--shadow)">
        <BuyButton onClick={() => goToApplyTrip(navigate, trip.id)}>
          <FaRocket size="min(6vw, 2rem)" color="var(--color-w)"/>
        </BuyButton>
        
        <Img src="https://source.unsplash.com/400x200/?planets" alt="Imagem do universo"/>
        
        <Div pad="0.5em 0 0.25em 0">
          <TextM>{trip.name}</TextM>
        </Div>
        
        <Div fd="row" gap="0em" pad="0.5em">
          <ButtonFill minH="3em" margin="0">
            <TextP>{trip.planet}</TextP>
          </ButtonFill>
          <ButtonFill minH="3em" margin="0 1em">
            <TextP>{trip.durationInDays} dias</TextP>
          </ButtonFill>
          <ButtonFill minH="3em" margin="0">
            <TextP>{trip.date}</TextP>
          </ButtonFill>
        </Div>
      </Div>
    ) || (    
      <Div maxW="24em" fd="row" gap="0.25em" pad="0" bg="var(--color-2a)">
        <Div maxW="12em" pad="0" br="var(--radius) 0 0 var(--radius)">
          <Img h="100%" src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt=""/>
        </Div>
        <Div pad="0 0.15em">
          <TextM pad="0.15em 0.25em" minH="3em">{trip.name}</TextM>
          <Div fd="row" gap="0.25em" pad="0.25em">
            <ButtonFill minH="2.75em" margin="0" bsH="0 0 0.25em rgba(0,0,0,0.75)" onClick={() => goToTripDetails(navigate, trip.id)}>
              <TextP>DETALHES</TextP>
            </ButtonFill>
            <ButtonFill w="fit-content" minH="2.75em" margin="0" bg="var(--color-no)" bgH="var(--color-noH)" bsH="0 0 0.25em rgba(0,0,0,0.75)" onClick={() => handleTripDelete()}>
              <FaTrashAlt size="min(4vw, 1.25rem)"/>
            </ButtonFill>
          </Div>
        </Div>
      </Div>
    )
  )
}