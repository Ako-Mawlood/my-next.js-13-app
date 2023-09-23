import { useRouter } from "next/router"
import Primare from "../components/Primare"
import Blogs from"../components/Blogs"
const Opinions = () => {
  
  return (
   <div className="ako">
   <Primare />
   <div className="flex w-full justify-between mt-4 flex-wrap ">
     <Blogs />
   </div>
   
   </div>
  )
}

export default Opinions