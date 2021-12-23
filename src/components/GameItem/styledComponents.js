import styled from 'styled-components/macro'

export const GameItemList = styled.li`
  margin: 30px;
  list-style-type: none;
`
export const ChoicesButton = styled.button`
  outline: none;
  cursor: pointer;
  border: none;
  background-color: transparent;
`
export const ChoicesImage = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 50px;
  background-color: transparent;

  @media screen and (min-width: 768px) {
    width: 30vw;
    height: 30vh;
  }
`
