import React,{useState,useEffect} from 'react'
import { API_URL } from "../../../constants.js"
const PostsList = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

  useEffect(() => {
   async function loadPosts() {
    try {
      const response = await fetch(API_URL)
      if( response.ok ) {
        const data = await response.json()
        setPosts(data)
        setLoading(false)
      } else {
        setError(response.statusText)
        setLoading(false)
      }
    } catch (error) {
      setError(error)
      setLoading(false)
    }
  }
    loadPosts()
  }, [])
     
  return (
    <div>
        {posts?.map((post) => (
                <div key={post.id}>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </div>
        ))}
    </div>
  )
}

export default PostsList