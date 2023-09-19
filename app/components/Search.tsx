import {useState} from "react"
 

const Search = ({data,setData}) => {
  const [searchValue,setSearchValue]=useState('')
  type itemType={
     title:string,
    body:string,
    author:string,
    src:string
  }
  function handleSearchSubmit(e:any){
      e.preventDefault()
     const filtaredData=data.filter((item:itemType)=>{
         const titleLowerCase=item.title.toLowerCase()
         const searchValueLowerCase=searchValue.toLowerCase()
         return titleLowerCase===searchValueLowerCase
   })
     setData(filtaredData)
  }
 
 
    return (
    <form onSubmit={(e)=>handleSearchSubmit(e)} className="flex w-full justify-center items-center bg-purple-100 text-purple-500">
        <input className="p-5 w-96 bg-white text-xl rounded-2xl" onChange={(e)=>setSearchValue(e.target.value)} value={searchValue} placeholder='Search for titles...' type="text" />
        <input type="submit" value="search" className="p-4 ml-2 rounded-3xl text-bold text-lg text-white bg-purple-500 bg-perpule-600 text-center" />
    </form>
  )
}

export default Search