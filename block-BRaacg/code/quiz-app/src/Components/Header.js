import {Link} from 'react-router-dom'

function Header (){
    return(
        <header className='flex flex-row justify-between mx-5 py-2 px-2 bg-yellow-300'>
            <div >
                <Link to='/'>
                   <h1 className='text-3xl font-bold text-green-800'>Quiz App</h1>
                </Link>
            </div>
            <div>
                <nav>
                <Link to='/'>
                    <li className='list-none text-2xl font-bold  text-black'>Home</li>
                </Link>
                </nav>
            </div>
        </header>
    )
}

export default Header