
type itemType={
  id:number;
  title:string;
  body:string;
  author:string;
  src:string;
}
const Open = (props:any) => {
 const {data,isOpen,setIsOpen,selectedBlog,setSelectedBlog,id}=props
     function handleDetailClick(){
        const selectedItem=data.find((item:itemType)=>{
      return item.id===id
     })
     setIsOpen(true)
     setSelectedBlog(selectedItem)
     }
   
  return (
    <>
  <button onClick={handleDetailClick} className="px-4 py-2 bg-slate-50 w-2/4 text-xl text-purple-500 rounded-xl ">Detail</button>
    </>
  )

}
export default Open 