import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import { DivFullPage, Div, ButtonLine, TextM, TextG } from "../../components/GlobalStyledComps";
import { goToLogin, goToListTrips } from "../../routers/RouterFlow";

const Title1 = styled.b`
  font-size: min(8.95vw, 3.25rem);
  line-height: min(12vw, 4.5rem);
  text-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.75);
`
const Title2 = styled.b`
  font-size: min(16vw, 5.8rem);
  line-height: min(12vw, 4rem);
  color: transparent;
  -webkit-text-stroke: 0.025em var(--color-w);
`
const Title3 = styled.b`
  font-size: min(19.55vw, 7.1rem);
  line-height: min(21vw, 8rem);
  text-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.75);
`
export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <DivFullPage pad="0">
      <Div pad="0.5em">
        <Title1>O HÍPERESPAÇO ESTÁ</Title1>
        <Title2>ESPERANDO</Title2>
        <Title3>POR VOCÊ</Title3>
      </Div>
      <Div fd="row" pad="0.5em 2em">
        {window.localStorage.getItem("token") === null ? (
          <ButtonLine onClick={() => goToLogin(navigate)}>
            <TextM>FAZER</TextM>
            <TextG>LOGIN</TextG>
          </ButtonLine>
        ) : (
          <ButtonLine onClick={() => goToLogin(navigate)}>
            <TextM>ACESSAR O</TextM>
            <TextG>PAINEL</TextG>
          </ButtonLine>
        )}
        <ButtonLine onClick={() => goToListTrips(navigate)}>
          <TextM>LISTA DE</TextM>
          <TextG>VIAGENS</TextG>
        </ButtonLine>
      </Div>
    </DivFullPage>
  )
}