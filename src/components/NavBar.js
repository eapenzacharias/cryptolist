import {
  Container, Navbar, Nav, Form, Button,
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../styles/navstyle.scss';

const NavBar = () => {
  // eslint-disable-next-line no-unused-vars
  const UnderConstruction = () => (
    <>
      <div>
        <h1>The site is Under Construction</h1>
      </div>
    </>
  );

  return (
    <Navbar sticky="top" variant="dark">
      <Container fluid>
        <Nav.Item>
          <NavLink className="nav-link" to="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#000" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
            </svg>
          </NavLink>
        </Nav.Item>
        <Nav className="cryptolist justify-content-center">
          <Navbar.Brand>
            <h2>CryptoList</h2>
          </Navbar.Brand>
        </Nav>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Form className="d-flex">
            <Button variant="outline-success">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
