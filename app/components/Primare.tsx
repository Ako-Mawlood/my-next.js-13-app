"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import UseFetch from '../Hooks/UseFetch'
const Primare = () => {
  const {data:primare,error,loading}=UseFetch('http://localhost:9000/data');
  type itemType={
    id:number;
    title:string;
    body:string;
    author:string;
    src:string;
    date:string}
     
  return (
    <> {error && <h1 className='m-96'>{error}</h1>}
    {loading && <h1 className='absolute top-24 mr-20 left-2/4'>Loading...</h1>}
     {primare && primare.map((item:itemType)=>{
      return(
          < div key={item.id} className='flex ani w-ful justify-between items-start '>
        <Image className='rounded-2xl h-96 w-96 ' src={item.src}width={300} height={140} alt='photo' />

        <div className='flex flex-col justify-start items-start h-96 w-2/4 '>
           <div className='mt-4'>
               <div>  
                <h1>{item.author}</h1>
                <h2 className='date'>{item.date}</h2>
               </div>
              <h1  className='text-5xl mt-4  text-slate-100'>{item.title}</h1>
           </div>
         
           <p className='mt-12 '>{item.body}</p>    
        </div>
    </div>
      )
     })
 
    }
    </>
  )
}

export default Primare