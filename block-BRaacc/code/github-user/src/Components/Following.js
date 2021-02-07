import {Link} from 'react-router-dom';
import React from 'react';
import Loader from './Loader'
import User from './User'

class Following extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            following:null
        }
    }

    componentDidMount(){
        fetch(`https://api.github.com/users/${this.props.match.params.username}/following`)
        .then((res) => res.json())
        .then((following) => this.setState({following:following}))
    }


    render(){
      
        return(
        <>
                  <h2 className='text-2xl mx-5 my-5 font-bold text-green-600' >{this.props.match.params.username} Followed</h2>
            <section className='flex flex-col mx-5 '>
                {
                    (!this.state.following ? <Loader /> : 
                       
                        (
                            
                            this.state.following.map((following) => {
                                return (
                                   <>
   
                                     <Link to={`/users/${following.login}`}>
                                        <h2 className='font-bold bg-black text-white p-1 inline-block my-2'>{following.login}</h2>
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


export default Following