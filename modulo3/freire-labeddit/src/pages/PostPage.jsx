import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import axios from "axios"
import { Colors } from "../styles/Colors";
import { BaseUrl, Headers } from "../api/infos"
import { AiOutlineComment } from "react-icons/ai"
import { PostHeader } from "../components/post/PostHeader"
import { PostCommentary } from "../components/post/PostCommentary"
import { PostScreenComment } from "../components/post/PostScreenComment"

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  ul {
    display: flex;
    flex-direction: column;
    margin-bottom: 4em;
  }
`
const Button = styled.button`
  position: fixed;
  bottom: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em;
  color: ${Colors.white};
  background-image: linear-gradient(240deg, ${Colors.purple}, ${Colors.pink});
  border: none;
  border-radius: 100%;
  box-shadow: 0 0 0.5em rgba(0,0,0,0.5);
  transition: all 0.1s ease-in-out;
  :active {transform:scale(0.95)}
  svg {font-size:4em}
`
export const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(JSON.parse(window.localStorage.getItem("post")));
  const [comments, setComments] = useState([]);
  const [trigger, setTrigger] = useState(false);
  
  useEffect(() => {
    const token = localStorage.getItem("tknLabEddit");
    
    const getComments = async () => {
      await axios.get(`${BaseUrl}/posts/${id}/comments`, {headers: {...Headers, Authorization: token}})
      .then(response => {
        setComments(response.data);
      })
      .catch(error => {
        alert("Deu ruim!");
      })
    }
    getComments();
  }, [])
  return (
    <>
      <Section>
        <PostHeader post={post} />
      </Section>
      <Section>
        <ul>
          {comments.map(comment => (
            <PostCommentary key={comment.id} comment={comment} />
          ))}
        </ul>
      </Section>
      <Button onClick={() => setTrigger(true)}>
        <AiOutlineComment />
      </Button>
      {trigger && <PostScreenComment setTrigger={setTrigger} />}
    </>
  )
}