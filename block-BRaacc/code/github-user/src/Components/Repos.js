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

    componentWillUnmount(){
        this.setState({
            repo:null
        })
    }

    render(){
        console.log(this.state.repos)
        return(
            <section className='flex flex-col mx-5 '>
                {
                    (!this.state.repos ? <Loader /> : 
                       
                        (
                            
                            this.state.repos.map((repo) => {
                                return (
                                   <>
                                         <a target='_blank' className='font-bold my-2'>{repo.owner.login}/{repo.name}</a>
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


export default Repos