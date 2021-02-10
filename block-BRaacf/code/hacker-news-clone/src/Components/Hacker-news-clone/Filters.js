import React from 'react'
import ReactDOM from 'react-dom'
import News from './News'
import Loader from '../Loader'
import {
    InstantSearch,
    Hits,
    SearchBox,
  } from 'react-instantsearch-dom';

class Filters extends React.Component{
    constructor(props){
        super(props)
        this.state={
            newsIds :null,
           
        }
        
   
    }

   

    componentDidMount(){
        fetch(`https://hacker-news.firebaseio.com/v0/${this.props.match.params.filter}stories.json?print=pretty`)
        .then((res) => res.json())
        .then((news) => this.setState({newsIds:news}))
    }
  
    render(){
        return(
            <>
               {
                   (!this.state.newsIds ? <Loader /> :
                    <News newsIds={this.state.newsIds} />
                     )
               }

            </>
        )
    }
}


export default Filters




