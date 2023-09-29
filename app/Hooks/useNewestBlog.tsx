"use client"
import { useState } from "react"

const useNewestBlog = () => {
  const [author,setAuthor]=useState('Ako Mawlood')
  const [title,setTitle]=useState('It takes a planet to explore the universe')
  const [body,setBody]=useState('Sustainable agriculture practices, including organic farming, crop rotation, and reduced pesticide use, are essential for ensuring food security for future generations. Transitioning to these practices may require financial incentives and education to empower farmers and build a resilient food system that meets the needs of our planet and posterity.')
  const [date,setDate]=useState('May 8, 2023')
  const [url,setUrl]=useState('https://images.pexels.com/photos/41162/moon-landing-apollo-11-nasa-buzz-aldrin-41162.jpeg')
  
  
  
    return {author,setAuthor,title,setTitle,body,setBody,date,setDate,url,setUrl}
}

export default useNewestBlog