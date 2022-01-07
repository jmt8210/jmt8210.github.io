import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Justin.css';

class Banner extends React.Component {
  render() {
    return(
      <Navbar className="nav-bg" sticky="top" variant="dark" bg="dark" expand="md">
        <Container>
          <Navbar.Brand href="/"><img src="media/profile.jpg" style={{borderRadius: "16px"}} width="32" alt="Justin Thoms Profile"/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto mb-2 mb-md-0">
              <Nav.Link href="#news">News</Nav.Link>
              <Nav.Link href="#weather">Weather</Nav.Link>
              <Nav.Link href="#latex">LaTeX</Nav.Link>
              <Nav.Link href="#music">Music</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

class News extends React.Component {
  render() {
    return (
      <Container>

      </Container>
    );
  }
}

class Justin extends React.Component {
  render() {
    return (
      <div>
        <Banner/>
        <News/>
      </div>
    );
  }
}

export default Justin;