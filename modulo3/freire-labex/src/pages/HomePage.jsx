import styled from "styled-components"
import { BoxFullPage } from "../components/StyledComps";

const Div = styled.div`
  display: flex;
  flex-direction: ${props => props.fd || 'column'};
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 30em;
  height: 100%;
  color: #EBEBEB;
  > b:nth-child(1) {
    font-size: min(11vw, 3.38rem);
    line-height: min(12vw, 4rem);
    text-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.75);
  }
  > b:nth-child(2) {
    font-size: min(19.75vw, 6.1rem);
    line-height: min(17vw, 5rem);
    color: transparent;
    -webkit-text-stroke: 0.025em #EBEBEB;
  }
  > b:nth-child(3) {
    font-size: min(24.25vw, 7.5rem);
    line-height: min(25vw, 8rem);
    text-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.75);
  }
  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 0 0.75em;
    padding: 0.5em 0;
    color: #EBEBEB;
    background-color: transparent;
    border: solid 0.15em #EBEBEB;
    border-radius: 0.5em;
    > b:nth-child(1) {
      font-size: min(5vw, 1.75rem);
      line-height: min(25vw, 1.5rem);
    }
    > b:nth-child(2) {
      font-size: min(10vw, 3rem);
      line-height: min(25vw, 2rem);
    }
  }
`
export const HomePage = () => {
  return (
    <BoxFullPage>
      <Div>
        <b>O HÍPERESPAÇO ESTÁ</b>
        <b>ESPERANDO</b>
        <b>POR VOCÊ</b>
      </Div>
      <Div fd="row">
        <button>
          <b>FAZER</b>
          <b>LOGIN</b>
        </button>
        <button>
          <b>LISTA DE</b>
          <b>VIAGENS</b>
        </button>
      </Div>
    </BoxFullPage>
  )
}