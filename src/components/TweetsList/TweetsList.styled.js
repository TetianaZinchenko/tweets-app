import styled from '@emotion/styled';

export const TweetsContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

export const ButtonLoadMore = styled.button`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: calc(22 / 18);
  text-transform: uppercase;
  color: #373737;

  width: 196px;
  height: 50px;

  padding: 14px 28px;
  margin-top: 30px;
  margin-bottom: 30px;

  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  border: none;
  outline: none;

  background: #ebd8ff;

  cursor: pointer;

  &:hover {
    background: #5cd3a8;
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
  font-size: 18px;
  font-weight: 600;
  line-height: calc(22 / 18);
  color: #ebd8ff;

  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

  background-color: #5736a3;

  outline: none;
`;

export const Filter = styled.select`
  padding-left: 5px;

  font-size: 18px;
  font-weight: 600;
  line-height: calc(22 / 18);
  color: #373737;

  border-radius: 10.3108px;

  background-color: #ebd8ff;

  outline: none;

  cursor: pointer;
`;

export const NoTweets = styled.h3`
  text-align: center;

  font-size: 32px;
  color: #ff0000;
`;
