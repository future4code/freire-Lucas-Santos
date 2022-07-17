import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UrlPostLogin, Header } from "../api/RequestInfos";
import { useState, useEffect } from "react";
import { Grayout, DivFullPage, Div, ButtonFill, TextM, TextG, Input, Br, Form } from "../components/GlobalStyledComps";
import { ModalNotify } from "../components/ModalNotify";

export const LoginPage = () => {
  const navigate = useNavigate();
  const [showPage, setShowPage] = useState(false);
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [modal, setModal] = useState({trigger: false, type: "", title: "", text: ""})
  const goToAdmin = () => navigate("/admin");
  const handleLogin = async (e) => {
    e.preventDefault();
    await axios.post(UrlPostLogin, {email, password}, { headers: Header })
    .then(response => {
      localStorage.setItem("token", response.data.token);
      setModal({trigger: true, type: "success", title: "Login autorizado!", text: "Entrando no foguete..."})
      setTimeout(() => {
        goToAdmin();
      }, 2000)
    })
    .catch(error => {
      setModal({trigger: true, type: "error", title: "Login negado!", text: "Email ou senha incorretos!"})
    })
  }
  useEffect((e) => {
    if (localStorage.getItem("token")) {
      goToAdmin();
    } else {
      setShowPage(true);
    }
  }, []);
  return (
    showPage && (
      <DivFullPage pad="1em">
        <Grayout/>
        <Div pad="2em 0 0.25em 0" bg="var(--color-2a)">
          <TextG color="var(--color-w)">FAÇA SEU LOGIN</TextG>
          <Form action="" onSubmit={handleLogin}>
            <Div pad="1.25em">
              <Input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} 
                      required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" title="E-mail inválido!"/>
              <Input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} 
                      required pattern="[a-zA-Z0-9]{8,}" title="A senha deve ter no mínimo 8 caracteres" />
              <Br />
              <ButtonFill>
                <TextM>ENTRAR</TextM>
              </ButtonFill>
            </Div>
          </Form>
          {modal.trigger && <ModalNotify modal={modal} setModal={setModal} />}
        </Div>
      </DivFullPage>
    ) || (
      <DivFullPage>
        <TextM color="var(--color-w)">Verificando credenciais...</TextM>
      </DivFullPage>
    )
  );
}