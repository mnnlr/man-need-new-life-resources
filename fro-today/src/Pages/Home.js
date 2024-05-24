import React from "react";
import { useNavigate } from "react-router-dom";
import loj from "../assets/logo1.jpeg";
import Banner from "../components/Banner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../styles/home.css";

import { useEffect } from "react";
import { MdDashboard } from "react-icons/md";

import { useAuth } from "../contextData/useAuth";

const Home = ({ fun }) => {
  const { auth } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    fun(true);
    return () => {
      fun(false);
    };
  }, []);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handle1 = () => {
    navigate("/static1");
  };

  return (
    <div
      className="home"
      style={{
        backgroundColor: "#12999f",
      }}
    >
      {(auth && auth?.role === "admin") ||
      auth?.role === "hr" ||
      auth?.role === "employee" ? (
        <MdDashboard
          onClick={() => navigate("/dashboard/home")}
          title="Dashboard"
          style={{
            position: "fixed",
            top: "7%",
            right: "0",
            color: "blue",
            cursor: "pointer",
            fontSize: "38px",
            marginRight: "20px",
            border: "1px solid blue",
            zIndex: "1",
            borderRadius: "50%",
            padding: "1px",
          }}
        />
      ) : (
        ""
      )}
      <div className="next-div" style={{ backgroundColor: "#12999f" }}>
        <div className="main ">
          <div className="content">
            {/* <div className="layer" /> */}
            <h1>MNNLR</h1>
            <p>Man Need New Life Resource</p>
            <p className="headli">
              Its a IT Service Website and App Desiging company
            </p>
          </div>
        </div>

        <div
          className="buttons"
          style={{
            marginBottom: "30px",
            backgroundColor: "#12999f",
          }}
        >
          <div>
            <button
              type="button"
              class="btn btn-primary btn-lg "
              id="first"
              onClick={handle1}
              style={{
                width: 132,
                height: 50,
                fontSize: "20px",
                borderRadius: "10px",
              }}
            >
              Get started
            </button>
          </div>
          <div>
            <button
              type="button"
              class="btn btn-info btn-lg z-index-high"
              id="second"
              style={{
                width: 132,
                height: 50,
                fontSize: "20px",
                borderRadius: "10px",
              }}
            >
              Requested
            </button>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "auto",
          }}
        >
          <Banner />
        </div>

        <div
          className="about"
          style={{
            padding: "90px",
          }}
        >
          <div className="card-image">
            {/*<img src={backimg} className='image' />*/}
            <h1
              className="img-text "
              style={{
                color: "#ffffff",
              }}
            >
              About Us
            </h1>
            <p
              className="para"
              style={{
                marginTop: "50px",
              }}
            >
              We are a dedicated team of website developers specializing in the
              MERN stack (MongoDB, Express.js, React, Node.js). Our journey
              began with the creation of our own website, and since then, we
              have been committed to delivering high-quality, dynamic, and
              responsive web applications that meet the unique needs of our
              clients. Our expertise lies in transforming ideas into functional,
              user-friendly web solutions. <br /> <br /> At the core of our
              services is a blend of creativity and technical proficiency.
              Whether you need a complex e-commerce platform, a robust content
              management system, or a sleek portfolio site, we leverage the
              power of the MERN stack to deliver exceptional results. Our
              approach focuses on creating seamless user experiences and
              scalable applications that drive success. <br /> <br />{" "}
              <strong>What We Offer</strong> <br /> Full-Stack Development{" "}
              <br />
              Frontend Development: Using React, we create interactive and
              responsive user interfaces. Our expertise includes state
              management (Redux, Context API), component lifecycle methods, and
              hooks. <br /> Backend Development: <br /> With Node.js and
              Express.js, we build robust server-side applications, RESTful
              APIs, and middleware solutions. <br /> Database Management: <br />{" "}
              Proficiency in MongoDB allows us to design efficient database
              schemas, perform data modeling, and optimize performance. <br />{" "}
              Custom Solutions <br />
              E-Commerce Platforms: Tailored online stores with advanced
              features like shopping carts, payment gateways, and inventory
              management. Content Management Systems: <br /> Scalable CMS
              solutions that provide easy content updates and management. <br />{" "}
              Single Page Applications: <br /> Fast and efficient SPAs that
              enhance user experience and engagement. <br /> Quality Assurance
              Testing and Debugging: <br /> Thorough testing processes to ensure
              robust and error-free applications. <br /> Responsive Design:{" "}
              <br /> Ensuring that our applications work seamlessly across
              various devices and screen sizes. Continuous Support <br />{" "}
              Maintenance and Updates: <br /> Ongoing support to keep your
              applications running smoothly and up-to-date with the latest
              advancements. <br /> Why Choose Us? <br />
              Expertise in MERN Stack: Deep understanding and extensive
              experience with the MERN stack enable us to deliver top-notch web
              solutions. Client-Centric Approach: We prioritize our clients'
              needs and work closely with them to achieve their vision. <br />
              Commitment to Quality: <br /> Our focus is on delivering
              high-quality applications that are both functional and
              aesthetically pleasing. <br /> Timely Delivery: <br /> Efficient
              project management ensures that we meet deadlines without
              compromising on quality. <br /> Looking for Projects <br /> We are
              actively seeking new projects where we can apply our skills and
              expertise to deliver outstanding web solutions. If you have a
              project that requires professional web development services, we
              would love to collaborate with you. Let's work together to create
              innovative web applications that drive your business forward.{" "}
              <br /> <strong>Get in Touch</strong> <br /> To discuss your
              project requirements and explore how we can assist you, please
              reach out to us at [contact email/website link]. We look forward
              to partnering with you and bringing your vision to life!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const data = [
  {
    name: "app development",
    img: "../assets/logo1.jpeg",
    review: "Lorem ipsum",
  },
  {
    name: "app development",
    img: "../assets/logo1.jpeg",
    review: "Lorem ipsum",
  },
  {
    name: "app development",
    img: "../assets/logo2.jpeg",
    review: "Lorem ipsum",
  },
];

export default Home;
