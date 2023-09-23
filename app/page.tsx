"use client"
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import {useRouter} from 'next/navigation'
import { usePathname } from 'next/navigation'
import texture from "../public/texture.png"
import UseFetch from './Hooks/UseFetch'
const Home = () => {

     const router = useRouter()
    const {data:primareItem,error,loading}=UseFetch("http://localhost:9000/data")

    type itemType={
      id:number;
      title:string;
      body:string;
      author:string;
      src:string
      date:string}
       
  return (
    <>  {error && <h1 className='m-96'>{error}</h1>}
        {loading && <h1 className='absolute top-24 mr-20 left-2/4'>Loading...</h1>}
        {primareItem && primareItem.map((item:itemType)=>{
          
        return(
           <div key={item.id} className="w-screen h-screen ani flex">
      <Image className=' bg-blend-multiply ani rounded-lg w-2/4 h-full' width={700}  height={900} alt='image' quality={100} src={item.src} />
      <div className='  flex h-full w-2/4 flex-col justify-evenly items-center text-center'> 
        <h1 className='text-8xl  text-slate-200 '>{item.title}</h1>
        <button onClick={()=>router.push('/opinions')} className='mb-12 font-bold rounded-sm text-2xl   text-black bg-slate-300 border-black home-btn'>Continue Reading</button>
      </div>

    </div> )
   
        })}
    </>
  )
}

export default Home