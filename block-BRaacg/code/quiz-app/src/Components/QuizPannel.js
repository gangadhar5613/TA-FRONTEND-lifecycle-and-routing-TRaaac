import React from 'react'
import '../css/tailwind.css'
import QuizQuiestions from './QuizQuestions'


class QuizPannel extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            quizLevel:null,
            quizCategory:null,

            
        }
    }


    handleQuizLevel = (event) => {
        const level = event.target.dataset.level
        const quizType = this.props.match.params.name
        console.log(quizType)
        this.setState({
            quizLevel:level,
        })
         switch (quizType) {
             case 'sports':
                    this.setState({quizCategory:21})
                 break;
            case 'history':
                this.setState({quizCategory:23})
                break;
            case 'computers':
                this.setState({quizCategory:18})
                break;
             default:
                 break;
         }


    }

    render(){
        return(
            <section>
                    {((this.state.quizLevel && this.state.quizCategory)  ? <QuizQuiestions quizCategory={this.state.quizCategory} quizType={this.props.match.params.name} level={this.state.quizLevel} /> :
                                    
                     <section className='flex flex-col bg-gray-100 items-center h-screen '>
                        <div className='my-5'>
                            <h2 className='text-3xl text-red-600 font-bold'>Welcome to {this.props.match.params.name} Quiz </h2>
                        </div>
                        <div>
                            <h4 className='text-2xl font-bold my-2'>Here we have three difficulty levels,go with each one and test your knowledge</h4>
                        </div>
                        <div>
                            <h3 className='text-2xl text-green-600 font-bold text-center'>Select the level of Quiz</h3>
                        </div>
                        <div className='quiz-cards cursor-pointer flex flex-row h-96  items-center'>

                            <div className='flex h-40 w-full bg-yellow-400 text-white text-center flex-row shadow-xl my-2 transform hover:scale-90 motion-reduce:transform-none rounded-lg  mx-2'>
                                <div className='flex flex-col justify-between p-2'>
                                    <h3 className='my-1 text-2xl font-bold'>Easy Level</h3>
                                    <span className='text-xl my-1 text-red-800'>This quiz will test you the knowledge of Computers </span>
                                    <div className='items-end my-1'>
                                        <button onClick={this.handleQuizLevel} data-level='easy' className='text-md bg-black text-white rounded-lg py-2 px-6 hover:bg-red-600 hover:text-white'>Take This Quiz</button>
                                    </div>
                                </div>
                            </div>

                            <div className='flex h-40 w-full flex-row shadow-xl bg-yellow-400 text-center my-2 transform hover:scale-90 motion-reduce:transform-none rounded-lg  mx-2'>
                                <div className='flex flex-col justify-around  p-2'>
                                    <h3 className='my-1 text-2xl text-green-800 font-bold'>Medium</h3>
                                    <span className='text-xl my-1 text-red-800'>This quiz will test you the knowledge of History </span>
                                    <div className=' my-1'>
                                        <button onClick={this.handleQuizLevel} data-level='medium' className='text-md bg-black text-white rounded-lg py-2 px-6 hover:bg-red-600 hover:text-white'>Take This Quiz</button>
                                    </div>
                                </div>
                            </div>

                            <div className='flex h-40 w-full flex-row shadow-xl bg-yellow-400 text-center my-2 transform hover:scale-90 motion-reduce:transform-none rounded-lg  mx-2'>
                                <div className='flex flex-col justify-around text-white p-2'>
                                    <h3 className='my-1 text-2xl text-purple-800 font-bold'>Hard</h3>
                                    <span className='text-xl my-1 text-red-800'>This quiz will test you the knowledge of Sports </span>
                                    <div className=' my-1 '>
                                        <button onClick={this.handleQuizLevel} data-level='hard' className='text-md bg-black text-white rounded-lg py-2 px-6 hover:bg-red-600 hover:text-white'>Take This Quiz</button>
                                    </div> 
                                </div>
                            </div>
                        </div>
                      </section>
                    )}
            </section>
        )
    }
}


export default QuizPannel