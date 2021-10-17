import React from "react"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import NewGame from "./pages/NewGame";
import Setting from "./pages/Setting";
import ManageGame from "./pages/ManageGame";
import PreGameManage from "./pages/GameManagement/PreGameManage";
import MidGameManage from "./pages/GameManagement/MidGameManage";
import EndGameManage from "./pages/GameManagement/EndGameManage";
import StartGameManage from "./pages/GameManagement/StartGameManage";
import './pages/css/background.css'
import { auth } from "./service/firebase";
import {db} from "./service/firebase";
import Register from "./components/signup";
import Login from "./components/login";
import GameList from "./components/gamelist";
import Game from "./components/quizboard";
import Reward from "./components/reward";
import Confirm from "./components/confirm";

function App() {
  return (
    <div className="App">
                <Switch>
                <Route path={"/home"} component={Home}></Route>
                <Route path={"/newGame"} component={NewGame}></Route>
                <Route path={"/setting"} component={Setting}></Route>
                <Route path={"/manageGame/:id"} component={ManageGame}></Route>
                <Route path={"/pre/:id"} component={PreGameManage}></Route>
                <Route path={"/mid/:id"} component={MidGameManage}></Route>
                <Route path={"/end/:id"} component={EndGameManage}></Route>
                <Route path={"/start/:id"} component={StartGameManage}></Route>
                    {/*add route for user-site*/}
                <Route path='/signup' component={Register} />
                <Route path='/login' component={Login} />
                <Route path='/gamelist' component={GameList} />
                <Route path='/game' component={Game} />
                <Route path='/rewards' component={Reward} />
                <Route path='/confirm' component={Confirm} />
       </Switch>

    </div>
  );
}



export default App;
