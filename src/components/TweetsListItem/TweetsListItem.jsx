import logo from '../../images/logo.png';

import {
  TweetLogo,
  TweetBg,
  TweetRectangle,
  BorderTweetAvatar,
  BorderAvatar,
  TweetUserPhoto,
  TweetButton,
  TweetInfo,
  TextUser,
  TextTweets,
  TextFollowers,
  TweetContainer,
} from './TweetsListItem.styled';

export default function TweetsListItem({
  id,
  user,
  avatar,
  tweets,
  followers,
  setFollowing,
  isFollowing,
}) {
  const nextFollowingCount = (isFollowing ? 1 : 0) + followers;
  const tweetsCount = tweets.toLocaleString('en-EN');
  const followingCount = nextFollowingCount.toLocaleString('en-EN');

  return (
    <TweetContainer>
      <TweetRectangle />

      <TweetLogo>
        <img src={logo} alt="logo" width="76" height="22" />
      </TweetLogo>
      <TweetBg />

      <BorderTweetAvatar>
        <BorderAvatar>
          <TweetUserPhoto
            src={avatar}
            alt="User avatar"
            width="62"
            height="62"
          />
        </BorderAvatar>
      </BorderTweetAvatar>

      <TweetInfo>
        <TextUser>{user}</TextUser>
        <TextTweets>{tweetsCount} tweets</TextTweets>
        <TextFollowers>{followingCount} followers</TextFollowers>
      </TweetInfo>
      <TweetButton
        type="button"
        onClick={() => setFollowing(id)}
        data-following={isFollowing}
      >
        {isFollowing ? 'Following' : 'Follow'}
      </TweetButton>
    </TweetContainer>
  );
}
