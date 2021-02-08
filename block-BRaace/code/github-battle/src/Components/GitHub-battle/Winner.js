import React from 'react'
import Board from './Board'
import Loader from '../GitHubStars/Loader'

class Winner extends React.Component{
    constructor(props){
        super(props)
        this.state={
              user1Score:0,
              user2Score:0,
              user1Status:false,
              user2Status:false
        }
    }

    componentDidMount(){
        let user1Score = (this.props.user1.public_repos + this.props.user1.following + this.props.user1.followers)
        let user2Score = (this.props.user2.public_repos + this.props.user2.following + this.props.user2.followers)
             if(user1Score > user2Score){
                 this.setState({
                     user1Status:true,
                     user1Score:user1Score,
                     user2Score:user2Score
                 })
             }else{
                 this.setState({
                     user2Status:true,
                     user1Score:user1Score,
                     user2Score:user2Score
                 })
             }            

    }
 

    render(){
        return(
            <section className='my-10'>
                {
                    ((!this.props.user1 && !this.props.user2) ? <Loader /> :
                    <>
                      <div className='flex flex-row items-center justify-center'>
                            <div className='text-center flex flex-col items-center justify-around   bg-gray-200 shadow-xl w-96 h-96'>
                                <h2 className='text-2xl font-bold'>{this.state.user1Status ? 'Winner' : 'Looser'}</h2>
                                <img className='w-20 rounded-full'  src={this.props.user1.avatar_url} alt='user' ></img>
                                <span><span className='font-bold mx-1'>Score:</span>{this.state.user1Score}</span>
                                <h2>{this.props.user1.login}</h2>
                                <h4><span className='font-bold text-green-700 mx-1'>Name:</span>{this.props.user1.name}</h4>
                                <address><span className='font-bold text-blue-500 mx-1'>Location:</span>{this.props.user1.location}</address>
                                <h3><span className='font-bold text-blue-500 mx-1'>Company:</span>{this.props.user1.company}</h3>
                                <h3><span className='font-bold text-blue-500 mx-1'>Following:</span>{this.props.user1.following}</h3>
                                <h3><span className='font-bold text-blue-500 mx-1'>Followers:</span>{this.props.user1.followers}</h3>
                                <h4><span className='font-bold text-blue-500 mx-1'>Public_repos:</span>{this.props.user1.public_repos}</h4>
                            </div>
                            <div className='text-center mx-6 flex flex-col justify-around items-center  bg-gray-200 shadow-xl w-96 h-96'>
                                <h2 className='text-2xl font-bold'>{this.state.user2Status ? 'Winner' : 'Looser'}</h2>
                                <img className='w-20 rounded-full' src={this.props.user2.avatar_url} alt='user' ></img>
                                <span><span className='font-bold mx-1'>Score:</span>{this.state.user2Score}</span>
                                <h2>{this.props.user2.login}</h2>
                                <h4><span className='font-bold text-green-700 mx-1'>Name:</span>{this.props.user2.name}</h4>
                                <address><span className='font-bold text-blue-500 mx-1'>Location:</span>{this.props.user2.location}</address>
                                <h3><span className='font-bold text-blue-500 mx-1'>Company:</span>{this.props.user2.company}</h3>
                                <h3><span className='font-bold text-blue-500 mx-1'>Following:</span>{this.props.user2.following}</h3>
                                <h3><span className='font-bold text-blue-500 mx-1'>Followers:</span>{this.props.user2.followers}</h3>
                                <h4><span className='font-bold text-blue-500 mx-1'>Public_repos:</span>{this.props.user2.public_repos}</h4>
                            </div>
                      </div>
                      <div className='flex justify-center my-5'>
                          <button onClick={this.props.handleReset} className='bg-black text-white text-2xl py-2 px-6'>Reset</button>
                      </div>
                    </>
                     )
                }
            </section>
        )
    }
}


export default Winner