import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import img1 from '../../images/img_1.webp';
import img2 from '../../images/img_2.webp';
import img3 from '../../images/img_3.webp';
import img4 from '../../images/img_4.webp';
import img5 from '../../images/img_5.webp';
import img6 from '../../images/img_6.webp';
import img7 from '../../images/img_7.webp';

import { HomeSliderImg } from './HomeSlider.styled';

export default function HomeSlider() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    centerPadding: '60px',
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <Slider {...settings}>
      <div>
        <HomeSliderImg src={img1} alt={'phone'} />
      </div>
      <div>
        <HomeSliderImg src={img2} alt={'phone'} />
      </div>
      <div>
        <HomeSliderImg src={img3} alt={'phone'} />
      </div>
      <div>
        <HomeSliderImg src={img4} alt={'phone'} />
      </div>
      <div>
        <HomeSliderImg src={img5} alt={'phone'} />
      </div>
      <div>
        <HomeSliderImg src={img6} alt={'phone'} />
      </div>
      <div>
        <HomeSliderImg src={img7} alt={'phone'} />
      </div>
    </Slider>
  );
}
