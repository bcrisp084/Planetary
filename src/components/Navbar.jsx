import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Planetary</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link" activeclassname="active">
              Home
            </NavLink>
            <NavLink to="/apod" className="nav-link" activeclassname="active">
              APOD
            </NavLink>
            <NavLink
              to="/planets"
              className="nav-link"
              activeclassname="active"
            >
              Planets
            </NavLink>
            <NavLink to="/rover" className="nav-link" activeclassname="active">
              Rover-Images
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
