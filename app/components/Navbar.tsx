import Link from 'next/link'
const Navbar = () => {
  return (
    <div className='navbar  flex w-full justify-start shadow-md shadow-purple-800 items-center h-16 text-xl font-bold    '> 
     
      <Link  className='navbar-heade text-purple-800' href="/create">Create</Link>
        <Link className='ml-4 	'   href="/">Home</Link>
        <Link className='ml-4'  href='/about'>About</Link>
        <Link className='ml-4' href="/add>Add</Link>
    </div>
  )
}

export default Navbar