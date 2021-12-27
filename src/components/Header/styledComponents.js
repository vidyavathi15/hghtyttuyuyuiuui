import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border: 2px solid #ffffff;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 30px;
  border-radius: 10px;
`
export const GameNamesListContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const Heading = styled.h1`
  color: #ffffff;
  font-size: 15px;
  font-weight: 800;
  font-family: 'Bree Serif';
`
export const ScoreContainer = styled.div`
  background-color: #ffffff;
  border-radius: 8px;

  border: none;
  height: 60px;
  width: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    height: 150px;
    width: 150px;
  }
`
export const ScoreText = styled.p`
  color: #223a5f;
  font-size: 10px;
  font-weight: 800;
  font-family: 'Bree Serif';
  @media screen and (min-width: 768px) {
    font-size: 25px;
  }
`
export const ScoreValue = styled.p`
  color: #223a5f;
  font-size: 10px;
  font-weight: 800;
  font-family: 'Roboto';

  @media screen and (min-width: 768px) {
    font-size: 25px;
  }
`
