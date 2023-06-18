import styled from '@emotion/styled';

export const Container = styled.div`
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;

  text-align: center;
  justify-content: center;

  border-radius: 20px;
  border: 3px solid #400080;

  background: linear-gradient(62.93deg, #97ccf0 19.68%, #5218fa 89.55%);
`;

export const Title = styled.h1`
  display: block;

  font-weight: 600;
  font-size: 48px;
  text-align: center;
  color: #ffffff;

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
