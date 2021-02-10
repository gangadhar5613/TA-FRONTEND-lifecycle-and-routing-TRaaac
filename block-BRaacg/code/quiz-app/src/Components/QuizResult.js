import React from 'react'

function QuizResult (props){


        return(
        <article  className=' bg-gray-100 py-5 justify-center items-center flex flex-col'>
            <section className='   my-8 justify-center'>
                <div>
                </div>
                <div className='flex items-center flex-col'>
                     <div className='bg-yellow-500 text-center my-2 inline-block p-2'>
                        <i className="fas text-8xl text-white  fa-trophy"></i>
                     </div>
                     <div>
                         <h3 className='text-4xl my-2 text-purple-700 font-bold'>Quiz Result</h3>
                     </div>
                     <div className='text-center'>
                         <h2 className='font-bold items-center text-2xl mx-2'>Quiz Category:<span className='text-green-600 mx-2 text-2xl'>{props.quizCategory.toUpperCase()}</span></h2>
                         <h3 className='font-bold text-2xl mx-2'>Quiz Difficulty Level:<span className='text-red-600 mx-2 text-2xl'>{props.quizLevel.toUpperCase()}</span></h3>
                     </div>
                     <div className='flex flex-row my-2 items-center'>
                         <h3 className='mx-2 text-2xl font-bold'>Final Score:</h3>
                         <h2 className='text-4xl font-bold text-green-500'>{props.userScore}</h2>
                     </div>
                </div>
               
            </section>
            <section className='flex-1'>
                    <div className='all-questions'>
                            <table class="table-auto mx-20 border-2 border-green-500">
                                <thead className='border-2 border-red-500'>
                                    <tr>
                                    <th className='border-r h-10 border-red-700'>Question</th>
                                    <th className='border-r border-red-700'>Correct Answers</th>
                                    <th className='border-r border-red-700'>You Selected</th>
                                    <th className='border-r border-red-700'>Right Or Wrong</th>
                                    </tr>
                                </thead>
                                <tbody className='border-2 text-center border-red-500'>
                               {
                                   props.questions.map((question,index) => {
                                       question.userAnswers = [...props.userAnswers]
                                       const selectedAnswers = props.userAnswers
                                       console.log(question)
                                       return(
                                            <tr className=' border-b-2 border-blue-600 my-10'>
                                                <td className='border-r  h-20  border-purple-700'>{question.question}</td>
                                                <td  className='border-r   border-purple-700 w-60'>{question.correct_answer}</td>
                                               <td  className='border-r   border-purple-700 w-60'>{selectedAnswers[index].selectedAnswer}</td>
                                               <td  className='border-r   border-purple-700 w-60'>{(question.correct_answer === selectedAnswers[index].selectedAnswer) ? <i className="fas text-2xl text-green-600 fa-check-circle"></i> : <i className="fas text-red-700 text-2xl fa-times-circle"></i>}</td>
                                            </tr>
                                       )
                                   })
                               }
                                </tbody>
                            </table>
                        </div>
            </section>
        </article>
        )

}

export default QuizResult