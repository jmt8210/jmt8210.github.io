import React from 'react';
import { Card, Carousel, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { ReactComponent as Mail } from './mail.svg';
import { ReactComponent as NoFillPhone } from './no-fill-phone.svg';
import { ReactComponent as LinkedIn } from './linkedin.svg';
import './Portfolio.css';


class Header extends React.Component {
  render(){
    return (
      <Navbar className="nav-bg" sticky="top" variant="dark" bg="dark" expand="md">
        <Container>
          {/* <Navbar.Brand href="/"><img src="media/profile.jpg" style={{borderRadius: "16px"}} width="32" alt="Justin Thoms Profile"/></Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto mb-2 mb-md-0">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Nav.Link href="media/Thoms-Resume_2021_no_add.pdf" target="_blank">Resumé</Nav.Link>
              
            </Nav>
            <Nav>
              <Nav.Link href="mailto:Thoms.Justin.M@gmail.com"><Mail width="16"/></Nav.Link>
              <Nav.Link href="tel:240-645-5432"><NoFillPhone width="16"/></Nav.Link>
              <Nav.Link href="https://www.linkedin.com/in/justin-thoms/"><LinkedIn width="16"/></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

class Banner extends React.Component {
  render(){
    return (
      <Container className='text-center py-5'>
        <Row>
          <Col className='clearfix'>
            <div className='pull-left'><img src="media/profile.jpg" style={{borderRadius: "16px"}} width="50%" alt="Justin Thoms Profile"/></div>
          </Col>

          <Col>
            <h1 className='display-4'>Justin M. Thoms</h1>
            <p className='py-5 lead'>
              Computer Science Major at the University of Maryland, College Park. Pursuing a software engineering position to gain experience on a professional development team and to apply my knowledge in designing and optimizing software.
            </p>
          </Col>
        </Row>
        <span id="projects"></span>
      </Container>
    );
  }
}

class Projects extends React.Component {
  render(){
    return (
      <Row className="justify-content-md-center text-center py-5 bg-light">
        <h1 className="display-4">Projects</h1>
        <Col className="col-sm-8">
          <Carousel interval="10000" variant="dark">
            <Carousel.Item>
              <a className="no-dec-link" href="./final_proj.html">
                <Card>
                  <Card.Img src="media/final_proj.png" alt=""></Card.Img>
                  <Card.Body>
                    <Card.Title>Data Science Final Project</Card.Title>
                    <Card.Text>For the final project in my Data Science class, I completed a group project that found the greatest factors in determining the winner of football games. Using an <a href="https://www.kaggle.com/mhixon/college-football-statistics">NCAA game stats database</a> with R and libraries for statistical models and machine learning (cvTools, randomForest), we were able to create a model that could accurately determine the winner of a game based on a team's yardage, turnovers, time of possession and other factors.</Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </Carousel.Item>

            <Carousel.Item>
              <a className="no-dec-link" href="http://arcstonecapital.com">
                <Card>
                  <Card.Img src="media/arcstone.png" alt="First slide"></Card.Img>
                  <Card.Body>
                    <Card.Title>Arcstone Capital</Card.Title>
                    <Card.Text>In 2017, I created a website for a top performing hedge fund. I was able to create this website given the client's requirements using my knowledge in HTML, CSS and PHP. Since this project, I have improved my knowledge of libraries for HTML and CSS that help create more advanced websites.</Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </Carousel.Item>

            <Carousel.Item>
              <a className="no-dec-link" href="./conway.html">
                <Card>
                  <Card.Img src="media/conway.png" alt="Conway's Game of Life Web App"></Card.Img>
                  <Card.Body>
                    <Card.Title>Conway's Game of Life</Card.Title>
                    <Card.Text>Created a representation of <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">Conway's Game of Life</a> in p5.js. I was able to translate the rules of the game into code to create cells that interact with one another. I also gained a better of javascript in order to make the experience more interactive with user input.</Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </Carousel.Item>

            <Carousel.Item>
              <a className="no-dec-link" href="https://umdtendies.github.io">
                <Card>
                  <Card.Img src="media/tendies.png" alt="First slide"></Card.Img>
                  <Card.Body>
                    <Card.Title>Tendie Day</Card.Title>
                    <Card.Text>As a personal project with a friend, we created a website that displays whether certain food items are available in the school cafeteria. This was determined using a script that scraped the dining services website to download an image of the current menu. We were then able to use image processing and text recognition to determine if the menu contained the specific items. (Currently unavailable due to COVID-19 dining restrictions)</Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    );
  }
}

class Contact extends React.Component {
  render(){
    return (
      <Row className="justify-content-md-center text-center py-5">
        <span id="contact"></span>
        <h1 className="display-4">Contact</h1>
        <Col className="text-center">
          <div style={{margin: "15px"}} className="align-middle">
            <LinkedIn width="25"/>
            <a style={{marginLeft: "5px", textDecoration: "none", color: "inherit"}} href="https://linkedin.com/in/justin-thoms/">linkedin.com/in/justin-thoms/</a>
          </div>
          <div style={{margin: "15px"}} className="align-middle">
            <Mail width="25"/>
            <a style={{marginLeft: "5px", textDecoration: "none", color: "inherit"}} href="mailto:Thoms.Justin.M@gmail.com">Thoms.Justin.M@gmail.com</a>
          </div>
          <div style={{margin: "15px"}} className="align-middle">
            <NoFillPhone width="25"/>
            <a style={{marginLeft: "5px", textDecoration: "none", color: "inherit"}} href="test.html">+1 (240) - 645 - 5432</a>
          </div>
        </Col>
      </Row>
    );
  }
}

class Portfolio extends React.Component {
  render(){
    return (
      <div>
        <Header/>
        <Banner/>
        <Projects/>
        <Contact/>
      </div>
    );
  }
}

export default Portfolio;