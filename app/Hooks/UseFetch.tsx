"use client"
import { useEffect, useState } from "react"
import { itemType } from '../Hooks/itemType'

const useFetch = (url:string) => {
   
       
 const [data ,setData]:any=useState<null|itemType>(null)
 const [loading ,setLoading]=useState<boolean>(true)
 const [error,setError]=useState<string|boolean>('')

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
       setError(false)
    })
    .catch(err=>{
        setError(err)
        setLoading(false)
       } )
 }
 ,[url])


  return {data,setData,error,loading}
}
export default useFetch