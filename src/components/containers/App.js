import React from 'react';
import Player from './Player';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import GlobalStyle from '../styles/GlobalStyles'
const App = () => (
  <BrowserRouter>
    <>
      <Switch>
        <Route exact path="/" component={Player}/>
        <Route exact path="/:activeVideo" component={Player}/>
      </Switch>
    <GlobalStyle/>
    </>
  </BrowserRouter>
)

export default App;