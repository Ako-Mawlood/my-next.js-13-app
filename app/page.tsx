"use client"
import UseFetch from './Hooks/UseFetch'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {

 const {data,setData ,error ,loading}:any =UseFetch("http://localhost:8000/data")
 type itemType={id:number,title:string,body:string,author:string,src:string};
  
 return (
  <>
       {data && <h1 className="font-bold m-5  text-xl text-purple-600">All Published...</h1>}

    <main className='w-full flex justify-center  flex-wrap '>
     {data && data.map((item:itemType)=>{
       return(
          <div key={item.id} className=" card shadow-md shadow-gray-700 flex flex-col justify-start mx-3 h-96 my-9 rounded-3xl bg-purple-500 p-3">
          
            <div className='flex justify-center items-start w-full h-32'>
      
             <Image width={300} height={150} alt='publisher' src={item.src}  quality={100}  className='rounded-xl shadow-md  shadow-black m-3'/>
              
              <div className='flex flex-col w-full h-full items-center justify-evenly '> 
                <h1 className='text-xl  '>{item.title}</h1>
                <h2 className='font-bold text-xl '>{item.author}</h2>
              </div>
          
            </div>
            
            <p className=' mt-20'>{item.body}</p>

          </div>
        
       ) 
     })}
    {loading && <h1 className=' font-bold m-9 text-purple-800'>Loading...</h1>}
    {error && <h1 className='text-red m-9 font-bold>'>{error}</h1>}
     </main>
     </>
  )
}
