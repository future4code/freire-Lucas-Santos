import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { Colors } from "../styles/Colors"
import { RiHeart3Line, RiHeart3Fill, RiMessage3Line, RiMessage3Fill, RiCalendarLine } from "react-icons/ri"
import { BiCalendar } from "react-icons/bi"

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em 1em 0.5em 1em;
  color: ${Colors.white};
  background-image: linear-gradient(240deg, ${Colors.purple}, ${Colors.pink});
  box-shadow: 0 0 0.5em rgba(0,0,0,0.5);
`
const Div = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.gap || "0.25em"};
  width: fit-content;
  svg {font-size:1.25rem}
`
const TxtUsername = styled.strong`
  width: 100%;
  margin-bottom: 0.5em;
  font-size: min(1.75rem, 3vw);
  font-weight: 600;
  text-align: center;
  text-decoration: underline;
`
const TxtTitle = styled.strong`
  width: 100%;
  margin-bottom: 0.15em;
  font-size: min(3rem, 8vw);
  text-align: center;
`
const TxtDescription = styled.p`
  width: 100%;
  margin-bottom: 0.75em;
  padding: 0.25em 0;
  font-size: min(2rem, 4vw);
  font-weight: 600;
  text-align: center;
`
const TxtBottom = styled.strong`
  font-size: min(1.5rem, 3.5vw);
  margin-top: 0.15em;
`

export const PostHeader = ({post}) => {
  const navigate = useNavigate();
  const {username, title, body, createdAt, voteSum, commentCount} = post;

  const formatDate = (date) => {
    const year = date.substring(0, 4)
    const month = date.substring(5, 7)
    const day = date.substring(8, 10)
    return `${day}/${month}/${year}`
  }
  const checkValue = (value) => {
    if (value > 0) {
      return `${value}`
    } else {
      return "0"
    }
  }

  return (
    <Section>
      <TxtUsername>Enviada por: {username}</TxtUsername>
      <TxtTitle>{title}</TxtTitle>
      <TxtDescription>{body}</TxtDescription>
      <Div jc="space-between" gap="2em">
        <Div>
          <RiHeart3Line />
          <TxtBottom>{checkValue(voteSum)}</TxtBottom>
        </Div>
        <Div>
          <RiMessage3Line />
          <TxtBottom>{checkValue(commentCount)}</TxtBottom>
        </Div>
        <Div>
          <BiCalendar />
          <TxtBottom>{formatDate(createdAt)}</TxtBottom>
        </Div>
      </Div>
    </Section>
  )
}