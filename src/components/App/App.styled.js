import styled from '@emotion/styled';

import { theme } from 'theme/theme';
const { fontSizes, fontWeights, colors } = theme;

export const Container = styled.div`
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;

  text-align: center;
  justify-content: center;

  border-radius: 20px;
  border: 3px solid ${colors.purpleDark};

  background: ${colors.blueGradient};
`;

export const Title = styled.h1`
  display: block;

  font-weight: ${fontWeights.semibold};
  font-size: ${fontSizes[9]}px;
  text-align: center;
  color: ${colors.accent};

  animation: title 3000ms infinite;

  @keyframes title {
    0% {
      transform: scale(1.5);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.5);
    }
  }
`;
