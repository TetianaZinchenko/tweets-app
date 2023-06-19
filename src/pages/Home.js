import { useLocation, NavLink } from 'react-router-dom';

import { BsArrowRightCircle } from 'react-icons/bs';

import { Title } from '../components/App/App.styled';

import HomeSlider from '../components/HomeSlider/HomeSlider';

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
};

export default function Home() {
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
      <HomeSlider />
    </div>
  );
}
