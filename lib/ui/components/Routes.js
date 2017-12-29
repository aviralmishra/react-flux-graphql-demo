import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from './home/Home';
import Albums from './albums/Albums';
import ManageAlbum from './albums/ManageAlbum';
import Artists from './artists/Artists';
import ManageArtist from './artists/ManageArtist';

const Routes = () => {
  return (
    <main>
      <Switch>
        <Route exact={true} path='/' component={Home}/>
        <Route exact={true} path='/albums' component={Albums}/>
        <Route path='/albums/:id' component={ManageAlbum}/>
        <Route exact={true} path='/artists' component={Artists}/>
        <Route path='/artists/:id' component={ManageArtist}/>
      </Switch>
    </main>
  );
};

export default Routes;
