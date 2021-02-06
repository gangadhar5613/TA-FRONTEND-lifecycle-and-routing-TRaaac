import React from 'react'
import {Link} from 'react-router-dom'
class UserSearch extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username:''
        }
        this.handleInput = this.handleInput.bind(this)
    }
    
    handleInput(event){
      let value = event.target.value
      console.log(value)
        this.setState({
            username:value
        })

    }

    render(){
        return(
            <section className='flex flex-col items-center justify-center  my-10'>
                <h3 className='text-4xl my-5'>Enter GitHub Username</h3>
                <div className='flex flex-row'>
                     <input onChange={ this.handleInput}  className='p-1 border-2 border-gray-200 w-96 mx-2 hover:border-4 hover:border-blue-600 outline-none' type='text' id='user' value={this.state.username} placeholder='Enter username'></input>
                     <Link to={`/users/${this.state.username}`}>
                        <button className='text-2xl bg-green-700  text-white px-6 py-2' type='submit' id='submit-btn'>Submit</button>
                     </Link>
                </div>
            </section>
        )
    }
}

export default UserSearch