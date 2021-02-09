import React from 'react'
import QuizResult from './QuizResult'

class QuizLayout extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            questions:this.props.questions,
            lastQuestion:0,
            currentQuestion:1,
            progress:10,
            userAnswers :[],
            score:0,
            activeAnswer:'',
            isQuizSubmitted:false,
            
        }        
    }


    handleAnswer = (event) => {
        const currentQuestion= event.currentTarget.dataset.question
        const selectedAnswer= event.currentTarget.dataset.selected
        console.log(event.currentTarget.dataset.selected)
        console.log(event.currentTarget.dataset.question)
        let selectedQuestionAndAnswers = [
            {
                question:currentQuestion,
                selectedAnswer:selectedAnswer,
               
            }
        ]
           
        this.setState({
            userAnswers:this.state.userAnswers.concat(selectedQuestionAndAnswers),
            activeAnswer:selectedAnswer
        })
    }

    handleQuestion = () => {
       if( (this.state.userAnswers.length !== this.state.currentQuestion)){
            alert('Please select the answer')
           
       }else{
        this.setState({
        
            lastQuestion:this.state.lastQuestion+1,
            currentQuestion:this.state.currentQuestion+1,
            progress:this.state.progress+10
        })
         
       }
        
         
    }

    handleSubmit = () => {
       
      this.state.userAnswers.forEach((selected) => {
          const questionId = selected.question
          const answer = selected.selectedAnswer

          const question = this.state.questions[questionId]
                   if(question.correct_answer === answer){
                       this.setState((state) => {
                           return{
                                 score:state.score+1,
                                 isQuizSubmitted:true
                           }
                       })
                       
                   }


      })

      console.log(this.state.score)

    }

    render(){
        return(
        <>
          {
              (this.state.isQuizSubmitted ? <QuizResult userAnswers={this.state.userAnswers} quizCategory={this.props.quizType} quizLevel={this.props.quizLevel} userScore={this.state.score} questions={this.state.questions} /> :
                
            <section className='flex flex-col h-screen items-center  bg-gray-100'>
                <div className='flex flex-row justify-evenly w-full my-10'>
                    <div className='flex bg-yellow-500  py-2 px-6 items-center mx-5 flex-row'>
                        <h3 className='text-white font-bold mx-2 text-xl '>Quiz Category:</h3>
                        <h2 className='font-bold text-green-800 text-lg'>{this.props.quizType}</h2>
                    </div>
                    <div className='flex py-2 px-8 bg-red-500 items-center flex-row'>
                        <h3>Quiz Level:</h3>
                        <h2>{this.props.quizLevel}</h2>
                    </div>
                </div>
                <div className='w-full px-60'>
                    <div className='progress-bar flex flex-col justify-start '>
                        <h3>Question {this.state.currentQuestion}/10</h3>
                        <div className='rounded-lg bg-white shadow-xl h-4 flex items-center py-0'>
                            <progress className='w-full bg-gray-100 h-2  rounded-full overflow-hidden' value={`${this.state.progress}`} max='100'></progress>
                        </div>
                    </div>
                    <div className='my-10 shadow-xl flex flex-col py-5 px-4'>
                        {
                            this.state.questions.slice(this.state.lastQuestion,this.state.currentQuestion).map((question,index) => {
                                const answers = [question.correct_answer,...question.incorrect_answers]
                                return(
                                    <>
                                        <div className='question py-4 flex '>
                                            <h3 className='mx-2 font-bold text-xl '>{this.state.currentQuestion})</h3>
                                            <h2 className='text-xl font-bold'>{question.question}</h2>
                                        </div>
                                        <div className='answers py-4   ' >
                                            {
                                                answers.map((answer,indexAnswer) => {
                                                    return(
                                                        <div  onClick={this.handleAnswer}   data-selected={answer} data-question={this.state.lastQuestion}   className={this.state.activeAnswer === `${answer}` ? 'flex flex-row cursor-pointer  bg-black text-white    hover:text-white  h-10 items-center px-4 font-bold my-4  w-96': 'flex flex-row cursor-pointer  hover:bg-black    hover:text-white  h-10 items-center px-4 font-bold text-white my-4 bg-yellow-500 w-96'}>
                                                            <h3 className='cursor-not-allowed'>{indexAnswer+1}.</h3>
                                                            <div  className='w-full cursor-not-allowed'>
                                                                <h2  className='cursor-pointer  '>{answer}</h2>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                       {
                                           (this.state.currentQuestion < 10 ?   

                                               <div className='font-bold flex justify-end'>
                                                    <button onClick={this.handleQuestion} className='bg-black text-white py-2 px-8 hover:bg-green-700 hover:text-gray-200'>Next Question</button>
                                                </div> 

                                            :
                                                <div className='font-bold flex justify-end'>
                                                    <button onClick={this.handleSubmit} className='bg-black text-white py-2 px-8 hover:bg-green-700 hover:text-gray-200'>Submit</button>
                                                </div> 
                                            )
                                       }
                                       
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        )
        }
        </>
        )
    }
}

export default QuizLayout