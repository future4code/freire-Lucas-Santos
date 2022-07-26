import styled from "styled-components"
import { Colors } from "../styles/Colors"
import { RiUser3Line, RiLockPasswordLine } from "react-icons/ri"

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: fit-content;
  max-width: 420px;
  background-color: ${Colors.grey};
  overflow: hidden;
  border-radius: 1em;
  box-shadow: 0px 0px 0.5em rgba(0, 0, 0, 0.5);
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 0.5em 0 1em 0;
  }
`
const H1 = styled.h1`
  color: ${Colors.white};
  font-size: min(3em, 10vw);
`

export const LoginPage = () => {
  return (
    <>
      <Section>
        <div style={{height: "fit-content", backgroundColor: Colors.pink, boxShadow: "0 0 0.5em black"}}>
          <H1>Login</H1>
        </div>
        <div>
          
        </div>
      </Section>
      <br />
      <br />
      <Section>
        <div style={{height: "fit-content", backgroundColor: Colors.pink, boxShadow: "0 0 0.5em black"}}>
          <H1>Cadastro</H1>
        </div>
        <div>
          
        </div>
      </Section>
    </>
    
  )
}