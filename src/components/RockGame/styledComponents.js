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
  max-width: 458px;
  @media screen and (min-width: 768px) {
    max-width: 1110px;
  }
`

export const RulesButton = styled.button`
  cursor: pointer;
  background-color: #ffffff;
  border-radius: 6px;
 
  padding-left:14px;
  padding-right:14px;
  padding-top:10px;
  padding-bottom:10px;
  
  display: flex;
  align-self: flex-end;
  color:#223a5f;
  font-size:13px
  font-family:"Roboto";
  height:40px;
  width:110px;
  border-radius:10px;
  text-align:center;

 
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
  height: 440px;
  width: 540px;
`
export const PlayingContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const PlayingUnOrderedList = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  margin: 0px;
`
export const GameResultContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const ImagesContainer = styled.div`
  display: flex;
`
export const LabelText = styled.p`
  color: #ffffff;
  font-size: 20px;
  font-weight: 800;
  font-family: 'Roboto';
`
export const PlayAgainButton = styled.button`

color: #223a5f;
font-size:16px;
font-family:"Roboto";
font-weight:800;
padding-left;10px;
padding-right:10px;
margin-top:60px;
 background-color:transparent;

`

export const MyChoiceImage = styled.img`
  height: 20px;
  width: 20px;
  border-radius: 50px;
`
export const RandomChoiceImage = styled.img`
  height: 20px;
  width: 20px;
  border-radius: 50px;
`
export const PlayingAndArrangeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ArrangeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 60px;

  padding: 20px;
`
export const ArrangeTwoButtonsContainer = styled.div`
  display: flex;
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
