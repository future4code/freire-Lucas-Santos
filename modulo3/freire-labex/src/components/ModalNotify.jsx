import { useEffect } from "react"
import styled from "styled-components"
import { TextP, TextM } from "./GlobalStyledComps"

const Modal = styled.div`
  z-index: 5;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: var(--header-h);
  padding: 0.5em 1em;
  color: var(--color-w);
  background-color: ${modal => modal.bg || "var(--color-2b)"};
  box-shadow: var(--shadow);
  transform: translateY(100%);
  transition: all 0.25s ease-in-out;
`
export const ModalNotify = ({modal, setModal}) => {
  useEffect(() => {
    document.querySelector("#Modal").style.transform = "translateY(0)"
    setTimeout(() => {
      document.querySelector("#Modal").style.transform = "translateY(100%)"
      setTimeout(() => {
        setModal({})
      }, 300)
    }, 4000)
  }, [modal.trigger])
  return (
    modal.type === "success" && (
      <Modal bg="var(--color-yes)" id="Modal">
        <TextM>{modal.title}</TextM>
        <TextP>{modal.text}</TextP>
      </Modal>
    ) ||
    modal.type === "error" && (
      <Modal bg="var(--color-no)" id="Modal">
        <TextM>{modal.title}</TextM>
        <TextP>{modal.text}</TextP>
      </Modal>
    ) ||
    modal.type === "info" && (
      <Modal bg="var(--color-1a)" id="Modal">
        <TextM>{modal.title}</TextM>
        <TextP>{modal.text}</TextP>
      </Modal>
    )
  )
}