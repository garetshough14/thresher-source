import React from "react";
import NavBar from "./NavBar";
import head from "../Images/work-images/609.jpg";
import "../CSS/service.css";
import Footer from "./Footer";
import { AiFillStar } from "react-icons/ai";
import img from "../Images/work-images/work-car.png";

const StructuralSteel = () => {
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
          <h1 className="service-hero-heading">Structural Steel Work</h1>
        </div>
      </div>
      <div className="service-container">
        <div className="service-left-content">
          <img
            className="service-image"
            src={img}
            alt="Thresher Construction Logo"
          />
          <div className="service-paragraphs">
          <p className="service-paragraph">
          When it comes to reliable and sturdy construction solutions, our team is the one you can depend on. Structural steel plays a vital role in providing the framework and strength for various buildings and structures, and our expertise ensures that your project is built to last.
          </p>
          <p className="service-paragraph">
          At THC Mechanical, we understand the importance of precision and attention to detail in structural steel work. Our skilled professionals have the knowledge and experience to handle even the most complex steel projects, from designing and fabricating to erecting and welding. Whether it's for industrial, commercial, or residential purposes, we deliver top-quality structural steel solutions that meet industry standards.
          </p>
          <p className="service-paragraph">
          From small-scale steel modifications to large-scale structural installations, we have the capability to handle projects of any size. Our team is equipped with state-of-the-art equipment and tools to ensure efficiency and accuracy throughout the construction process.
          </p>
          <p className="service-paragraph">
          Safety is our top priority, and we adhere to strict safety protocols to protect both our workers and the surrounding environment. You can trust that our experienced team will complete the structural steel work with the utmost care and professionalism.
          </p>
          <p className="service-paragraph">
          We take pride in offering customized solutions tailored to suit your specific project requirements. Our collaborative approach ensures that we understand your needs and objectives, allowing us to deliver results that align perfectly with your vision.
          </p>
          <p className="service-paragraph">
          As a reputable structural steel contractor, THC Mechanical is committed to providing exceptional service and results that stand the test of time. Whether you need steel fabrication, welding, or installation services, our skilled team is here to guide you through the entire process, making it smooth and hassle-free. Experience the quality and reliability of THC Mechanical's Structural Steel Work Services. Contact us today to discuss your project needs, and let us bring your structural steel vision to life with expertise, precision, and a commitment to excellence. With us by your side, you can rest assured that your project will be built on a foundation of strength and durability.
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

export default StructuralSteel;
