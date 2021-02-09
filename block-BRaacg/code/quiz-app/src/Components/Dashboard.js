import React from 'react'
import {Link} from 'react-router-dom'

function QuizPannel (props){

        return(
            <section className='flex flex-col bg-gray-100 items-center h-screen '>
                <div className='my-5'>
                    <h2 className='text-3xl text-red-600 font-bold'>Welcome to Quiz Application</h2>
                </div>
                <div className='quiz-cards cursor-pointer flex flex-col  h-full my-3 items-center'>

                    <div className='flex h-40 w-full flex-row shadow-xl my-2 transform hover:scale-90 motion-reduce:transform-none rounded-lg  mx-2'>
                         <div className='logo flex items-center justify-center w-60 h-40 bg-yellow-500 text-white'>
                             <i className="fas h-20 text-8xl  fa-laptop"></i>
                         </div>
                         <div className='flex flex-col mx-2 justify-around items-start p-2'>
                             <h3 className='my-2 text-2xl font-bold'>Quiz on Computers</h3>
                             <span className='text-xl my-1 text-gray-600'>This quiz will test you the knowledge of Computers </span>
                            <Link to='/quiz/computers'>
                             <div className='items-end'>
                                 <button  className='text-md bg-black text-white rounded-lg py-2 px-6 hover:bg-red-600 hover:text-white'>Take This Quiz</button>
                             </div>
                            </Link>
                         </div>
                    </div>

                    <div className='flex h-40 w-full flex-row shadow-xl my-2 transform hover:scale-90 motion-reduce:transform-none rounded-lg  mx-2'>
                         <div className='logo flex items-center justify-center w-60 h-40 bg-green-600 text-white'>
                             <i className="fas h-20 text-8xl  fa-monument"></i>
                         </div>
                         <div className='flex flex-col mx-2 justify-around items-start p-2'>
                             <h3 className='my-2 text-2xl font-bold'>Quiz on History</h3>
                             <span className='text-xl my-1 text-gray-600'>This quiz will test you the knowledge of History </span>
                            <Link to='/quiz/history'>
                             <div className='flex justify-between'>
                                 <button className='text-md bg-black text-white rounded-lg py-2 px-6 hover:bg-red-600 hover:text-white'>Take This Quiz</button>
                             </div>
                             </Link>
                         </div>
                    </div>

                    <div className='flex h-40 w-full flex-row shadow-xl my-2  transform hover:scale-90 motion-reduce:transform-none rounded-lg  mx-2'>
                         <div className='logo flex  items-center justify-center w-60 h-40 bg-purple-500 text-white'>
                             <i className="fas h-20 text-8xl  fa-running"></i>
                         </div>
                         <div className='flex flex-col justify-around items-start p-2'>
                             <h3 className='my-2 text-2xl font-bold'>Quiz on Sports</h3>
                             <span className='text-xl my-1 text-gray-600'>This quiz will test you the knowledge of Sports </span>
                            <Link to='/quiz/sports'>
                             <div className='items-end'>
                                 <button className='text-md bg-black text-white rounded-lg py-2 px-6 hover:bg-red-600 hover:text-white'>Take This Quiz</button>
                             </div>
                            </Link> 
                         </div>
                    </div>




                </div>
            </section>
        )

}

export default QuizPannel