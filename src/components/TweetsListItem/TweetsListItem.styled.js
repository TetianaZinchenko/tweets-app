import styled from '@emotion/styled';

import bg from 'images/bg.png';

import { theme } from 'theme/theme';
const { fontSizes, fontWeights, colors, shadows } = theme;

export const TweetContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 380px;

  box-shadow: ${shadows.containerShadow};
  border-radius: 20px;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
`;

export const TweetRectangle = styled.div`
  position: absolute;
  top: 214px;
  left: 0;

  width: 100%;
  height: 8px;

  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px ${colors.purpleLight},
    inset 0px 3.43693px 2.5777px ${colors.accent};

  background: ${colors.accent};
`;

export const TweetLogo = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;

  width: 76px;
  height: 22px;
`;

export const TweetBg = styled.div`
  width: 308px;
  height: 168px;

  margin-top: 28px;

  background-image: url(${bg});
`;

export const BorderTweetAvatar = styled.div`
  position: absolute;
  top: 178px;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 80px;
  height: 80px;

  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px ${colors.purpleLight},
    inset 0px 4.39163px 3.29372px ${colors.accent};
  border-radius: 50%;

  background: ${colors.accent};
`;

export const BorderAvatar = styled.div`
  width: 62px;
  height: 62px;

  border-radius: 50%;
  background: ${colors.purple};
`;

export const TweetUserPhoto = styled.img`
  border-radius: 50%;
`;

export const TweetInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 88px;

  font-style: normal;
  font-size: ${fontSizes[4]}px;
  line-height: calc(24 / 20);
  text-transform: uppercase;
  color: ${colors.accent};
`;

export const TextUser = styled.span`
  font-weight: ${fontWeights.semibold};
  font-size: ${fontSizes[5]}px;
  color: ${colors.blueLight};
`;

export const TextTweets = styled.span`
  margin-top: 16px;
`;

export const TextFollowers = styled.span`
  margin-top: 16px;
`;

export const TweetButton = styled.button`
  width: 196px;
  height: 50px;

  padding: 14px 28px;
  margin-top: 26px;
  margin-bottom: 36px;

  font-style: normal;
  font-weight: ${fontWeights.semibold};
  font-size: ${fontSizes[3]}px;
  line-height: calc(22 / 18);
  text-transform: uppercase;
  color: ${colors.black};

  box-shadow: ${shadows.defaultShadow};
  border-radius: 10.3108px;
  border: none;
  outline: none;

  background-color: ${props =>
    props[`data-following`] ? '#5cd3a8' : '#ebd8ff'};

  cursor: pointer;
`;
