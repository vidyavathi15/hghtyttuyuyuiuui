import {
  HeaderContainer,
  GameNamesListContainer,
  List,
  ScoreContainer,
  ScoreText,
  ScoreValue,
} from './styledComponents'

const Header = props => {
  const {score} = props

  return (
    <HeaderContainer>
      <GameNamesListContainer>
        <List>ROCK</List>
        <List>PAPER</List>
        <List>SCISSORS</List>
      </GameNamesListContainer>
      <ScoreContainer>
        <ScoreText>Score</ScoreText>
        <ScoreValue>{score}</ScoreValue>
      </ScoreContainer>
    </HeaderContainer>
  )
}

export default Header
