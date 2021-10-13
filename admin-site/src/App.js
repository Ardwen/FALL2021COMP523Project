import './App.css';
import {Navbar, Container, Nav} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Home from "./pages/Home";
import NewGame from "./pages/NewGame";
import Setting from "./pages/Setting";
import ManageGame from "./pages/ManageGame";

function App() {
  return (
    <div className="App">
        <Router>
            <NavSection />
            <Switch>
                <Route path={"/home"} component={Home}></Route>
                <Route path={"/newGame"} component={NewGame}></Route>
                <Route path={"/setting"} component={Setting}></Route>
                <Route path={"/manageGame/:id"} component={ManageGame}></Route>
            </Switch>
        </Router>

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
