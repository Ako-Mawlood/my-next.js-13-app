
import styles from './page.module.css'
import Link from 'next/link'
export default function Home() {
  return (
    <main className='container'>

      <div className='dashbourd-div '>
     <h2 className='text-3xl  font-bold  '>dashbourd</h2>
     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, magnam rem quisquam aliquam illo eum culpa vel, expedita vitae eius tempore iure modi eligendi quia totam, voluptatibus consectetur suscipit perspiciatis!</p>
      <Link className="view-tickts-btn" href='/about'><button >View Tickets</button></Link>
    </div>
    <h4>Company Updates</h4>
    <div className=" parag"><h5>new member of the web devteam...</h5><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis saepe fuga asperiores architecto mollitia autem cupiditate repellat voluptatum.</p></div>
    <div className="parag"><h5>new member of the web devteam...</h5><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis saepe fuga asperiores architecto mollitia autem cupiditate repellat voluptatum.</p></div>
    <div className="parag"><h5>new member of the web devteam...</h5><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis saepe fuga asperiores architecto mollitia autem cupiditate repellat voluptatum.</p></div>
    </main>
  )
}
