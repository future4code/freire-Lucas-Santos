import styled from "styled-components"
import { Div, TextM, TextP, ButtonFill } from "./GlobalStyledComps"

const Img = styled.img`
  z-index: 0;
  width: 100%;
  margin-bottom: 0.5em;
  opacity: 1;
`
export const TripCard = ({trip}) => {
  return (
    <Div maxW="20em" pad="0 0 0.25em 0" bg="var(--color-2b)" bs="var(--shadow)">
      <Img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt=""/>
      <Div pad="0.75em">
        <TextM>{trip.name}</TextM>
      </Div>
      <Div fd="row" gap="0em" pad="0.5em">
        <ButtonFill minH="4em" margin="0">
          <TextP>{trip.planet}</TextP>
        </ButtonFill>
        <ButtonFill minH="4em" margin="0 1em">
          <TextP>{trip.durationInDays} dias</TextP>
        </ButtonFill>
        <ButtonFill minH="4em" margin="0">
          <TextP>{trip.date}</TextP>
        </ButtonFill>
      </Div>
    </Div>
  )
}