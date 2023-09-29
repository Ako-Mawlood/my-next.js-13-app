"use client"
import Link from 'next/link';
import {useState} from 'react'
import { usePathname } from 'next/navigation'
import Search from './Search';
const Navbar = () => {
   const pathname=usePathname()
   const [isSearchOn,setIsSearchOn]=useState(false)
  return (
    <nav className=' font-Montserrat text-lg flex justify-between items-center text-center w-4/12 h-16 absolute top-0 right-24'>
      <Link className={pathname==="/"?"active-link":""} href="/">Home</Link>
      <Link className={pathname==="/opinions"?"active-link":""} href='/opinions'>Opinions</Link>
      <Link className={pathname==="/add"?"active-link":""} href='/add'>Add</Link>
      <Link className={pathname==="/contact"?"active-link":""}href='/Contact'>Contact</Link>
      {isSearchOn && <Search isSearchOn={isSearchOn}/>}
      {pathname === "/opinions" && 
    <button onClick={()=>setIsSearchOn(true)}>
     <div className='p-2 rounded-full svg  text-center'>
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
          <path d="M20.87 19.29l-4.88-4.88c1.02-1.27 1.64-2.88 1.64-4.61 0-4.24-3.44-7.68-7.68-7.68-4.24 0-7.68 3.44-7.68 7.68s3.44 7.68 7.68 7.68c1.73 0 3.34-0.62 4.61-1.64l4.88 4.88c0.39 0.39 1.02 0.39 1.41 0s0.39-1.02 0-1.41zM9.68 16.68c-3.31 0-6-2.69-6-6s2.69-6 6-6c3.31 0-6 2.69-6 6s-2.69 6-6 6z" />
        </svg>
      </div>
    </button>
     }
      
    </nav>
  );
};

export default Navbar;


