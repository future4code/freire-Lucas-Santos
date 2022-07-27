import styled from "styled-components"
import { Colors } from "../../styles/Colors"
import { RiHeart3Line, RiHeart3Fill, RiMessage3Line } from "react-icons/ri"
import { BiCalendar } from "react-icons/bi"

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em 1em 0 1em;
  color: ${Colors.white};
`
const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${props => props.jc};
  gap: ${props => props.gap || "0.25em"};
  width: ${props => props.w || "100%"};
  padding: ${props => props.pad};
  margin: ${props => props.margin};
  border-bottom: ${props => props.bb};
  svg {font-size:1.25rem}
`
const TxtProfile = styled.strong`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 1.5em;
  min-height: 1.5em;
  font-size: min(3rem, 7vw);
  font-weight: 600;
  background-image: linear-gradient(240deg, ${Colors.purple}, ${Colors.pink});
  border-radius: 100%;
`
const TxtUsername = styled.strong`
  width: 100%;
  font-size: min(2rem, 6vw);
  font-weight: 600;
  text-decoration: underline;
`
const TxtDescription = styled.p`
  width: 100%;
  padding: 0.75em 0.25em 0 0.25em;
  font-size: min(2rem, 4vw);
  font-weight: 600;
  color: ${Colors.brown};
`
const TxtBottom = styled.strong`
  font-size: min(1.5rem, 3.5vw);
  margin-top: 0.15em;
`
export const PostCommentary = ({ comment, setComments }) => {
  const { body, createdAt, id, postId, userId, userVote, username, voteSum } = comment;
  
  const formatDate = (date) => {
    const year = date.substring(0, 4);
    const month = date.substring(5, 7);
    const day = date.substring(8, 10);
    const time = date.substring(11,16);
    return `${day}/${month}/${year} - ${time}`
  }
  const checkValue = (value) => {
    if (value > 0) {
      return `${value}`
    } else {
      return "0";
    }
  }
  return (
    <Section>
      <Div gap="0.75em">
        <TxtProfile>{username.substring(0,1)}</TxtProfile>
        <TxtUsername>{username}</TxtUsername>
      </Div>
      <Div>
        <TxtDescription>{body}</TxtDescription>
      </Div>
      <Div jc="space-between" pad="1em 0" bb="solid 0.2em #33303C">
        <Div  w="fit-content" margin="0 0.25em">
          <RiHeart3Line />
          <TxtBottom>{checkValue(voteSum)}</TxtBottom>
        </Div>
        <Div  w="fit-content" margin="0 0.25em">          
          <TxtBottom>{formatDate(createdAt)}</TxtBottom>
          <BiCalendar />
        </Div>
      </Div>
    </Section>
  )
}