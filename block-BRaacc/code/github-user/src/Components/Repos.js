import {Link} from 'react-router-dom';
import React from 'react';
import Loader from './Loader'

class Repos extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            repos:null
        }
    }

    componentDidMount(){
        fetch(`https://api.github.com/users/${this.props.match.params.username}/repos`)
        .then((res) => res.json())
        .then((repos) => this.setState({repos:repos}))
    }



    render(){
        
        return(
        <>
          <h2 className='text-2xl mx-5 my-5 font-bold text-green-600' >{this.props.match.params.username}'s Public Repos</h2>
            <section className='flex flex-col mx-5 '>
                {
                    (!this.state.repos ? <Loader /> : 
                       
                        (
                            
                            this.state.repos.map((repo) => {
                                return (
                                   <>
                                         <a target='_blank' rel="noreferrer" href={`https://github.com/${repo.owner.login}/${repo.name}`} className='font-bold my-2'>{repo.owner.login}/{repo.name}</a>
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


export default Repos