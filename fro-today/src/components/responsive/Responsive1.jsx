import { useNavigate } from "react-router-dom";
import Slider from "react-slick";  // npm install react-slick --save
// Importing css files   // npm install slick-carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import '../../styles/responsive1.css'

export default function Responsive() {

  const navigate = useNavigate();
  const handle1 = () => {
    navigate("/responsive3");
  };

  const handle2 = () => {
    navigate("/responsive1");
  };
  
  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed:500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay:true
  // }; 

  return (
    <div className="res-hero-sec contents">
      {/* <Header/> */}
      <div className='res-card1'>
          <p>
              Lorem ipsum We have found certain motherboard based sound chipsets do not report having a
              hardware sound buffer, and crash with Grand Theft Auto: Vice City. We found that 
              running Microsoft's "DXDIAG" and performing the sound tests, will present the user
              with an error message saying that a hardware buffer is not supported, and would you 
              like to use a software buffer. Selecting a software buffer will allow this sound chipset
              to work with Grand Theft Auto: Vice City.
          </p>
          <img src="https://cdn.corporatefinanceinstitute.com/assets/real-estate.jpeg" className='res-crad1-img'/>
      </div>
      <div className="res-card">
        {/* <Slider {...settings}>
          <div class="carousel-item">
            <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"/>
          </div>
          <div class="carousel-item">
            <img src="https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg"/>
          </div>
          <div class="carousel-item">
            <img  src="https://static.vecteezy.com/system/resources/thumbnails/021/746/785/small/holding-a-tree-in-a-ball-ecology-and-environment-concept-with-generative-ai-photo.jpg"/>
          </div>
        </Slider> */}
    </div>
    <div>
        <button
          type="button"
          class="btn btn-success"
          id="next"
          onClick={handle1}
        >
          Next
        </button>

        <button
          type="button"
          class="btn btn-success"
          id="back"
          onClick={handle2}
        >
          Back
        </button>
      </div>
    </div>
  );
}