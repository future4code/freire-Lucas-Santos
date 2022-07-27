import { useState, useEffect } from "react"
import styled from "styled-components"
import axios from "axios"
import { BaseUrl, Headers } from "../api/infos"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { PostCard } from "../components/PostCard"

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
export const Dashboard = () => {
  const [posts, setPosts] = useState([])
  
  useEffect(() => {
    const token = localStorage.getItem("tknLabEddit");
    
    const getPosts = async () => {
      await axios.get(`${BaseUrl}/posts`, {headers: {...Headers, Authorization: token}})
      .then(response => {
        console.log(response.data)
        setPosts(response.data)        
      })
      .catch(error => {
        
      })
    }
    getPosts();
  }, [])
  
  return (
    <>
      <Header />
      
      <Section>
        <ul>
          {posts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </ul>        
      </Section>
      
      <Footer />
    </>
  )
}