"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import UseFetch from '../Hooks/useFetch'
import useNewestBlog from '../Hooks/useNewestBlog'
import { itemType } from '../Hooks/itemType'
const Primare = () => {
  const {author,title,body,date,url}=useNewestBlog()



     
  return (
    <> 
    
          < div  className='flex ani w-ful justify-between items-start '>
        <Image className='rounded-2xl h-96 w-96 ' src={url}width={300} height={140} alt='photo' />

        <div className='flex flex-col justify-start items-start  h-96 w-2/4 '>
           <div className=''>
               <div>  
                <h1>{author}</h1>
                <h2 className='date'>{date}</h2>
               </div>
              <h1  className='text-5xl mt-4  text-slate-100'>{title}</h1>
           </div>
         
           <p className='my-2 '>{body}</p>    
        </div>
    </div>
    
  
    </>
  )
}

export default Primare