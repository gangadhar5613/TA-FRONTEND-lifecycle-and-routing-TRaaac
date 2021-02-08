import Battle from './GitHub-battle/Battle'
import GitHubStars from './GitHubStars/GitHubStars'
import React from 'react'
import {BrowserRouter,Link,Route} from 'react-router-dom'


function Home(){
return (
    <section className='my-2'>
        <nav className='flex flex-row   items-center justify-center'>
        <Link to='/'>
            <li className='bg-black visited:text-purple-600 focus-visible:ring-2 focus-visible:ring-rose-500 hover:text-green-400 list-none mx-2 text-white py-2 px-6'>Home</li>
        </Link>
        <Link to='/github-stars'>
            <li  className='bg-black visited:text-purple-600 focus-visible:ring-2 focus-visible:ring-rose-500 hover:text-green-400 list-none mx-2 text-white py-2 px-6'>GitHubStars</li>
        </Link>
        <Link to='/github-battle'>
            <li  className='bg-black visited:text-purple-600 focus-visible:ring-2 focus-visible:ring-rose-500 hover:text-green-400 list-none mx-2 text-white py-2 px-6'>GitHub Battle</li>
        </Link>
        </nav>
    </section>
 )
}

export default Home