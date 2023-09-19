

import { useEffect, useState } from "react"

const UseFetch = (url:string) => {
 const [data ,setData]:any=useState(null)
 const [loading ,setLoading]=useState(true)
 const [error,setError]=useState('')

 useEffect(()=>{
    fetch(url)
    .then(response=>{
      if(!response.ok){
          throw new Error("Could not fetch the data")
      }
   return response.json()})
    .then(data=>{
       console.log('the data is fetched')
       setData(data)
       setLoading(false)
       setError('')
    })
    .catch(err=>{
        setError(err)
        setLoading(false)
       } )
 }
 ,[url])


  return {data,setData,error,loading}
}
export default UseFetch