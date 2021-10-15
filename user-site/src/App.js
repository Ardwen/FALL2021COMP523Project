import React, { Component } from 'react';
import {  BrowserRouter, Switch, Route } from 'react-router-dom';
import GameList from './components/gamelist';
import Game from './components/quizboard';
import './App.css';


class App extends Component {
  render() {
    return (
      <div  styles={{ backgroundImage:`url(asset/background.jpeg)` }}>
      <BrowserRouter>
 <Switch>
   <Route path='/gamelist' component={GameList} />
   <Route path='/game' component={Game} />
 </Switch>
</BrowserRouter>
      </div>
    );
  }
}

export default App;
