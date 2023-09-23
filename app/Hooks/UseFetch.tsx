"use client"

import { useEffect, useState } from "react"

const UseFetch = (url:string) => {
   type itemType={
      id:number;
      title:string;
      body:string;
      author:string;
      src:string;
      date:string}
       
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
export default UseFetch