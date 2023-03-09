import { Carousel } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from './img/web_mobile.png'
import image2 from './img/network.png'
import image3 from './img/graphic.png'


const items = [
    <Carousel className="my-carousel">
  <Carousel.Item >
    <img
      className="d-block w-100"
      src={image1}
      alt="First slide"
      style={{backgroundColor:'#039EE3'}}
    />
    <Carousel.Caption className="my-carousel-caption" style={{backgroundColor:'#039EE3'}}>
      <h2 style={{color: 'white'}}>WEB AND MOBILE APP DEVELOPMENT</h2>
      <p style={{color: 'black', font:'bolder'}}>Available On Brainy Tek Solution</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image2}
      alt="Second slide"
      style={{backgroundColor:'#039EE3'}}
    />
    <Carousel.Caption className="my-carousel-caption" style={{backgroundColor:'#039EE3'}}>
      <h2 style={{color: 'white'}}>NETWORK AND SECURITY</h2>
      <p style={{color: 'black', font:'bolder'}}>Available On Brainy Tek Solution</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >
    <img
      className="d-block w-100"
      src={image3}
      alt="Third slide"
      style={{backgroundColor:'#039EE3'}}
    />
    <Carousel.Caption className="my-carousel-caption" style={{backgroundColor:'#039EE3'}}>
      <h2 style={{color: 'white'}}>GRAPHIC DESIGN AND VIDEOGRAPHY</h2>
      <p style={{color: 'black', font:'bolder'}}>Available On Brainy Tek Solution</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

  ];
  

  export default function MyCarousel() {
    return (
        <>
    <Carousel
        prevIcon={<span className="carousel-control-prev-icon" />}
        nextIcon={<span className="carousel-control-next-icon" />}
        indicators
      >
        {items.map((item, index) => (
          <Carousel.Item key={index}>{item}</Carousel.Item>
        ))}
      </Carousel>
      </>
    );
  }
  
  