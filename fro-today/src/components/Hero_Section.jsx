
import Slider from "react-slick";  // npm install react-slick --save
// Importing css files   // npm install slick-carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactPlayer from 'react-player'  //npm install react-player
import '../styles/herosection.css'

export default function HeroSection() {
  
  var settings = {
    dots: true,
    infinite: true,
    speed: 5,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true
  };

  return (
    <div className="hero-sec">
      <div className="card">
        <Slider {...settings}>
            <div>
                <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="" />
            </div>
            <div>
                <img src="https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg" alt="" />
            </div>
            <div>
                <img  src="https://static.vecteezy.com/system/resources/thumbnails/021/746/785/small/holding-a-tree-in-a-ball-ecology-and-environment-concept-with-generative-ai-photo.jpg" alt=""/>
            </div>
        </Slider>
    </div>
        <div className="video-player">
            <ReactPlayer controls={true} className="player" loop={true} playing={true} url='https://www.youtube.com/watch?v=LXb3EKWsInQ' />
            <ReactPlayer controls={true} className="player" loop={true} playing={true} url='https://www.youtube.com/watch?v=LXb3EKWsInQ' />
            <ReactPlayer controls={true} className="player" loop={true} playing={true} url='https://www.youtube.com/watch?v=LXb3EKWsInQ' />
        </div>
    </div>
  );
}