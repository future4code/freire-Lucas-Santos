import { useState, useEffect } from "react"
import styled from "styled-components"
import axios from "axios"
import { Headers, BaseUrl } from "../api/infos"
import { useNavigate } from "react-router-dom"
import { Colors } from "../styles/Colors"
import { Loading } from "../components/Loading"

const Section = styled.section`
  position: fixed;
  top: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  height: fit-content;
  max-width: 420px;
  background-color: ${Colors.grey};
  overflow: hidden;
  border-radius: 1em;
  box-shadow: 0px 0px 0.5em rgba(0, 0, 0, 0.5);
  div, form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: ${Colors.white};
    background-image: linear-gradient(240deg, ${Colors.purple}, ${Colors.pink});
  }
`
const H1 = styled.h1`
  margin: 0.25em 0 0.4em 0;
  color: ${Colors.white};
  font-size: min(3em, 10vw);
`
const Input = styled.input`
  width: 85%;
  padding: 0.5em 0.25em;
  margin-bottom: 0.5em;
  background-color: transparent;
  color: ${Colors.white};
  font-size: min(1.5em, 6vw);
  text-align: center;
  outline: none;
  border: 0.1em solid ${Colors.black};
  border-radius: 0.5em;
  transition: all 0.2s ease-in-out;
  &:focus {
    border-color: ${Colors.pink};
    box-shadow: 0px 0px 0.5em rgba(0, 0, 0, 0.25);
  }
`
const Button = styled.button`
  width: 90%;
  margin-top: 0.25em;
  padding: 0.4em;
  background-image: linear-gradient(240deg, ${Colors.purple}, ${Colors.pink});
  font-size: min(2em, 8vw);
  font-weight: bold;
  text-align: center;
  opacity: 0.5;
  border: none;
  border-radius: 0.25em;
  transition: all 0.2s ease-in-out;
  &:hover {opacity: 1;}
  &:disabled {opacity: 0.5; cursor: not-allowed;}
`
const A = styled.a`
  margin: 1.5em 0 1em 0;
  color: ${Colors.brown};
  font-size: min(1em, 4vw);
  font-weight: bold;
  text-decoration: underline #9F7E94;
  transition: all 0.2s ease-in-out;
  &:hover {
    opacity: 0.5;
    text-decoration: underline;
  }
`

export const LoginPage = () => {
  const [form, setForm] = useState({email:"", password:""})
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const token = localStorage.getItem("tknLabEddit")

  //   if (token) {
  //     navigate("/dashboard")
  //   } else {
  //     localStorage.removeItem("tknLabEddit")
  //   }
  // }, [])

  const clickToSignup = () => {
    navigate("/signup");
  }
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    await axios.post(`${BaseUrl}/users/login`, form, Headers)
    .then(response => {
      localStorage.setItem("tknLabEddit", response.data.token)
      setLoading(false);
      navigate("/dashboard")
    })
    .catch(error => {
      setLoading(false);
      alert("Deu ruim!");
    })
  }

  return (
    <>    
      <Section>
        <div style={{height: "fit-content",boxShadow: "0 0 0.5em black"}}>
          <H1>Login</H1>
        </div>
        <br />
        <form action="" onSubmit={handleLogin} style={{backgroundImage:"none"}}>
          <Input placeholder="E-mail" type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})}
            required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" title="E-mail inválido!"/>
          <Input placeholder="Senha" type="password" value={form.password} onChange={e => setForm({...form, password: e.target.value})}
            required title="A senha deve entre 8 e 30 caracteres" minLength="8" maxLength="30"/>
          <Button>Entrar</Button>
        </form>
        <div style={{backgroundImage:"none"}}>
          <A onClick={clickToSignup}>Não tem uma conta? Faça o cadastro!</A>
        </div>
      </Section>
      {loading && <Loading />}  
    </>
  )
}