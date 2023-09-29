"use client"
import Image from 'next/image'
import { useState} from "react"
import { useRouter } from 'next/navigation';
import png from "public/toppng.com-website-designing-and-software-development-company-675x717.png"
import useNewestBlog from '../Hooks/useNewestBlog';
const Add = () => {
   const {author,setAuthor,title,setTitle,body,setBody,date,setDate,url,setUrl}=useNewestBlog()
  const [error,setError]=useState('')
   const router=useRouter()
   console.log(author)
   const id= Math.floor(Math.random()*1000)
         
   function handleSubmit(e:any):any{
    e.preventDefault() 
    router.replace('/')

    type pushDataType={
      "author":string,
      "title":string,
      "body":string,
      "src":string,
      date:string;
      
    }
     
  const pushData:pushDataType= {
    title:title,
    body:body,
    author:author,
    src:url,
    date:date,
  
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
      
      
    })
    .catch(err=>{
      setError(err)
    })
    

   }
       
  return (
    <> {error && <h1 className=" m-36 text-purple-500 text-xl font-bold">{error}</h1>}  
      
    <div   className=" overflow-hidden w-screen h-screen rounded-t-3xl  flex justify-around items-center">
      
              
              <form onSubmit={handleSubmit} className=" rounded-lg bg-slate-50  w-1/3  py-12 text-slate-800   flex justify-evenly items-center flex-col   " >
             <h1 className="date text-2xl font-bold ">Add your Own Opinion</h1>
         <div className="flex flex-col">
          <label className=" ">Name:</label>
          <input  required className="w-96 p-4  border-2 border-slate-400 border-solid rounded-lg " onChange={(e)=>setAuthor(e.target.value)} placeholder="Alexander" type="text" />
        </div>
        <div className="flex flex-col">
          <label className="">Title:</label>
        <input required className="w-96 rounded-lg p-4 border-2 border-slate-400 border-solid " onChange={(e)=>setTitle(e.target.value)} placeholder="Climate Change" type="text" />
        </div>
        <div className="flex flex-col ">
        <label className="">Body:</label>
        <textarea required placeholder="My opinion about..." className="w-96 border-2 border-slate-400 border-solid  p-4 rounded-lg  "onChange={(e)=>setBody(e.target.value)} ></textarea>
        <label >Img Url:</label>
        <input placeholder="Https//example.com/..." className='w-96 rounded-lg p-4 my-2 border-2 border-slate-400 border-solid ' required type='url'  onChange={(e)=>setUrl(e.target.value)}/>
        <label>Date</label>
        <input className="border-2 p-4 border-slate-400 border-solid my-4" type="date" value={date} onChange={(e)=>setDate(e.target.value)} />
        </div>
        <input className=" cursor-pointer py-2 px-5 ml-2 rounded-lg font-bold text-lg text-white color bg-perpule-600 text-center" type="submit" value="Publish"/>

      </form>
       
      <Image alt='image' width={750} height={850} src={png}  />     
       
    </div> 
       
      
   
 </> 
 )
}

export default Add