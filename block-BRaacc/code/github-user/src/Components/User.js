import React from 'react'
import { Link,BrowserRouter, Route } from 'react-router-dom'
import Loader from './Loader'
import Repos from './Repos'


class User extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            user:null
        }
    }

    componentDidMount(){
        fetch(`https://api.github.com/users/${this.props.match.params.username}`)
        .then((res) => res.json())
        .then((user) => this.setState({user:user}))
        
        
    }

    componentWillUnmount(){
        this.setState({
            user:null
        })
    }

    render(){
        console.log(this.state.user)
        return(
            <section className='border-4 border-gray-200'>
                {
                !this.state.user ? <Loader /> :
                 <section className='flex flex-col items-center justify-center text-center my-5'>
                     <div className='flex flex-col items-center justify-center'>
                         <div>
                             <img className='w-20 rounded-full h-20' src={this.state.user.avatar_url} alt='user'></img>
                         </div>
                         <div className=''>
                             <h2 className='text-2xl font-bold'>{this.state.user.name}</h2>
                             <h3 className='font-medium text-sm'>{this.state.user.bio}</h3>
                         </div>
                     </div>
                     <div className='flex flex-row justify-around my-2 w-full'>
                         <div>
                             <Link to={`/users/${this.state.user.login}/repos`} >
                                <h3>{this.state.user.public_repos}</h3>
                                <span className='text-1xl font-bold text-red-500'>Public Repos</span>
                             </Link>
                         </div>
                         <div>
                             <Link to={`/users/${this.state.user.login}/followers`} >
                                <h3>{this.state.user.followers}</h3>
                                <span className='text-1xl font-bold text-red-500'>Followers</span>
                             </Link>
                         </div>
                         <div>
                             <Link to={`/users/${this.state.user.login}/following`} >
                                <h3>{this.state.user.following}</h3>
                                <span className='text-1xl font-bold text-red-500'>Following</span>
                             </Link>
                         </div>
                     </div>
                 </section>

                 }
              
            </section>
        )
    }
}




export default User