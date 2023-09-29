
import Image from "next/image";
import DeleteBlog from "../components/DeleteBlog"
import { itemType } from '../Hooks/itemType'

    type propType={
        setData:itemType;
        isPopupOpen:boolean;
        data:itemType;
        setIsPopupOpen:boolean; 
        setSelectedItem:itemType;
        selectedItem:null|itemType;
    }
const PopUp = (props:propType) => {
    const {setData,isPopupOpen,data,setIsPopupOpen,setSelectedItem,selectedItem}=props
    function close():void{
        setIsPopupOpen(false)
    }
  return (
   <> 

   {selectedItem &&
   <>
   <div onClick={close} className="blured"></div>
    <div  className='flex justify-between popup   text-slate-900  p-4 pr-4   rounded-xl bg-slate-300'>
        <Image className="rounded-xl"  src={selectedItem.src} placeholder = 'blur' blurDataURL={selectedItem.src}  width={400} height={450} alt="iamge" quality={100}/>
        <div className="flex ml-2 flex-col w-full justify-center items-center ">
            <h1 className="text-2xl w-50  text-black font-bold">{selectedItem.title}</h1>
            <h1 className="date my-2">{selectedItem.date}</h1>
            <h1 className="w-50 pl-3 my-8">{selectedItem.body}</h1>
            <div>
             <button className="px-20 rounded-sm mt-8 py-4 cursor-pointer text-xl bg-slate-400" onClick={close}>Close</button>
             <DeleteBlog setData={setData} data={data} setIsPopupOpen={setIsPopupOpen} selectedItem={selectedItem} />
            </div>       
        </div>

    </div>
   </>
}</>
  )
}

export default PopUp