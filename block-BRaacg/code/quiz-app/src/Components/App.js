import React from 'react'
import Dashboard from './Dashboard'
import {BrowserRouter,Route} from 'react-router-dom'
import QuizPannel from './QuizPannel'
import Header from './Header'


function App (){
   

 return(
        <BrowserRouter>
        <Header />
         <Route path='/' exact>
             <Dashboard />
         </Route>
         <Route path='/quiz/:name' exact component={QuizPannel} / >
        </BrowserRouter>
    )

}

export default App