import { Carousel } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from './img/web_n_mobile.png'
import image2 from './img/network.png'
import image3 from './img/graphic_design.png'


const items = [
    <Carousel className="my-carousel">
  <Carousel.Item  style={{
                margin: "0px auto",
                backgroundColor: "transparent",
                padding: "0px",
                marginTop: "0px",
                marginBottom: "0px",
              }}>
    <img
      className="d-block w-100"
      src={image1}
      alt="First slide"
    />
    <Carousel.Caption className="my-carousel-caption" style={{backgroundColor: '#039EE3'}}>
      <h2 style={{color: 'white'}}>WEB AND MOBILE APP DEVELOPMENT</h2>
      <p>Available On Brainy Tek Solution</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item  style={{
                margin: "0px auto",
                backgroundColor: "transparent",
                padding: "0px",
                marginTop: "0px",
                marginBottom: "0px",
              }}>
    <img
      className="d-block w-100"
      src={image2}
      alt="Second slide"
    />
    <Carousel.Caption className="my-carousel-caption" style={{backgroundColor: '#039EE3'}}>
      <h2 style={{color: 'white'}}>NETWORK AND SECURITY</h2>
      <p>Available On Brainy Tek Solution</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >
    <img
      className="d-block w-100"
      src={image3}
      alt="Third slide"
    />
    <Carousel.Caption className="my-carousel-caption" style={{backgroundColor: '#039EE3'}}>
      <h2 style={{color: 'white'}}>GRAPHIC DESIGN</h2>
      <p>Available On Brainy Tek Solution</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

  ];
  

  export default function MyCarousel() {
    return (
      <Carousel indicators={false}
        prevIcon={<span className="carousel-control-prev-icon" />}
        nextIcon={<span className="carousel-control-next-icon" />}
        
      >
        {items.map((item, index) => (
          <Carousel.Item key={index}>{item}</Carousel.Item>
        ))}
      </Carousel>
    );
  }
  
  