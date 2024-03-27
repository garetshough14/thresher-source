import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import AcUnits from "../Images/work-images/ac-units-above.jpg";
import StructuralSteel from "../Images/work-images/work-car.png";
import GeneralContracting from "../Images/work-images/finished-house.jpeg";
import { AiOutlineArrowRight } from "react-icons/ai";
import "../CSS/homepage.css";
import { Link } from "react-router-dom";
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import Services from "../comps/Services";

const slideImages = [
  {
    url: AcUnits,
    caption: 'Slide 1'
  },
  {
    url: StructuralSteel,
    caption: 'Slide 2'
  },
  {
    url: GeneralContracting,
    caption: 'Slide 3'
  },
];


const HomePage = () => {
  return (
    <div>
      <NavBar />
      <Slide
        infinite={false}
        responsive={[{
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        }]}
        transitionDuration={400}
      >
        <img src={AcUnits} alt="AC Units Work" />
        <img src={StructuralSteel} alt="Structural Steel Work" />
        <img src={GeneralContracting} alt="General Contracting Work" />
      </Slide>
      <div className="expert-wrapper">
        <div className="expert-heading">
          <h1 className="expert-heading-top">WE ARE EXPERTS</h1>
          <h1 className="expert-heading-bottom">RESIDENTIAL COMMERCIAL INDUSTRIAL</h1>
          <Link to='/contact' className="free-quotes-button-expert button-home">
            FREE QUOTES <AiOutlineArrowRight style={{ fontSize: "20px" }} />
          </Link>
        </div>
        <div className="expert-content">
          <p className="expert-paragraph-top">
            THC Mechanical stands out as an exceptional provider of HVAC
            services, general contracting, and structural steel in Bakersfield.
            Established in 2005, we have earned a strong reputation by
            delivering unparalleled professionalism to countless residential and
            commercial clients.
          </p>
          <p className="expert-paragraph-bottom">
            At THC Mechanical, we offer a comprehensive range of services
            aimed at ensuring the utmost comfort for our valued customers in
            their homes and businesses. From expert installation and maintenance
            of cooling and heating systems to efficient air conditioning repairs
            and installations, we cater to diverse needs in AC, cooling, and
            heating for both residential and commercial properties. Rest
            assured, we provide tailored solutions that align with the specific
            requirements of our clients.
          </p>
        </div>
      </div>
      <Services />
      <Footer />
    </div>
  );
};

export default HomePage;
