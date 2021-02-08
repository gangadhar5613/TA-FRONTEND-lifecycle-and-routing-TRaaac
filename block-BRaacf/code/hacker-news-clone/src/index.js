import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom'

import App from './Components/App';
import HackerNews from './Components/Hacker-news-clone/HackerNews'
import Filters from './Components/Hacker-news-clone/Filters'
import Header from './Components/Hacker-news-clone/Header'


ReactDOM.render(
    <BrowserRouter>
        <section>
        <Header />
        <Route path='/' exact > 
            <HackerNews />
        </Route>
        <Route path="/:filter" exact component = {Filters} />  
        </section>
    </BrowserRouter>
,document.getElementById('root'))