import React, { Component } from "react";
import {Route, NavLink, HashRouter, Router} from "react-router-dom";
import avatar from "./avatar.jpg";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Image from 'react-bootstrap/Image'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Main extends Component {
    render() {
        
        let styles = {
            margin: '20px',
            width: '250px',
            height: '250px',
            backgroundColor: 'yellow',
        };

        return (
            <Container fluid>
                    <HashRouter>

                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <Image src={avatar} className="shadow" style={styles} rounded />
                        </Col>
                    </Row>
                    
                    {/* Navlink in below */}
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                        <Navbar m="auto">
                            <Nav.Link><NavLink to="/" exact activeStyle={{fontWeight: "bold", color: 'green'}}>About</NavLink></Nav.Link>
                            <Nav.Link><NavLink to="/about" exact activeStyle={{fontWeight: "bold", color: 'green'}}>Skill</NavLink></Nav.Link>
                            <Nav.Link><NavLink to="/contact" exact activeStyle={{fontWeight: "bold", color: 'green'}}>Project</NavLink></Nav.Link>
                        </Navbar>
                        </Col>
                    </Row>
                    {/* Content in below */}
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <Route exact path="/" component={Home} />
                            <Route path="/about" component={About} />
                            <Route path="/contact" component={Contact}/>
                        </Col>
                    </Row>
                    </HashRouter>
            </Container>
        );
    }
}

export default Main;