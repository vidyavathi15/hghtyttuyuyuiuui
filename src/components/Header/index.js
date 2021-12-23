import {
  HeaderContainer,
  GameNamesListContainer,
  Heading,
  ScoreContainer,
  ScoreText,
  ScoreValue,
} from './styledComponents'

const Header = props => {
  const {score} = props

  return (
    <HeaderContainer>
      <GameNamesListContainer>
        <Heading>ROCK</Heading>
        <Heading>PAPER</Heading>
        <Heading>SCISSORS</Heading>
      </GameNamesListContainer>
      <ScoreContainer>
        <ScoreText>Score</ScoreText>
        <ScoreValue>{score}</ScoreValue>
      </ScoreContainer>
    </HeaderContainer>
  )
}

export default Header
