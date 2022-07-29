import { useState, useEffect } from "react"
import styled from "styled-components"
import axios from "axios"
import { BaseUrl, Headers } from "../../api/infos"
import { Colors } from "../../styles/Colors"
import { RiMessage3Line } from "react-icons/ri"
import { TiArrowUpOutline, TiArrowUpThick, TiArrowDownOutline, TiArrowDownThick } from "react-icons/ti"
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
  svg {font-size:1.25rem;font-size: min(2.5rem, 5vw);}
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
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 1em;
  font-size: min(1.75rem, 4vw);
`
export const PostHeader = ({post}) => {
  const [upvote, setUpvote] = useState(false);
  const [downvote, setDownvote] = useState(false);
  const {username, title, body, createdAt, voteSum, commentCount, userVote, id} = post;

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

  const changeIconVote = (vote) => {
    vote === 1 ? setUpvote(true) : setUpvote(false);
    vote === -1 ? setDownvote(true) : setDownvote(false);
  }

  const handleClickVote = async (vote, id) => {    
    const token = localStorage.getItem("tknLabEddit");
    
    const changeVote = async () => { 
      vote === 1 ? setUpvote(true) : setUpvote(false);
      vote === -1 ? setDownvote(true) : setDownvote(false);      
    }
    
    if ((userVote === 1) || (userVote === -1)) {
      await axios.put(`${BaseUrl}/posts/${id}/votes`, {direction: vote}, {headers: {...Headers, Authorization: token}})
      .then(response => {changeVote(vote)})
      .catch(error => {alert("Erro ao votar!")})        
    } else {
      await axios.post(`${BaseUrl}/posts/${id}/votes`, {direction: vote}, {headers: {...Headers, Authorization: token}})
      .then(response => {changeVote(vote)})
      .catch(error => {alert("Erro ao votar!")})
    }
  }

  useEffect(() => {
    userVote === 1 ? setUpvote(true) : setUpvote(false);
    userVote === -1 ? setDownvote(true) : setDownvote(false);
  }, [userVote]);

  return (
    <Section>
      <TxtUsername>Enviada por: {username}</TxtUsername>
      <TxtTitle>{title}</TxtTitle>
      <TxtDescription>{body}</TxtDescription>
      <Div jc="space-between" gap="2em">
        <Div>
          {upvote ? <TiArrowUpThick /> : <TiArrowUpOutline onClick={() => handleClickVote(1, post.id)} />}
          <TxtBottom>{checkValue(voteSum)}</TxtBottom>
          {downvote ? <TiArrowDownThick /> : <TiArrowDownOutline onClick={() => handleClickVote(-1, post.id)} />}
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