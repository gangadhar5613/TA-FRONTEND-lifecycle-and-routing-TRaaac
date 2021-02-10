import React from 'react'
import Buttons from '../GitHubStars/Buttons'
import Board from './Board'
import Winner from './Winner'

class Battle extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            user1:'',
            user2:'',
           user1Data:null,
           user2Data:null,
           battleStarted:false,
           battlereset:false
        }
    }

    handleUser = (event) => {
        const {name,value} = event.target
        this.setState({
            [name]:value
        })
  }

  handleSubmit = (event) => {
    let username = event.target.dataset.user
   let userdata = event.target.dataset.userdata
    fetch(`https://api.github.com/users/${this.state[username]}`)
    .then((res) => res.json())
    .then((user) => this.setState({[userdata]:user}))
   }

   handleBattle = () => {
    this.setState({
        battleStarted:!this.state.battleStarted
    })
    }

    handleReset = () =>{
        this.setState({
           battleStarted:false,
           user1:'',
           user2:'',
           user1Data:null,
           user2Data:null
        })
    }
    render(){
        return(
           <section>
               {
                   ((this.state.battleStarted) ? <Winner handleReset={this.handleReset} state={this.state} user1={this.state.user1Data} user2={this.state.user2Data}  /> : <Board handleBattle={this.handleBattle} state={this.state} handleSubmit={this.handleSubmit} handleUser={this.handleUser} />)
               }
           </section>
        )
    }
}


export default Battle