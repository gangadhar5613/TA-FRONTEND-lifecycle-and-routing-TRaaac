import {Link} from 'react-router-dom';
import React from 'react';
import Loader from './Loader'

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
    componentWillUnmount(){
        this.setState({
            following:null
        })
    }

    render(){
      
        return(
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
        )
    }
}


export default Following