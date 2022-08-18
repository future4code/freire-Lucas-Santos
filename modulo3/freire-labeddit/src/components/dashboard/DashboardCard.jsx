import { useState, useEffect } from "react"
import styled from "styled-components"
import { BaseUrl, Headers } from "../../api/infos"
import { useNavigate } from "react-router-dom"
import { Colors } from "../../styles/Colors"
import { TiArrowUpOutline, TiArrowUpThick, TiArrowDownOutline, TiArrowDownThick } from "react-icons/ti"
import { RiMessage3Line } from "react-icons/ri"
import { BiCalendar } from "react-icons/bi"
import axios from "axios"
import { Loading } from "../../components/Loading"

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding: 0.25em 0.5em;
  color: ${Colors.white};
  background-image: linear-gradient(240deg, ${Colors.purple}, ${Colors.pink});
  border-radius: 0.4em;
  box-shadow: 0 0 0.5em rgba(0,0,0,0.5);
`
const Div = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.gap || "0.25em"};
  svg {font-size:1.25rem;font-size: min(2.5rem, 4vw);}
`
const TxtUsername = styled.strong`
  width: 100%;
  margin-bottom: 0.5em;
  font-size: min(1.75rem, 3vw);
  font-weight: 600;
`
const TxtTitle = styled.strong`
  width: 100%;
  margin-bottom: 0.5em;
  font-size: min(2.5rem, 6vw);
`
const TxtBottom = styled.strong`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 1em;
  font-size: min(1.5rem, 3vw);
`
export const DashboardCard = ({post}) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [upvote, setUpvote] = useState(false);
  const [downvote, setDownvote] = useState(false);
  const {username, title, createdAt, voteSum, commentCount, userVote} = post;

  const formatDate = (date) => {
    const year = date.substring(0, 4)
    const month = date.substring(5, 7)
    const day = date.substring(8, 10)
    const time = date.substring(11,16);
    return `${day}/${month}/${year} - ${time}`
  }

  const checkValue = (value) => {
    if (value === null) {
      return "0"
    } else {
      return `${value}`
    }
  }

  const handleClickOpen = () => {
    window.localStorage.setItem("post", JSON.stringify(post));
    navigate(`/post/${post.id}`);
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
    <>
      <Section onClick={() => handleClickOpen()}>
        <TxtUsername>Enviada por: {username}</TxtUsername>
        <TxtTitle>{title}</TxtTitle>
        <Div jc="space-between" gap="2em">
          <Div>
            {upvote ? <TiArrowUpThick onClick={() => handleClickVote(1, post.id)}/> : <TiArrowUpOutline onClick={() => handleClickVote(1, post.id)}/>}
            <TxtBottom>{checkValue(voteSum)}</TxtBottom>
            {downvote ? <TiArrowDownThick onClick={() => handleClickVote(-1, post.id)}/> : <TiArrowDownOutline onClick={() => handleClickVote(-1, post.id)}/>}
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
      {loading && <Loading />}
    </>
  )
}