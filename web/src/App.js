import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';



import Login from "./components/login/index"
import Signup from "./components/signup/index"
import Dashboard from "./components/dashboard/index"
import Profile from "./components/profile/index"


function App() {

  let history = useHistory();

  return (
    <>
      <Navbar bg="success"  expand="lg">
        <Container>
          <Navbar.Brand href="#home">KHANA SUB K LIYE</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link  onClick={() => { history.push("/") }}>Dashboard</Nav.Link>
              <Nav.Link onClick={() => { history.push("/login") }}>Login</Nav.Link>
              <Nav.Link onClick={() => { history.push("/signup") }}></Nav.Link>
              <Nav.Link onClick={() => { history.push("/Profile") }}>Profile</Nav.Link>
              

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      <Switch>
        <Route path="/login">
          <Login />
        </Route>

        {/* <Route path="/signup">
          <Signup />
        </Route> */}

        <Route exact path="/">
          <Dashboard />
        </Route>

        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/**">
          <Dashboard />
        </Route>

        

      </Switch>

    </>
  );
}

export default App;