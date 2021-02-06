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
    componentWillUnmount(){
        this.setState({
            followers:null
        })
    }

    render(){
      
        return(
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
        )
    }
}


export default Followers