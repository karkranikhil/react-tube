import React from 'react';
import Player from './Player';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
const App = () => (
  <BrowserRouter>
  <Switch>
    <Route exact path="/" component={Player}/>
    <Route exact path="/:activeVideo" component={Player}/>
  </Switch>
  </BrowserRouter>
)

export default App;