import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { BaseUrl, Headers } from "../../api/infos"
import { Colors } from "../../styles/Colors";
import { RiArrowLeftSLine } from "react-icons/ri";

const Section = styled.section`
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: fit-content;
  min-height: 20em;
  padding-bottom: 0.5em;
  background-color: ${Colors.grey};
  overflow: hidden;
  border-radius: 1em 1em 0 0;
  box-shadow: 0px 0px 0.5em rgba(0, 0, 0, 0.5);
  transform: translateY(100%);
  transition: all 0.3s ease-in-out;
  textarea {
    flex-grow: 1;
    width: 92.5%;
    margin: 0.25em 0 0.25em 0;
    font-size: min(2rem, 4vw);
    resize: none;
    color: ${Colors.white};
    background-color: transparent;
    border: none;
    outline: none;
  }
`
const Div = styled.div`
  display: flex;
  flex-direction: ${props => props.fd || "column"};
  align-items: center;
  justify-content: ${props => props.jc || "center"};
  gap: 0.5em;
  width: ${props => props.w || "100%"};
  height: 100%;
  background-image: linear-gradient(240deg, ${Colors.purple}, ${Colors.pink});
  button {
    display: flex; 
    align-items: center; 
    justify-content: center;
    font-size: min(2em, 6vw);
    font-weight: bold;
    width: 100%;
    height: 100%;
    min-height: 2em;
    color: ${Colors.white};
    background-image: linear-gradient(240deg, ${Colors.purple}, ${Colors.pink});
    border: none;
    border-radius: 0.25em;
  }
`
const H1 = styled.h1`
  margin: 0.25em 0 0.4em 0;
  color: ${Colors.white};
  font-size: min(3em, 8.5vw);
`
const Grayout = styled.div`
  z-index: 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${Colors.black};
  opacity: 0;
  transition: all 0.25s ease-in-out;
`
export const DashboardNewPost = ({ setTrigger}) => {
  const { id } = useParams();
  const [comment, setComment] = useState("");

  const hide = () => {
    const grayout = document.querySelector(".grayout");
    const section = document.querySelector(".section");
    grayout.style.opacity = "0";
    section.style.transform = "translateY(100%)";
    setTimeout(() => {
      setTrigger(false);
    }, 300);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.length > 0) {
      const token = localStorage.getItem("tknLabEddit");
      axios.post(`${BaseUrl}/posts/${id}/comments`, {body: comment}, {headers: {...Headers, Authorization: token}})
      .then(response => {
        console.log(response);
        setComment("");
        hide();
      })
      .catch(error => {
        console.log(error);
      })
    } else {
      alert("Não é possível enviar um comentário vazio");
    }
  }
  useEffect(() => {
    setTimeout(() => {
      const grayout = document.querySelector(".grayout");
      const section = document.querySelector(".section");
      grayout.style.opacity = "0.9";
      section.style.transform = "translateY(0)";
    }, 100);
  }, [])

  return (
    <>
      <Grayout className="grayout"/>
      <Section className="section">
        <Div style={{height: "fit-content", backgroundColor: Colors.pink, boxShadow: "0 0 0.5em black"}}>
          <H1>Novo Post</H1>
        </Div>
        <textarea placeholder="Digite a descrição do post aqui..." value={comment} onChange={e => setComment(e.target.value)} />
        <Div fd="row" jc="space-between" w="95%" style={{backgroundImage:"none"}}>
          <button style={{maxWidth:"2em"}} onClick={hide}>
            <RiArrowLeftSLine />
          </button>
          <button onClick={handleSubmit}>
            Publicar post          
          </button>
        </Div>
      </Section>
    </>
  )
}