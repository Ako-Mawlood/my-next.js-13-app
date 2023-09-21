import Link from 'next/link'
const Navbar = () => {
  return (
    <div className='navbar  flex w-full justify-end shadow-md shadow-purple-400 items-center h-16 text-3xl     '> 
        <h2 className='text-purple-600 ml-4 mr-auto'>Shaping Opinios Online</h2>
        
        <Link className='ml-4 text-black'   href="/">Home</Link>
        <Link className='ml-4 text-black'  href='/about'>About</Link>
        <Link className='mx-4  text-purple-600'  href='/add'>Add</Link>
    </div>
  )
}

export default Navbar