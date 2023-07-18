import React from "react";
import NavBar from "./NavBar";
import head from "../Images/work-images/609.jpg";
import "../CSS/service.css";
import Footer from "./Footer";
import { AiFillStar } from "react-icons/ai";
import GeneralContracting from "../Images/work-images/finished-house.jpeg";

const GeneralContractingService = () => {
  return (
    <div className="main-services-wrapper">
      <NavBar />
      <div className="service-hero-container">
        <img
          className="service-hero-image"
          src={head}
          alt="Thresher Construction Logo"
        />
        <div className="service-hero-overlay"></div>
        <div className="service-hero-text">
          <h1 className="service-hero-heading">General Contracting</h1>
        </div>
      </div>
      <div className="service-container">
        <div className="service-left-content">
          <img
            className="service-image"
            src={GeneralContracting}
            alt="Thresher Construction Logo"
          />
          <div className="service-paragraphs">
          <p className="service-paragraph">
          Welcome to THC Mechanical's General Contracting Services! We are your trusted partner in handling a wide range of construction projects, from residential to commercial. With our expertise and commitment to excellence, you can rest assured that your project is in capable hands.
          </p>
          <p className="service-paragraph">
          Our team of skilled professionals is well-equipped to tackle any construction challenge, delivering top-notch results on time and within budget. Whether you need remodeling, renovations, or new construction, we have the knowledge and experience to make your vision a reality.
          </p>
          <p className="service-paragraph">
          At THC Mechanical, we understand that every project is unique, and that's why we offer personalized solutions tailored to meet your specific needs. From the initial planning stages to the final touches, our attention to detail and dedication to quality shines through in every aspect of our work.
          </p>
          <p className="service-paragraph">
          Customer satisfaction is at the core of our values, and we strive to exceed your expectations with every project we undertake. We take the time to listen to your ideas and concerns, collaborating closely with you to ensure that we deliver the results you envision.
          </p>
          <p className="service-paragraph">
          When it comes to safety, we never compromise. Our team adheres to strict safety guidelines, ensuring that all construction processes are conducted with utmost care and professionalism. You can have peace of mind knowing that your project is being handled responsibly and with the highest regard for safety standards.
          </p>
          <p className="service-paragraph">
          No project is too big or too small for THC Mechanical. Whether you need a small home improvement or a large-scale commercial development, we approach each task with the same level of dedication and expertise. Experience the difference of working with a reliable and experienced general contracting company. Contact THC Mechanical today to discuss your project requirements and let us bring your construction dreams to life with efficiency, precision, and a commitment to excellence.
          </p>      
          </div>
        </div>
        <div className="service-right-content">
          <div className="reviews-section">
            <h1>Our Reviews</h1>
            <div className="single-review">
              <p>
                Reliable and skilled team. They delivered on time and within
                budget. Impressive attention to detail.
              </p>
              <div className="stars">
                <AiFillStar style={{ fontSize: "30px" }} />
                <AiFillStar style={{ fontSize: "30px" }} />
                <AiFillStar style={{ fontSize: "30px" }} />
                <AiFillStar style={{ fontSize: "30px" }} />
                <AiFillStar style={{ fontSize: "30px" }} />
              </div>
            </div>
            <div className="single-review">
              <p>
                Reliable and skilled team. They delivered on time and within
                budget. Impressive attention to detail.
              </p>
              <div className="stars">
                <AiFillStar style={{ fontSize: "30px" }} />
                <AiFillStar style={{ fontSize: "30px" }} />
                <AiFillStar style={{ fontSize: "30px" }} />
                <AiFillStar style={{ fontSize: "30px" }} />
                <AiFillStar style={{ fontSize: "30px" }} />
              </div>
            </div>
            <div className="single-review">
              <p>
                Reliable and skilled team. They delivered on time and within
                budget. Impressive attention to detail.
              </p>
              <div className="stars">
                <AiFillStar style={{ fontSize: "30px" }} />
                <AiFillStar style={{ fontSize: "30px" }} />
                <AiFillStar style={{ fontSize: "30px" }} />
                <AiFillStar style={{ fontSize: "30px" }} />
                <AiFillStar style={{ fontSize: "30px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GeneralContractingService;
