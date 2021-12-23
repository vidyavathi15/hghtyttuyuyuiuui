import styled from 'styled-components/macro'

export const RockContainer = styled.div`
  background-color: #223a5f;
  min-height: 100vh;
  padding: 20px;
`
export const RockBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
`
export const ModelContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;

  max-width: 308px;
  background-color: #ffffff;
  @media screen and (min-width: 768px) {
    max-width: 1110px;
  }
`

export const RulesButton = styled.button`
  cursor: pointer;
  background-color: #ffffff;
  border-radius: 6px;

  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  outline: none;

  display: flex;
  align-self: flex-end;
  color: #223a5f;
  font-size: 13px;
  font-family: 'Bree Serif';
  font-weight: 800;
  height: 40px;
  width: 110px;
  border-radius: 10px;
  text-align: center;
`
export const CloseButton = styled.button`
  align-self: flex-end;
  background-color: transparent;
  width: 30px;
  height: 30px;
  border: none;
  margin-top: 32px;
  outline: none;
  cursor: pointer;
`
export const RulesImage = styled.img`
  height: 240px;
  width: 240px;

  @media screen and (min-width: 768px) {
    height: 440px;
    width: 440px;
  }
`
export const PlayingContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const GameResultContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const ImagesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const LabelText = styled.p`
  color: #ffffff;
  font-size: 15px;
  font-weight: 800;
  font-family: 'Roboto';
  @media screen and (min-width: 768px) {
    font-size: 25px;
  }
`
export const PlayAgainButton = styled.button`
  color: #223a5f;
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 800;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 10px;
  padding-bottom: 10px;

  outline: none;
  cursor: pointer;

  background-color: #ffffff;
  border-radius: 8px;
  @media screen and (min-width: 768px) {
    font-size: 25px;
    padding-left: 22px;
    padding-right: 22px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
`

export const MyChoiceImage = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50px;
  @media screen and (min-width: 768px) {
    height: 20vh;
    width: 20vw;
  }
`
export const RandomChoiceImage = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50px;
  @media screen and (min-width: 768px) {
    height: 20vh;
    width: 20vw;
  }
`
export const PlayingListContainer = styled.ul`
  display: flex;
  padding-left: 0px;
  margin: 0px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`

export const PlayingViewButton = styled.button`
  outline: none;
  cursor: pointer;
  border: none;
  margin-right: 20px;
  background-color: transparent;
`
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: transparent;
`
export const GameImage = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 220px;
`
export const MyChoiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
  width: 150px;
  max-width: 400px;
  @media screen and (min-width: 768px) {
    margin: 90px;
    max-width: 620px;
  }
`
export const MyChoiceHeading = styled.h1`
  color: #ffffff;
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 800;
`
export const RandomChoiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
  width: 150px;
  max-width: 400px;

  @media screen and (min-width: 768px) {
    max-width: 620px;
    margin: 90px;
  }
`
export const OpponentChoiceHeading = styled.h1`
  color: #ffffff;
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 800;
`
export const LabelAndButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
`
