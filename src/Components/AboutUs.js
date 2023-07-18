import React from "react";
import NavBar from "./NavBar";
import head from "../Images/work-images/609.jpg";
import "../CSS/service.css";
import Footer from "./Footer";
import { AiFillStar } from "react-icons/ai";
import GeneralContracting from "../Images/work-images/finished-house.jpeg";

const AboutUs = () => {
  return (
    <div>
      <NavBar />
      <div className="main-services-wrapper">
      <div className="service-hero-container">
        <img
          className="service-hero-image"
          src={head}
          alt="Thresher Construction Logo"
        />
        <div className="service-hero-overlay"></div>
        <div className="service-hero-text">
          <h1 className="service-hero-heading">About Us</h1>
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
          Welcome to THC Mechanical – Your Trusted Partner for Top-Quality Contracting, Structural Steel, and HVAC Services! At THC Mechanical, we take pride in being a versatile and reliable service provider catering to a diverse range of needs. With our commitment to excellence and customer satisfaction, we have established ourselves as a reputable company offering three core services: General Contracting, Structural Steel, and HVAC services.
          </p>
          <p className="service-paragraph">
          As a leading general contracting company, we excel in bringing your construction visions to life. Whether it's residential, commercial, or industrial projects, our skilled professionals have the expertise to handle every aspect of the construction process. From planning and design to execution and completion, we ensure that your project is completed to the highest standards within your timeline and budget.
          </p>
          <p className="service-paragraph">
          Our Structural Steel division is dedicated to delivering robust and durable steel solutions for your construction projects. With state-of-the-art equipment and experienced welders, we fabricate and erect structural steel with precision and efficiency. We take safety seriously and adhere to strict protocols, ensuring that our steel work meets and exceeds industry standards.
          </p>
          <p className="service-paragraph">
          When it comes to keeping your indoor environment comfortable all year round, our HVAC services have got you covered. With the expertise of our certified technicians, we provide top-quality HVAC system installation, repair, and maintenance services. We understand the importance of a well-functioning heating and cooling system, and we are committed to ensuring your family's comfort and safety throughout every season.
          </p>
          <p className="service-paragraph">
          At THC Mechanical, we believe in customer-centric service. Our team is not just skilled and experienced; they are also dedicated to understanding your unique needs and delivering personalized solutions that align perfectly with your requirements. From the moment you contact us to the successful completion of your project, you can trust in our professionalism and attention to detail.
          </p>
          <p className="service-paragraph">
          With years of experience in the industry, THC Mechanical has built a reputation for reliability, quality workmanship, and transparent communication. We value every client and treat each project with the same level of commitment and dedication. Explore our website to learn more about our services, previous projects, and the values that drive us forward. Experience the difference of working with THC Mechanical, where integrity, expertise, and customer satisfaction are the cornerstones of our success. Contact us today to discuss your project needs and let us be the solution to your contracting, structural steel, and HVAC requirements. We look forward to working with you and making your construction visions a reality.
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
    </div>
      <Footer/>
    </div>
  );
};

export default AboutUs;