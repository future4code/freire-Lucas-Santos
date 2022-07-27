import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Div,  TextG, TextM, TextP, ButtonFill } from "./GlobalStyledComps";
import { UrlPutDecideCandidate, Header } from "../api/RequestInfos";
import { FaCheck } from "react-icons/fa";
import { Loading } from "./Loading";
import { ModalNotify } from "./ModalNotify";

export const CandidateCard = ({ candidate }) => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState({trigger: false, type: "", title: "", text: ""})

  const handleDecide = async (choice) => {
    setLoading(true);
    await axios.put(UrlPutDecideCandidate(id, candidate.id), {approve: choice}, {headers: Header})
    .then(response => {
      setLoading(false);
      choice ? setModal({trigger: true, type: "success", title: "Candidato aprovado com sucesso!"}) : setModal({trigger: true, type: "success", title: "Candidato reprovado com sucesso!"})
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }).catch(error => {
      console.log(error);
    })
  }

  return (
    <Div jc="space-between" maxW="20em" minH="13em" pad="0.25em 0 0 0" gap="0" bg="var(--color-2a)" bs="var(--shadow)">
      <Div jc="space-between" minH="6em" pad="0.25em 0 0.25em 0">
          <TextG minH="1em">{candidate.name}</TextG>
          <TextP minH="2.5em">{candidate.applicationText}</TextP>        
      </Div>

      <Div fd="row" gap="0.35em" pad="0 0.35em 0.35em 0.35em">
        <Div minH="3.5em" pad="0.5em" bg="var(--color-2b)">
          <TextP>{candidate.profession}</TextP>
        </Div>
        <Div minH="3.5em" pad="0.5em" bg="var(--color-2b)">
          <TextP>{candidate.age} anos</TextP>
        </Div>
        <Div minH="3.5em" pad="0.5em" bg="var(--color-2b)">
          <TextP>{candidate.country}</TextP>
        </Div>
      </Div>
      
      <Div fd="row" gap="0em" pad="0" bg="var(--color-2b)" br="0">
        <ButtonFill minH="3.5em" pad="0.25" bg="var(--color-yes)" br="0" margin="0" bgH="var(--color-yesH)" bsH="none" onClick={() => handleDecide(true)}>          <FaCheck size="1.5em"/>
        </ButtonFill>
        <ButtonFill minH="3.5em" pad="0.25" bg="var(--color-no)" br="0" margin="0" bgH="var(--color-noH)" bsH="none" onClick={() => handleDecide(false)}>
          <TextM>X</TextM>
        </ButtonFill>
      </Div>

      {loading && <Loading />}
      {modal.trigger && <ModalNotify modal={modal} setModal={setModal}/>}
    </Div>
  );
}