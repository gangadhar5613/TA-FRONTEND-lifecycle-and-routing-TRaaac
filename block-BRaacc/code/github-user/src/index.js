import React from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter,Route,Switch} from 'react-router-dom'

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

            <switch>
                <Route path='/users/:username'     component={User} >
                    
                    </Route>
                    <Route path='/users/:username/repos'   component={Repos}></Route>
                    <Route path='/users/:username/followers'  component={Followers}  >
                    
                    </Route>
                    <Route path='/users/:username/following' exact component={Following}>
                    
                    </Route>

            </switch>

        </section>


    </BrowserRouter>,document.getElementById('root')
)