import { useState, useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import BackToTop from 'react-back-to-top';

import { fetchTweets } from 'services/API';
import TweetsListItem from '../TweetsListItem/TweetsListItem';
import { Loader } from 'components/Loader';
import {
  ButtonLoadMore,
  TweetsContainer,
  Filter,
  Label,
  NoTweets,
} from './TweetsList.styled';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default function TweetsList() {
  const [noResult, setNoResult] = useState(false);
  const [tweets, setTweets] = useState([]);
  const [filter, setFilter] = useState('show all');
  const [status, setStatus] = useState(Status.IDLE);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [following, setFollowing] = useState(() => {
    const localStorFollowing = JSON.parse(localStorage.getItem('following'));
    return localStorFollowing ? localStorFollowing : {};
  });
  const ButtonloadMoreRef = useRef(null);
  const PER_PAGE = 3;

  useEffect(() => {
    setPage(1);
    setTweets([]);

    setStatus(Status.PENDING);

    (async () => {
      try {
        const response = await fetchTweets();
        setTweets([...response.data]);
        setTotalPages(Math.ceil(response.data.length / PER_PAGE));
        setStatus(Status.RESOLVED);
      } catch (error) {
        toast.error('Sorry, something went wrong...');
        setStatus(Status.REJECTED);
      }
    })();
  }, [totalPages]);

  const incrementPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  const onLoadMore = () => {
    incrementPage();
  };

  useEffect(() => {
    if (page === totalPages) {
      toast.success('There are all tweets!');
    }
  }, [page, totalPages]);

  useEffect(() => {
    if (!noResult) {
      setTimeout(() => setNoResult(true), 3000);
    }
  }, [noResult]);

  const onFilterChange = event => {
    setFilter(event.target.value);
  };

  const onFollowing = id => {
    setFollowing(prevState => ({
      ...prevState,
      [id]: prevState[id] ? !prevState[id] : true,
    }));
  };

  const showFilteredTweets = () => {
    if (filter === 'follow') {
      return tweets.filter(tweet => following[tweet.id] !== true);
    } else if (filter === 'followings') {
      return tweets.filter(tweet => following[tweet.id] === true);
    } else {
      return tweets;
    }
  };

  const filteredTweets = showFilteredTweets().slice(0, page * PER_PAGE);

  localStorage.setItem('following', JSON.stringify(following));

  return (
    <>
      {status === Status.PENDING && page === 1 && <Loader />}

      <Label>
        Filter tweets:
        <Filter value={filter} onChange={onFilterChange}>
          <option value="show all">show all</option>
          <option value="follow">follow</option>
          <option value="followings">followings</option>
        </Filter>
      </Label>

      {filteredTweets.length === 0 && noResult ? (
        <NoTweets>There are no tweets with such filter settings!</NoTweets>
      ) : (
        <>
          <TweetsContainer>
            {filteredTweets.map(tweet => {
              const { id, user, tweets, followers, avatar } = tweet;
              const isFollowing = following[id] ? following[id] : false;

              return (
                <TweetsListItem
                  key={id}
                  id={id}
                  user={user}
                  avatar={avatar}
                  tweets={tweets}
                  followers={followers}
                  setFollowing={onFollowing}
                  isFollowing={isFollowing}
                />
              );
            })}
              
            </TweetsContainer>
            
          {status === Status.RESOLVED && page < totalPages && (
            <ButtonLoadMore
              ref={ButtonloadMoreRef}
              onClick={onLoadMore}
              status={status}
            >
              Load More
            </ButtonLoadMore>
          )}
        </>
      )}

      <BackToTop
        percentStyle={{
          width: '100%',
          height: '100%',
          color: '#0000A0',
        }}
        animate="rotate"
        offsetTop={20}
        step={50}
        percent={true}
        visiblePercent={50}
      />

      {status === Status.PENDING && page > 1 && <Loader />}
    </>
  );
}
