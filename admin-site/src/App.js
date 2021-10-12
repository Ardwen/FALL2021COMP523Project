import './App.css';
import {Navbar, Container, Nav} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Home from "./pages/Home";
import NewGame from "./pages/NewGame";
import Setting from "./pages/Setting";

function App() {
  return (
    <div className="App">
        <Router>
            <NavSection />
            <Switch>
                <Route path={"/home"} component={Home}></Route>
                <Route path={"/newGame"} component={NewGame}></Route>
                <Route path={"/setting"} component={Setting}></Route>
            </Switch>
        </Router>

    </div>
  );
}

const NavSection = ()=>{
    return(
        <Navbar bg="light" variant="light">
            <Container>
            <Navbar.Brand href="/home">FANzPlay</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/newGame">New Game</Nav.Link>
              <Nav.Link href="/setting">Setting</Nav.Link>
            </Nav>
              <Navbar.Brand href="/home">My Game Center <FontAwesomeIcon icon={faHome} />
              </Navbar.Brand>

            </Container>
        </Navbar>
    )
}

export default App;
