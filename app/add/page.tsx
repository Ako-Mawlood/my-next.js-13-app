"use client"
import { useState} from "react"
import { useRouter } from 'next/navigation';
const Add = () => {
   const [name,setName]=useState('')
   const [title,setTitle]=useState('')
   const [body,setBody]=useState('')
   const [error,setError]=useState('')
   const router=useRouter()
   const id= Math.floor(Math.random()*1000)

         
   function handleSubmit(e:Event):any{
    e.preventDefault() 

    type pushDataType={
      "title":string,
      "body":string,
      "author":string,
      "src":string
    }
     
  const pushData:pushDataType= {
    title:title,
    body:body,
    author:name,
    src:`https://picsum.photos/id/${id}/200/150`
  }
    const fetchPreparation={
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(pushData)
    }
  
    fetch("http://localhost:8000/data",fetchPreparation)
    .then((response)=>{
       if(!response.ok){
        throw new Error("could not push the opnion")
       }
    })
    .then((data)=>{
      setError('')
      router.replace('/')
      
    })
    .catch(err=>{
      setError(err)
    })
    

   }
       
  return (
    <> {error && <h1 className=" m-36 text-purple-500 text-xl font-bold">{error}</h1>}
    <div className=" flex-col items-center flex justify-center   hhh  ">
      <form onSubmit={handleSubmit} className="text-white text-2xl bg-purple-500 mt-12  rounded-3xl flex justify-evenly items-center flex-col add h-3/4" >
         <div className="flex flex-col">
          <label className=" ">Name:</label>
          <input  required className="w-96 p-4 rounded-lg text-purple-400" onChange={(e)=>setName(e.target.value)} placeholder="Alexander" type="text" value={name}/>
        </div>
        <div className="flex flex-col">
          <label className="">Title:</label>
        <input required className="w-96 text-purple-400 rounded-lg p-4" onChange={(e)=>setTitle(e.target.value)} placeholder="Climate Change" type="text" value={title}/>
        </div>
        <div className="flex flex-col ">
        <label className="">Body:</label>
        <textarea required placeholder="My opinion about..." className="w-96 text-purple-500 p-4 rounded-lg"onChange={(e)=>setBody(e.target.value)} value={body}></textarea>
        </div>
       
        
        
        <input className=" cursor-pointer bg-white text-purple-500 py-3 px-7 rounded-lg" type="submit" value="Publish"/>
      </form>
    </div>
 </> 
 )
}

export default Add