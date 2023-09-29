"use client"

import Image from 'next/image'
import {useRouter} from 'next/navigation'
import useNewestBlog from './Hooks/useNewestBlog'
const Home = () => {
  const {title,url}=useNewestBlog()
  
     const router = useRouter()
          
        return(
           <div  className="w-screen h-screen ani flex">
      <Image className=' bg-blend-multiply ani rounded-lg w-2/4 h-full' width={700}  height={900} alt='image' quality={100} src={url} />
      <div className='  flex h-full w-2/4 flex-col justify-evenly items-center text-center'> 
        <h1 className='text-8xl  text-slate-200 '>{title}</h1>
        <button onClick={()=>router.push('/opinions')} className='mb-12 font-bold rounded-sm text-2xl   text-black bg-slate-300 border-black home-btn'>Continue Reading</button>
      </div>
       
    </div> )
   
      
  
}

export default Home