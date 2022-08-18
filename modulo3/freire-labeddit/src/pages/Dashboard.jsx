import { useState, useEffect } from "react"
import styled from "styled-components"
import axios from "axios"
import { Colors } from "../styles/Colors"
import { BaseUrl, Headers } from "../api/infos"
import { DashboardHeader } from "../components/dashboard/DashboardHeader"
import { DashboardCard } from "../components/dashboard/DashboardCard"
import { DashboardNewPost } from "../components/dashboard/DashboardNewPost"
import { MdOutlinePostAdd } from "react-icons/md"
import { Loading } from "../components/Loading"

const Section = styled.section`
  width: 100%;
  height: fit-content;
  padding: 5em 0 6em 0;
  ul {
    display: flex;
    flex-direction: column;
    gap: 0.75em;
    margin: 0 0.75em;
  }
`
const Button = styled.button`
  position: fixed;
  bottom: 1em;
  right: 1.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5em;
  color: ${Colors.white};
  background-color: ${Colors.grey};
  border: none;
  border-radius: 100%;
  box-shadow: 0 0 0.5em rgba(0,0,0,0.5);
  transition: all 0.1s ease-in-out;
  :active {transform:scale(0.95)}
  svg {font-size:3.5em}
`
export const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [reloadCount, setReloadCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [newPostTrigger, setNewPostTrigger] = useState(false);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(20);
  const token = localStorage.getItem("tknLabEddit"); 
  
  //Pega os 10 posts a primeira vez
  useEffect(() => {  
    const getPosts = async () => {
      setLoading(true);
      await axios.get(`${BaseUrl}/posts/`, {headers: {...Headers, Authorization: token}})
      .then(response => {
        setPosts(response.data);
        setLoading(false);   
      })
      .catch(error => {
        alert("Erro ao carregar posts")
      })
    }
    getPosts();
  }, []);
  //

  // setTimeout(() => {
  //   setReloadCount(reloadCount + 1);
  // }, 120000);
  
  return (
    <>
      <DashboardHeader />
      
      <Section>
        <ul>
          {posts.map(post => (
            <DashboardCard key={post.id} post={post} />
          ))}
        </ul>  
        <br />   
      </Section>

      <Button onClick={() => setNewPostTrigger(true)}>
        <MdOutlinePostAdd />
      </Button>

      {newPostTrigger && <DashboardNewPost setNewPostTrigger={setNewPostTrigger} />}
      {loading && <Loading />}
    </>
  )
}