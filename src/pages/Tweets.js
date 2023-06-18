import { useLocation, NavLink } from 'react-router-dom';

import { BsArrowLeftCircle } from 'react-icons/bs';

import TweetsList from '../components/TweetsList';

import { Container } from '../components/App/App.styled';

const styles = {
  link: {
    display: 'flex',
    alignItems: 'center',

    marginLeft: '20px',
    marginTop: '20px',

    color: '#ebd8ff',
    textDecoration: 'none',
  },

  span: {
    marginLeft: '10px',

    fontSize: '18px',
    fontWeight: 600,
    lineHeight: 1.22,
  },
};

export default function Tweets() {
  const location = useLocation();

  const goHome = location.state?.from ?? '/';

  return (
    <Container>
      <NavLink style={styles.link} to={goHome}>
        <BsArrowLeftCircle size={24} outline="#0000a0" />
        <span style={styles.span}>Go Home</span>
      </NavLink>

      <TweetsList />
    </Container>
  );
}
