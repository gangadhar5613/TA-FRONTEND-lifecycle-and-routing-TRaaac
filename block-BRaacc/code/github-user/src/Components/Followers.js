import {Link} from 'react-router-dom';
import React from 'react';
import Loader from './Loader'

class Followers extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            followers:null
        }
    }

    componentDidMount(){
        fetch(`https://api.github.com/users/${this.props.match.params.username}/followers`)
        .then((res) => res.json())
        .then((followers) => this.setState({followers:followers}))
    }



    render(){
      
        return(
        <>
                  <h2 className='text-2xl mx-5 my-5 font-bold text-green-600' >{this.props.match.params.username}'s Followers</h2>
            <section className='flex flex-col mx-5 '>
                {
                    (!this.state.followers ? <Loader /> : 
                       
                        (
                            
                            this.state.followers.map((follower) => {
                                return (
                                   <>
   
                                     <Link to={`/users/${follower.login}`}>
                                        <h2 className='font-bold bg-black text-white p-1 inline-block my-2'>{follower.login}</h2>
                                     </Link>
                                   </>
   
                                )
                             })
                        )
                    )
                }
            </section>
        </>
        )
    }
}


export default Followers