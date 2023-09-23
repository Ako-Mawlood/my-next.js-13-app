"use client"
import { useState } from "react"
import UseFetch from "../Hooks/UseFetch"
import Image from "next/image"
const Blogs = () => {
    const {data,error,loading}=UseFetch("http://localhost:8000/data")
    type itemType={
        id:number;
        title:string;
        body:string;
        author:string;
        src:string
        date:string}
         
    
        
  return (
    <>{error && <h1 className='m-96'>{error}</h1>}
    {loading && <h1 className='absolute top-24 mr-20 left-2/4'>Loading...</h1>}
    {data  && data.map((item:itemType)=>{

        return (
            
            <div className="  card ani up bg-purple-900 rounded-xl cursor-pointer my-2 flex flex-col justify-start items-center" key={item.id}>
        <Image className="w-full i font-bold rounded-sm " width={200} height={250} alt="image" src={item.src} quality={100} />
    
         <div className="flex h-28 w-full  items-center"> 
             <h1 className="text-slate-200 font-bold ml-2 w-50 text-xl ">{item.title}</h1>
             <div className="flex flex-col px-2 w-1/4 justify-center items-center ">
                 <h6 className="text-white text-sm">{item.author}</h6>
            <h6 className="date text-sm">{item.date}</h6>
             </div>
           
         </div>
         
     </div>
        )
    })
    
    }
    </>
  )
}

export default Blogs