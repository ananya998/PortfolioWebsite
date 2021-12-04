import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Slide1 from "../../assest/img/slide1.jpg";
import Slide2 from "../../assest/img/slide2.jpg";
import Slide3 from "../../assest/img/slide3.jpg";
import ScrollDown from '../scrolldown/scrolldown';
import './mycarousel.css';


const Mycarousel = () =>{
    return (
        <div id="home">
        <Carousel controls={false} indicators interval={2500} pause={false}>
          <Carousel.Item>
            <img className="d-block w-100 custom-img custom-img" src={Slide2} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 custom-img custom-img" src={Slide3} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 custom-img custom-img" src={Slide1} alt="Second slide" />
          </Carousel.Item>
        </Carousel>
       <ScrollDown/>
      </div>
    );
};
export default Mycarousel