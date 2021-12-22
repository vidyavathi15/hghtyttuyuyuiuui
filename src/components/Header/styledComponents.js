import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border: 2px solid #ffffff;
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 30px;
  border-radius: 10px;
`
export const GameNamesListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0px;
  margin: 0px;
`
export const List = styled.li`
  list-style-type: none;

  color: #ffffff;
  font-size: 15px;
  font-weight: 800;
  font-family: 'Roboto';
`
export const ScoreContainer = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 10px;
  border: none;
  height: 130px;
  width: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ScoreText = styled.p`
  color: #223a5f;
  font-size: 20px;
  font-weight: 800;
`
export const ScoreValue = styled.p`
  color: #223a5f;
  font-size: 20px;
  font-weight: 800;
`
