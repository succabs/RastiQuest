import Homepage from './Components/Homepage';
import Enter from './Components/Enter';
import Create from './Components/Create';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {
  return (
<>

<Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand>
        RastiQuest
        </Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Item>
        <Nav.Link as={Link} to="/"> Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link as={Link} to="/Enter">Enter</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link as={Link} to="/Create">Create</Nav.Link>
      </Nav.Item>

          </Nav>
        </Container> 
        </Navbar>
    


    <div className="content">
    <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="Enter" element={<Enter />} />
    <Route path="Create" element={<Create />} />
    </Routes>
    </div>

    <div  className="pt-3 text-center c_border">

<p>Copyright Arttu</p>
    </div>

    </>
  );
}

export default App;
