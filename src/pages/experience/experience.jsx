import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Tilt from "react-tilt";
import "./experience.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">Skills</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <strong>My Skills</strong>
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Front-end Developer</strong>
                   
                    <ul className="text-left">
                      <li><strong>Frontend: </strong> HTML, CSS, Javascript, Bootstrap, React js, React-bootstrap, Tailwind.</li>
                      <li><strong>Programming Languages: </strong> C , C++ , Python , Javascript.
                      </li>
                      <li><strong>Back-end:</strong> Node js (learning). 
                      </li>
                     

                    </ul>
                    
                    
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;