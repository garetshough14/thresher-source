import React from "react";
import NavBar from "./NavBar";
import head from "../Images/work-images/609.jpg";
import "../CSS/service.css";
import Footer from "./Footer";
import { AiFillStar } from "react-icons/ai";
import AcUnits from "../Images/work-images/ac-units-above.jpg";

const HVACService = () => {
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
          <h1 className="service-hero-heading">HVAC Service</h1>
        </div>
      </div>
      <div className="service-container">
        <div className="service-left-content">
          <img
            className="service-image"
            src={AcUnits}
            alt="Thresher Construction Logo"
          />
          <div className="service-paragraphs">
          <p className="service-paragraph">
            As the winter season approaches, ensuring your heating system is in top-notch condition becomes paramount to keep your family cozy and comfortable. The cold and damp weather prompts many homeowners to seek a reliable heating repair service, and that's where THC Mechanical comes in.</p>
          <p className="service-paragraph">
          We understand the significance of a fully functional heating system during the coldest months of the year. THC Mechanical is a reputable full-service heating installation and repair company dedicated to maintaining peak performance for your heating system throughout all seasons.
          </p>
          <p className="service-paragraph">
          When facing heating system issues, you can count on THC Mechanical to provide essential services and extend the longevity of your equipment while reducing heating utility expenses. Our team of experts possesses the necessary expertise and experience to handle any heating maintenance and repairs with precision and efficiency.
          </p>
          <p className="service-paragraph">
          Ensuring a comfortable, safe, and healthy indoor environment during chilly days relies on a properly working heating system. At THC Mechanical, we take pride in our commitment to providing top-quality service, investing in labor, training, and state-of-the-art equipment.
          </p>
          <p className="service-paragraph">
          We understand the frustration of dealing with equipment malfunctions, especially during winter when you need it the most. That's why we prioritize swift responses to all inquiries and work diligently to complete heating repair jobs promptly. When it comes to heating repair or installation in Bakersfield, you can trust THC Mechanical to handle the task with professionalism and expertise.
          </p>
          <p className="service-paragraph">
          Taking care of your heating system offers peace of mind during winter, whether you require a new installation, repairs, or regular maintenance. Unlike some companies that may push for new equipment purchases, THC Mechanical is dedicated to offering the best budget-friendly options for our customers. Our HVAC systems installation, repair, and maintenance services cater to both residential and commercial clients. Our technicians are well-versed in HVAC systems, providing an extensive selection of renowned brands for heating and cooling solutions.
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

export default HVACService;
