import React from 'react'
import {Link,Route,BrowserRouter,NavLink} from 'react-router-dom'
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, Highlight,SearchBox, Hits ,ClearRefinements,RefinementList,} from 'react-instantsearch-dom';
const searchClient = algoliasearch('VMXQNW9NMO', '8fa2fa7408efbc6e41ba9366d9159924');
class Header extends React.Component{
    constructor(props){
        super(props)
       

    }
    render(){
        return(
        <>
            <header className='mx-10 py-2 bg-yellow-500 flex items-center  justify-between '>
                <div className='mx-5'>
                   <Link to='/'>
                       <h1 className='cursor-pointer text-2xl text-white font-bold '>Hacker News</h1>
                   </Link>
                </div>
                   <nav  className='flex flex-row  list-none mx-5 text-md font-bold '>
                        <Link to={`/new`}>
                            <li data-filter='new' className='mx-2 cursor-pointer'>New</li>
                        </Link>

                        <Link to={`/past`}>
                            <li data-filter='past'  className='mx-2 cursor-pointer'>Past</li>
                        </Link>

                        <Link to='/comments'>
                             <li data-filter='comments' className='mx-2 cursor-pointer'>Comments</li>
                        </Link>

                        <Link to='/ask'>
                            <li data-filter='ask' className='mx-2 cursor-pointer'>Ask</li>
                        </Link>

                        <Link to='/job'>
                             <li data-filter='jobs' className='mx-2 cursor-pointer'>Jobs</li>
                        </Link>
                   </nav>
            </header>

        </>
        )
    }
}




export default Header