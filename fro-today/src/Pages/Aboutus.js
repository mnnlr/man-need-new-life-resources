import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/aboutus.css";
import logo1 from "../assets/logo1.jpeg";
const AboutUs = ({ fun }) => {
  const navigate = useNavigate();
  useEffect(() => {
    fun(true);
    return () => {
      fun(false);
    };
  }, []);

  return (
    <div
      className="about-cont"
      style={{
        zIndex: "-1",
        // backgroundColor: "#12999f",
        color: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          zIndex: "1",
          // backgroundColor: "#12999f",
        }}
      >
        <button
          className="btn btn-primary"
          style={{
            marginTop: "150px",
            marginLeft: "50px",
            background: "#31D2F2",
            border: "none",
            color: "black",
          }}
          onClick={() => navigate("/employees")}
        >
          Key Team Members
        </button>
        <button
          style={{
            marginTop: "150px",
            background: "#31D2F2",
            border: "none",
            color: "black",
          }}
          className="btn btn-primary "
          onClick={() => navigate("/testimonial/home")}
        >
          Satisfied Client
        </button>
      </div>
      <h2 className="head">ABOUT US</h2>
      <div
        className="history"
        style={{
          // backgroundColor: "#12999f",
          marginBottom: "50px",
          marginTop: "50px",
        }}
      >
        <div className="cont">
          <h2 className="headc">MNNLR</h2>
          <p
            className="abop"
            style={{
              color: "black",
            }}
          >
            We are a dedicated team of website developers specializing in the
            MERN stack (MongoDB, Express.js, React, Node.js). Our journey began
            with the creation of our own website, and since then, we have been
            committed to delivering high-quality, dynamic, and responsive web
            applications that meet the unique needs of our clients. Our
            expertise lies in transforming ideas into functional, user-friendly
            web solutions. <br /> <br /> At the core of our services is a blend
            of creativity and technical proficiency. Whether you need a complex
            e-commerce platform, a robust content management system, or a sleek
            portfolio site, we leverage the power of the MERN stack to deliver
            exceptional results. Our approach focuses on creating seamless user
            experiences and scalable applications that drive success. <br />{" "}
            <br /> <strong>What We Offer</strong> <br /> Full-Stack Development{" "}
            <br />
            Frontend Development: Using React, we create interactive and
            responsive user interfaces. Our expertise includes state management
            (Redux, Context API), component lifecycle methods, and hooks. <br />{" "}
            Backend Development: <br /> With Node.js and Express.js, we build
            robust server-side applications, RESTful APIs, and middleware
            solutions. <br /> Database Management: <br /> Proficiency in MongoDB
            allows us to design efficient database schemas, perform data
            modeling, and optimize performance. <br /> Custom Solutions <br />
            E-Commerce Platforms: Tailored online stores with advanced features
            like shopping carts, payment gateways, and inventory management.
            Content Management Systems: <br /> Scalable CMS solutions that
            provide easy content updates and management. <br /> Single Page
            Applications: <br /> Fast and efficient SPAs that enhance user
            experience and engagement. <br /> Quality Assurance Testing and
            Debugging: <br /> Thorough testing processes to ensure robust and
            error-free applications. <br /> Responsive Design: <br /> Ensuring
            that our applications work seamlessly across various devices and
            screen sizes. Continuous Support <br /> Maintenance and Updates:{" "}
            <br /> Ongoing support to keep your applications running smoothly
            and up-to-date with the latest advancements. <br /> Why Choose Us?{" "}
            <br />
            Expertise in MERN Stack: Deep understanding and extensive experience
            with the MERN stack enable us to deliver top-notch web solutions.
            Client-Centric Approach: We prioritize our clients' needs and work
            closely with them to achieve their vision. <br />
            Commitment to Quality: <br /> Our focus is on delivering
            high-quality applications that are both functional and aesthetically
            pleasing. <br /> Timely Delivery: <br /> Efficient project
            management ensures that we meet deadlines without compromising on
            quality. <br /> Looking for Projects <br /> We are actively seeking
            new projects where we can apply our skills and expertise to deliver
            outstanding web solutions. If you have a project that requires
            professional web development services, we would love to collaborate
            with you. Let's work together to create innovative web applications
            that drive your business forward. <br />{" "}
            <strong>Get in Touch</strong> <br /> To discuss your project
            requirements and explore how we can assist you, please reach out to
            us at [contact email/website link]. We look forward to partnering
            with you and bringing your vision to life!
          </p>
        </div>
        <img className="image" src={logo1} width="290px" height="250px" />
      </div>
      {/* <div className='card-about'>
            <img src="https://imageio.forbes.com/specials-images/imageserve/657b29edf09ae8354c4debba/Real-estate-agents-shake-hands-after-the-signing-of-the-contract-agreement-is/960x0.jpg?height=474&width=711&fit=bounds" className='img1'/>
            <p className='para1'>We have found certain motherboard based sound chipsets do not report having a
                hardware sound buffer, and crash with Grand Theft Auto: Vice City. We found that 
                running Microsoft's "DXDIAG" and performing the sound tests, will present the user
                with an error message saying that a hardware buffer is not supported, and would you 
                like to use a software buffer. Selecting a software buffer will allow this sound chipset
                to work with Grand Theft Auto: Vice City.</p>
            </div>
            
            <div className="card">
              
                    <div>
                        <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"/>
                    </div>
                    <div>
                    <img src="https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg"/>
                    </div>
                    <div>
                    <img  src="https://static.vecteezy.com/system/resources/thumbnails/021/746/785/small/holding-a-tree-in-a-ball-ecology-and-environment-concept-with-generative-ai-photo.jpg"/>
                    </div>
                
            </div> */}

      <div
        className="timeline"
        style={{
          // backgroundColor: "#12999f",
          marginBottom: "50px",
        }}
      >
        <div
          className="container2 left-cont"
          style={
            {
              // backgroundColor: "#12999f",
            }
          }
        >
          <div className="text-box">
            <h2>MERN STACK</h2>
            <p>ABouts that a hardware buffer is not supported, and would you</p>
            <span className="left-arr"></span>
          </div>
        </div>
        <div className="container2 right-cont">
          <div className="text-box">
            <h2>WEB STACK</h2>
            <p>ABouts that a hardware buffer is not supported, and would you</p>
            <span className="right-arr"></span>
          </div>
        </div>
        <div className="container2 left-cont">
          <div className="text-box">
            <h2>FULL STACK</h2>
            <p>ABouts that a hardware buffer is not supported, and would you</p>
            <span className="left-arr"></span>
          </div>
        </div>
        <div className="container2 right-cont">
          <div className="text-box">
            <h2>MERN STACK</h2>
            <p>ABouts that a hardware buffer is not supported, and would you</p>
            <span className="right-arr"></span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
