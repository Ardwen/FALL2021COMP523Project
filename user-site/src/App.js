import React, { Component } from 'react';
import {  BrowserRouter, Switch, Route } from 'react-router-dom';
import GameList from './components/gamelist';
import Game from './components/quizboard';
import Reward from './components/reward';
import Confirm from './components/confirm';
import Login from './components/login';
import Register from './components/signup';
import './App.css';


class App extends Component {
  render() {
    return (
      <div  styles={{ backgroundImage:`url(asset/background.jpeg)` }}>
      <BrowserRouter>
 <Switch>
   <Route path='/signup' component={Register} />
   <Route path='/login' component={Login} />
   <Route path='/gamelist' component={GameList} />
   <Route path='/game' component={Game} />
   <Route path='/rewards' component={Reward} />
   <Route path='/confirm' component={Confirm} />
 </Switch>
</BrowserRouter>
      </div>
    );
  }
}

export default App;
