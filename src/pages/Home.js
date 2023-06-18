import { useLocation, NavLink } from 'react-router-dom';

import { BsArrowRightCircle } from 'react-icons/bs';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import img1 from '../images/img_1.webp';
import img2 from '../images/img_2.webp';
import img3 from '../images/img_3.webp';
import img4 from '../images/img_4.webp';
import img5 from '../images/img_5.webp';
import img6 from '../images/img_6.webp';
import img7 from '../images/img_7.webp';
import { Title } from '../components/App/App.styled';

const styles = {
  container: {
    padding: 0,
    margin: 0,
    paddingBottom: '40px',

    borderRadius: '20px',

    background: 'linear-gradient(62.93deg, #97ccf0 19.68%, #5218fa 89.55%)',
  },

  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',

    marginTop: '30px',
    marginBottom: '30px',
    paddingTop: '30px',
  },

  button: {
    fontWeight: 600,
    fontSize: '18px',
    lineHeight: '1.22',
    textTransform: 'uppercase',
    color: '#373737',

    width: '196px',
    height: '50px',

    boxShadow: '0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25)',
    borderRadius: '10.3108px',

    background: '#ebd8ff',

    cursor: 'pointer',
  },

  link: {
    display: 'flex',
    alignItems: 'center',

    color: '#ebd8ff',
    textDecoration: 'none',
  },

  span: {
    marginRight: '10px',

    fontSize: '18px',
    fontWeight: 600,
    lineHeight: 1.22,
  },

  img: {
    width: '100%',
    height: '500px',
  },
};

export default function Home() {
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

  const location = useLocation();

  const goTweets = location.state?.from ?? '/tweets';

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <Title>Tweets</Title>
        <NavLink style={styles.link} to={goTweets}>
          <span style={styles.span}>Go to tweets</span>
          <BsArrowRightCircle size={24} outline="#0000a0" />
        </NavLink>
      </div>

      <Slider {...settings}>
        <div>
          <img src={img1} alt={'phone'} style={styles.img} />
        </div>
        <div>
          <img src={img2} alt={'phone'} style={styles.img} />
        </div>
        <div>
          <img src={img3} alt={'phone'} style={styles.img} />
        </div>
        <div>
          <img src={img4} alt={'phone'} style={styles.img} />
        </div>
        <div>
          <img src={img5} alt={'phone'} style={styles.img} />
        </div>
        <div>
          <img src={img6} alt={'phone'} style={styles.img} />
        </div>
        <div>
          <img src={img7} alt={'phone'} style={styles.img} />
        </div>
      </Slider>
    </div>
  );
}
