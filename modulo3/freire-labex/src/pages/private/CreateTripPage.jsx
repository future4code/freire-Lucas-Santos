import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Grayout, DivFullPage, Div, Form, ButtonFill, Input, Br, TextM, TextG, Select, Option } from "../../components/GlobalStyledComps";
import { UrlPostCreateTrip, Header } from "../../api/RequestInfos";
import { ModalNotify } from "../../components/ModalNotify";
import { useForm } from "../../hooks/useForm";
import { Loading } from "../../components/Loading";
import { goToLogin } from "../../routers/RouterFlow";

export const CreateTripPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [tripForm, handleChange] = useForm({
    name: "", 
    age: "", 
    planet: "", 
    date: "", 
    durationInDays: 0,
    description: "",
  });
  const [modal, setModal] = useState({trigger: false, type: "", title: "", text: ""})

  const handleCreate = async (e) => {
    e.preventDefault();
    setLoading(true);
    await axios.post(UrlPostCreateTrip(id), tripForm, {headers: Header})
    .then(response => {
      setModal({trigger: true, type: "success", title: "Viagem criada com sucesso!"})
      setLoading(false);
      setTimeout(() => {
        navigate(-1);
      }, 1000);        
    })
    .catch(error => {
      setModal({trigger: true, type: "error", title: "Erro ao criar viagem!", text: error.response.data.message})
    })
  }

  useEffect((e) => {
    window.localStorage.getItem("token") === null && goToLogin(navigate)
  }, []);

  return (
    <DivFullPage pad="0">
      <Grayout/>
      <Div pad="2em 0 0.25em 0" bg="var(--color-2a)">
        <TextG color="var(--color-w)">NOVA VIAGEM</TextG>
        <Form action="" onSubmit={handleCreate}>
          <Div pad="1.25em">
            <Input 
              name="name" 
              placeholder="Título da viagem" 
              value={tripForm.name} 
              onChange={handleChange}
              required
              pattern="[a-zA-Z0-9áàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ ]{8,}"
              title="Nome deve ter no mínimo 8 caracteres"
            />
            <Input 
              name="planet" 
              placeholder="Planeta"
              value={tripForm.planet} 
              onChange={handleChange}
              required 
              pattern="[a-zA-Z0-9áàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ ]{2,}"
              title="Nome deve ter no mínimo 2 caracteres"
            />
            <Input 
              type={"number"} 
              name="durationInDays" 
              placeholder="Duração (em dias)"
              value={tripForm.durationInDays}
              onChange={handleChange} 
              required
              pattern="[0-9]{1,}"
              min="1" 
              title="Idade deve ter no mínimo 2 caracteres"
            />
            <Input 
              name="description" 
              placeholder="Descrição"
              value={tripForm.description}
              onChange={handleChange} 
              required
              pattern="[a-zA-Z0-9áàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ ]{8,}"
              title="Descrição deve ter no mínimo 8 caracteres"
            />
            <Input
              type={"date"}
              name="date" 
              placeholder="date"
              value={tripForm.date} 
              onChange={handleChange} 
              required
              pattern="[0-9]{2,}"
              title="Data deve ter no mínimo 2 caracteres"
            />
            <Br/>
            <ButtonFill>
                <TextM>ENVIAR PROPOSTA</TextM>
              </ButtonFill>
          </Div>
        </Form>
      </Div>
      {modal.trigger && <ModalNotify modal={modal} setModal={setModal}/>}
      {loading && <Loading/>}
    </DivFullPage>
  );
}