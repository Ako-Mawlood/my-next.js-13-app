"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { itemType } from "../Hooks/itemType"

const DeleteBlog = (props:any) => {
  const selectedItem=props.selectedItem
  const setIsPopupOpen =props.setIsPopupOpen
  const setData=props.setData;
  const data=props.data
  const [isDeleted,setIsDeleted]=useState<boolean>(false)
  
  function handleDelete(){
      const fetchRequest={
        method:"DELETE",
        headers:{"Content-type":"application/json"}
      }
        fetch(`http://localhost:8000/data/${selectedItem.id}`,fetchRequest)
        .then(response=>{
          response.json()

        })
        .then(()=>{
           setIsDeleted(true)
           setIsPopupOpen(false)
           const updatedData=data.filter((item:itemType)=>{
             return item.id !== selectedItem.id
           })
           setData(updatedData)
        })
    }
  return (
    <>
    <button onClick={handleDelete} className="px-6 py-4 rounded-sm text-white text-xl bg-red-600 font-bold">Delete</button>
    
      { isDeleted &&<h1 className="absolute top-24 left-1/3 p-6 bg-emerald-600 text-white text-xl font bold">The Blog is deleted</h1> }
    </>

  )
}

export default DeleteBlog