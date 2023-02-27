import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import image1 from './img/web_n_mobile.png'
import image2 from './img/network.png'
import image3 from './img/graphic_design.png'




export default function Slider(){
  return(
    <>
      <OwlCarousel className='owl-theme' items={1} autoplay={true} loop margin={10} nav>
        <div class='item'>
          <img src={image1} alt={'first slide'} style={{}} />
        </div>
        <div class='item'>
          <img src={image2} alt={'second slide'}/>
        </div>
        <div class='item'>
          <img src={image3} alt={'third slide'}/>
        </div>
      </OwlCarousel>
    </>
  )
}