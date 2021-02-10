import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import News from './News'
import Loader from '../Loader'
import { InstantSearch, Highlight,SearchBox, Hits ,ClearRefinements,RefinementList,} from 'react-instantsearch-dom';

class Home extends React.Component{
    constructor(props){
        super(props)
        
        this.state={
            newsIds :null,
            filter:'top'
        }

        
   
    }

    

    componentDidMount(){
        fetch(`https://hacker-news.firebaseio.com/v0/${this.state.filter}stories.json?print=pretty`)
        .then((res) => res.json())
        .then((news) => this.setState({newsIds:news}))
    }



    componentWillUnmount(){
        this.setState({
            filter:'top',
            newsIds:null
        })
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


export default Home