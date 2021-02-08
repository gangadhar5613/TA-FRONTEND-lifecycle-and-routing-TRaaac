import React from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter,Route} from 'react-router-dom'


import Buttons from './Buttons'

class GitHubStars extends React.Component{
   constructor(props){
       super(props)
   }

   render(){
       return(
           <Buttons />
       )
   }
    
}


export default GitHubStars