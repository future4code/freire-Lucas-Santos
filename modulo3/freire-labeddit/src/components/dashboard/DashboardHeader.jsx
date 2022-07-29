import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { Colors } from "../../styles/Colors"
import { RiUser3Line, RiSearchLine, RiArrowLeftSLine } from "react-icons/ri"

const HeaderBox = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 4em;
  background-color: ${Colors.black};
  box-shadow: 0 0 0.5em rgba(0,0,0,0.75);
  h1 {
    width: 100%;
    color: ${Colors.white};
    font-size: min(2.5em, 12vw);
    font-weight: 600;
    text-align: center;
    background-image: linear-gradient(240deg, ${Colors.purple}, ${Colors.pink});
    background-clip: 1;
    color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  svg {
    min-width: 1em;
    font-size: min(2em, 8vw);
    color: ${Colors.white};
    transition: all 0.1s ease-in-out;
    :active {transform: scale(0.9);}
  }
`
const Modal = styled.div`
  z-index: 1;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 1.5em 0;
  background-color: ${Colors.grey};
  opacity: 1;
  transform: translateX(-100%);
  transition: all 0.25s ease-in-out;
  strong {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 2em;
    min-height: 2em;
    font-size: min(3rem, 10vw);
    font-weight: 600;
    text-transform: uppercase;
    background-image: linear-gradient(240deg, ${Colors.purple}, ${Colors.pink});
    border-radius: 100%;
    box-shadow: 0 0 0.5em rgba(0,0,0,0.25);
  }
  div {
    display: flex;
    gap: 0.75em;
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.25em 0.5em;
    font-size: min(2.5rem, 8vw);
    font-weight: bold;
    background-color: transparent;
    color: ${Colors.white};
    border: solid 0.1em ${Colors.white};
    border-radius: 0.25em;
    transition: all 0.1s ease-in-out;
    :active {transform: scale(0.9);}
  }
`
export const DashboardHeader = () => {
  const navigate = useNavigate()

  const openModal = () => {
    document.querySelector(".modal").style.transform = "translateX(0)";
  }
  const closeModal = () => {
    document.querySelector(".modal").style.transform = "translateX(-100%)";
  }
  const logout = () => {
    localStorage.removeItem("tknLabEddit");
    navigate("/");
  }
  return (
    <>
      <Modal className="modal">
        <strong>
          <RiUser3Line />
        </strong>
        <div>
          <button onClick={closeModal}>
            <RiArrowLeftSLine />
          </button>
          <button onClick={logout}>
            LOGOUT
          </button>
        </div>
      </Modal>
      <HeaderBox>
        <RiUser3Line onClick={openModal} style={{marginLeft:"0.5em"}}/>
        <h1>LabEddit</h1>
        <RiSearchLine style={{marginRight:"0.5em"}}/>
      </HeaderBox>
    </>
  )
}