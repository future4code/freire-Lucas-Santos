import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Grayout, DivFullPage, Div, Form, ButtonFill, Input, Br, TextM, TextG, Select, Option } from "../../components/GlobalStyledComps";
import { UrlGetCountries, UrlApplyToTrip } from "../../api/RequestInfos";
import { ModalNotify } from "../../components/ModalNotify";
import { useForm } from "../../hooks/useForm";

export const ApplyTripPage = () => {
  const { id } = useParams();

  const [applyForm, handleChange] = useForm({
    tripId: id,
    name: "", 
    age: "", 
    applicationText: "", 
    profession: "", 
    country: "",
  });
  const [trips, setTrips] = useState(JSON.parse(window.localStorage.getItem("trips")));
  const [countries, setCountries] = useState([]);
  const [modal, setModal] = useState({trigger: false, type: "", title: "", text: ""})

  const handleApply = async (e) => {
    e.preventDefault();
    await axios.post(UrlApplyToTrip, applyForm)
    .then(response => {
      setModal({trigger: true, type: "success", title: "Proposta enviada!", text: "Agora é só aguardar o sorteio!"})
    })
    .catch(error => {
      setModal({trigger: true, type: "error", title: "Erro ao enviar proposta!", text: "Tente novamente mais tarde!"})
      console.log(error);
    })
  }

  useEffect((e) => {
    const getTrips = async () => {
      await axios.get(UrlGetCountries)
      .then(response => {
        setCountries(response.data.map(country => country.nome.abreviado))
        handleChange({ target: { name: "country", value: response.data[0].nome.abreviado } });
      })
      .catch(error => {
        console.log(error);
      })
    }
    getTrips()
  }, []);

  return (
    <DivFullPage>
      <Grayout/>
      <Div pad="2em 0 0.25em 0" bg="var(--color-2a)">
        <TextG color="var(--color-w)">PREENCHA SEUS DADOS</TextG>
        <Form action="" onSubmit={handleApply}>
          <Div pad="1.25em">
            <Select name="tripId" value={applyForm.tripId} onChange={handleChange}>
              {trips.map(trip => (
                <Option key={trip.id} value={trip.id}>{trip.name} ({trip.planet})</Option>
              ))}
            </Select>
            <Input 
              name="name" 
              placeholder="Nome"
              value={applyForm.name} 
              onChange={handleChange} 
              required 
              pattern="[a-zA-Z ]{2,}" 
              title="Nome inválido" 
            />
            <Input 
              type={"number"} 
              name="age" 
              placeholder="Idade"
              value={applyForm.age} 
              onChange={handleChange} 
              required pattern="[0-9]{2,}" 
              title="Idade inválida" 
            />
            <Input 
              name="applicationText" 
              placeholder="Por quê você quer viajar?"
              value={applyForm.applicationText} 
              onChange={handleChange} 
              required 
            />
            <Input 
              name="profession" 
              placeholder="Profissão"
              value={applyForm.profession} 
              onChange={handleChange} 
              required 
            />
            <Select name="country" value={applyForm.country} onChange={handleChange}>
              {countries.map((country, index) => (
                <Option key={index} value={country}>{country}</Option>
              ))}
            </Select>
            <Br/>
            <ButtonFill>
                <TextM>ENVIAR PROPOSTA</TextM>
              </ButtonFill>
          </Div>
        </Form>
      </Div>
      {modal.trigger && <ModalNotify modal={modal} setModal={setModal}/>}
    </DivFullPage>
  );
}