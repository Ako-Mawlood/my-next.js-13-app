
import Image from "next/image";
type itemType={
    id:number;
    title:string;
    body:string;
    author:string;
    src:string;
    date:string}
    type propType={
        isPopupOpen:boolean;
        data:any;
        setIsPopupOpen:any; 
        setSelectedItem:any;
        selectedItem:null|itemType;
    }
const PopUp = (props:propType) => {
    const {isPopupOpen,data,setIsPopupOpen,setSelectedItem,selectedItem}=props
     console.log(selectedItem)
    
  return (
   <> 
   
   {selectedItem &&
    <div  className={'popup blur-none bg-slate-600'}>
        <Image src={selectedItem.src} width={400} height={500} alt="iamge" quality={100}/>
        <h1>{selectedItem.title}</h1>
        <h1>{selectedItem.date}</h1>
        <h1>{selectedItem.body}</h1>
        <button onClick={()=>setIsPopupOpen(false)}>Close</button>
    </div>
}</>
  )
}

export default PopUp