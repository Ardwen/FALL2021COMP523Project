import React from "react"
import './App.css';
import {Navbar, Container, Nav} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons';
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
import { auth } from "./backend/firebase";
import {db} from "./backend/firebase";

function App() {
  return (
    <div className="App">

       <NavSection />
       <div className={'background'}>
           <div className={'overlay'}>
                <Switch>
                <Route path={"/home"} component={Home}></Route>
                <Route path={"/newGame"} component={NewGame}></Route>
                <Route path={"/setting"} component={Setting}></Route>
                <Route path={"/manageGame/:id"} component={ManageGame}></Route>
                <Route path={"/pre/:id"} component={PreGameManage}></Route>
                <Route path={"/mid/:id"} component={MidGameManage}></Route>
                <Route path={"/end/:id"} component={EndGameManage}></Route>
                <Route path={"/start/:id"} component={StartGameManage}></Route>
       </Switch>
           </div>
       </div>

    </div>
  );
}

const NavSection = ()=>{
    return(
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/home">FANzPlay</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
              <Nav.Link href="/home"><FontAwesomeIcon icon={faHome} /></Nav.Link>
              <Nav.Link href="/newGame">New Game</Nav.Link>
              <Nav.Link href="/setting">Setting</Nav.Link>
              </Nav>
            </Navbar.Collapse>

          </Container>
        </Navbar>
    )
}

export default App;
