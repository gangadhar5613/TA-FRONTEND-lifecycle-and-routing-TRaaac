import React from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter,Route} from 'react-router-dom'

import App from './Components/App';
import Header from './Components/Header'
import UserSearch from './Components/UserSearch';
import User from './Components/User'
import Repos from './Components/Repos';
import Followers from './Components/Followers'
import Following from './Components/Following'
import NotFound from './Components/NotFound'

ReactDOM.render(
    <BrowserRouter>
        <section>
            <Header />
             <Route path='/' exact>
                <UserSearch />
            </Route>

            <Route path='/users/:username' exact  component={User} >
                
            </Route>
            <Route path='/users/:username/repos' exact  component={Repos}></Route>
            <Route path='/users/:username/followers' exact  component={Followers}></Route>
            <Route path='/users/:username/following' exact  component={Following}></Route>

            <Route path='/users/:username/repos/*' exact component={NotFound}>

            </Route>

        </section>


    </BrowserRouter>,document.getElementById('root')
)