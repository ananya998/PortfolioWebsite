import React from "react";
import Fade from "react-reveal/Fade";
import { Parallax } from "react-parallax";
import MyNavbar from "./components/mynavbar/mynavbar";
import Mycarousel from "./components/mycarousel/mycarousel";
import TitleMessage from "./components/titlemessage/titlemessage";
import Experience from "./pages/experience/experience";
import About from "./pages/about/about";
import ContactForm from "./pages/contact/contact";
import Container from "react-bootstrap/Container";


import './App.css';

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyNavbar />
      <Mycarousel/>
      <TitleMessage/>
      <div>
      <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assest/parallax/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
    <Container className="container-box rounded">
      <Fade duration={500}>
      <About/>
      </Fade>
      </Container>
      </Parallax>
     
      </div>
      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />

            <Experience />
          </Fade>
        </Container>
      </div>
      <Container className="container-box rounded">
        <Fade duration={500}>
          <hr />
          <ContactForm />
        </Fade>
      </Container>
   </div>
   
  )

}

export default App;
