"use client"
import Search from './components/Search'
import UseFetch from './Hooks/UseFetch'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import Open from './components/Open'
export default function Home() {
   type itemType={
    id:number
    title:string
    body:string;
    author:string;
    src:string
  }
  type selectedType=null|itemType
  
  const {data,setData ,error ,loading}:any =UseFetch("http://localhost:8000/data")
  const [isOpen,setIsOpen]=useState<boolean>(false)
  const [selectedBlog,setSelectedBlog]=useState<selectedType>(null)
 return (
  <>  
    <Search data={data} setData={setData} />

       {isOpen && selectedBlog &&

       <div className=" absolute top-1/4 left-1/4 w-2/4 cursor-pointer shadow-md shadow-gray-700 flex flex-col justify-start mx-3 h-96 my-9 rounded-3xl bg-purple-400 p-3">
           <Image  width={500} height={250} alt='publisher' src={selectedBlog.src}  quality={100}  className='rounded-xl shadow-md  shadow-black m-3'/>
            <h1>{selectedBlog.title}</h1>
            <h2>{selectedBlog.author}</h2>        
             <p>{selectedBlog.body}</p>
           <button className='px-4 py-2 bg-slate-50 w-2/4 text-xl text-purple-500 rounded-xl' onClick={()=>setIsOpen(false)}>Close</button>
       </div>
       }

       {data && <h1 className=" m-4 ml-20 h1  text-8xl text-purple-500">Your Opnion Matters...</h1>}
    <main className='w-full flex justify-center  flex-wrap '>

     {data && data.map((item:itemType)=>{
       return(<> 
          <div key={item.id}   className=" cursor-pointer shadow-md shadow-gray-700 flex flex-col justify-start mx-3 h-34 my-9 rounded-3xl bg-purple-500 p-3" >


          
            <div  className='flex justify-center items-start w-full h-32'>
      
             <Image  width={300} height={150} alt='publisher' src={item.src}  quality={100}  className='rounded-xl shadow-md  shadow-black m-3'/>
              
              <div  className='flex flex-col w-full h-full items-center justify-evenly '> 
                <h1  className='text-xl  '>{item.title}</h1>
                <h2 className='font-bold text-xl '>{item.author}</h2>
                     
              </div>
          
            </div >
              <Open data={data} isOpen={isOpen}  setIsOpen={setIsOpen} id={item.id} selectedBlog={selectedBlog} setSelectedBlog={setSelectedBlog} />          
            </div>
        
       </>) 
     })}
    {loading && <h1 className=' font-bold m-9 text-purple-800'>Loading...</h1>}
    {error && <h1 className='text-red m-9 font-bold>'>{error}</h1>}
     </main>
     </>
  )
}
