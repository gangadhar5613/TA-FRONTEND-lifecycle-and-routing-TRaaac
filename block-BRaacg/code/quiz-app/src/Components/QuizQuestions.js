import React from 'react'
import Loader from './Loader'
import QuizLayout from './QuizLayout'
class QuizQuiestions extends React.Component{
    constructor(props){
        super(props)
        this.state={
            QuizQuiestions:null
        }    
    }

    componentDidMount(){
        fetch(`https://opentdb.com/api.php?amount=10&category=${this.props.quizCategory}&difficulty=${this.props.level}&type=multiple`)
        .then((res) => res.json())
        .then((questions) => this.setState({QuizQuiestions:questions}) )
    }


    render(){
         return(

             <section>
                 {
                     (!this.state.QuizQuiestions ? <Loader /> :
                        <QuizLayout quizType={this.props.quizType} quizLevel={this.props.level} questions ={this.state.QuizQuiestions.results} />
                        )
                 }
             </section>
         )
       
    }
}

export default QuizQuiestions