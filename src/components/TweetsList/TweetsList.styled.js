import styled from '@emotion/styled';

import { theme } from 'theme/theme';
const { fontSizes, fontWeights, colors, shadows } = theme;

export const TweetsContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

export const ButtonLoadMore = styled.button`
  font-style: normal;
  font-weight: ${fontWeights.semibold};
  font-size: ${fontSizes[3]}px;
  line-height: calc(22 / 18);
  text-transform: uppercase;
  color: ${colors.black};

  width: 196px;
  height: 50px;

  padding: 14px 28px;
  margin-top: 30px;
  margin-bottom: 30px;

  box-shadow: ${shadows.defaultShadow};
  border-radius: 10.3108px;
  border: none;
  outline: none;

  background: ${colors.accent};

  cursor: pointer;

  &:hover {
    background: ${colors.blueLight};
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;

  width: 200px;
  height: 80px;
  margin-top: -40px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: 30px;

  text-align: center;
  font-size: ${fontSizes[3]}px;
  font-weight: ${fontWeights.semibold};
  line-height: calc(22 / 18);
  color: ${colors.accent};

  box-shadow: ${shadows.defaultShadow};
  border-radius: 10.3108px;

  background-color: ${colors.purple};

  outline: none;
`;

export const Filter = styled.select`
  padding-left: 5px;

  font-size: ${fontSizes[3]}px;
  font-weight: ${fontWeights.semibold};
  line-height: calc(22 / 18);
  color: ${colors.black};

  border-radius: 10.3108px;

  background-color: ${colors.accent};

  outline: none;

  cursor: pointer;
`;

export const NoTweets = styled.h3`
  text-align: center;

  font-size: ${fontSizes[7]}px;
  color: ${colors.red};
`;
