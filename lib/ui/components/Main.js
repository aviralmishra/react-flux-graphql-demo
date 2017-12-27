import React from 'react';
import { Route, Switch, } from 'react-router-dom';

import Home from './home/Home';
import Albums from './albums/Albums';
import Artists from './artists/Artists';

const Main = () => ( <main>
  <Switch>
    <Route exact={true} path='/' component={Home}/>
    <Route path='/albums' component={Albums}/>
    <Route path='/artists' component={Artists}/>
  </Switch>
</main> );

export default Main;
