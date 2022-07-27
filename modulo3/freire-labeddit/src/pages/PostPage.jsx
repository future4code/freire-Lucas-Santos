import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import axios from "axios"
import { BaseUrl, Headers } from "../api/infos"

import { PostHeader } from "../components/PostHeader"
import { ComentaryBox } from "../components/ComentaryBox"

const Section = styled.section`
  width: 100%;
`
export const PostPage = () => {
  const { id } = useParams()
  const [post, setPost] = useState(JSON.parse(window.localStorage.getItem("post")));
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem("tknLabEddit");

    const getComments = async () => {
      await axios.get(`${BaseUrl}/posts/${id}/comments`, {headers: {...Headers, Authorization: token}})
      .then(response => {
        alert("Deu certo!");
        console.log(response.data)
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
        <ComentaryBox />
      </Section>
    </>
  )
}