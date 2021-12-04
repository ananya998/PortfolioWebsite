import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Profile from "../../assest/profile/me.jpeg";
import Image from "react-bootstrap/Image";
import "./about.css";
import Button from "react-bootstrap/Button";


const About = () => {
    return (
        <div id='about'>
            <div className="about">
            <h1 className = "pt-3 text-center font-details pb-3">About Me</h1>
            <Container>
                <Row className = "pt-3 pb-5 align-items-center">
                    {/*profile pic*/}
                    <Col xs={12} md={6}>
                        
                        <Row className = "justify-content-center mb-2 mr-2">
                        <Image   className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
                        </Row>
                    </Col>
                    <Col xs={12} md={6} >
                            <Row  className=" align-items-start p-2 my-details rounded">
                               
                                Hi there! I am <strong>&nbsp;Ananya Trivedi</strong>
                               <br />A passionate programmer born and brought up in India. I am a Front-end Developer with Html,Css,Javascript,React.js as my tech stack.
                               <br />
                               I'm currently pursuing computer science engineering at srm institute of science and technology.
                               I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.
                                <br /> <br />  
                            </Row>
                           <Row>
                               <Col  className="d-flex justify-content-center flex-wrap">
                                   <div>
                                       <a href="#contact">
                                            <Button className="m-2" variant="outline-primary">Contact Me</Button>
                                       </a>
                                   </div>
                                   <div>
                    <a href="https://github.com/ananya998" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/ananya-trivedi-942b6a18b" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                               </Col>
                           </Row>
                    </Col>
                </Row>
            </Container>
            </div>
            </div>
    );
};
export default About