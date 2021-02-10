import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter,Route} from 'react-router-dom'
import GitHubStars from './Components/GitHubStars/GitHubStars'
import Battle from './Components/GitHub-battle/Battle'

import Header from './Components/Home'


ReactDOM.render(
    <BrowserRouter>
        <Route path='/'  activeClassName='is-active'>
            <Header />
        </Route>
        <Route path='/github-stars'  activeClassName='is-active'  > <GitHubStars /> </Route>
        <Route path='/github-battle'  activeClassName='is-active'  > <Battle /> </Route>
    </BrowserRouter>
,document.getElementById('root'))