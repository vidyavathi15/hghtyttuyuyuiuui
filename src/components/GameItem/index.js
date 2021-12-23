import {GameItemList, ChoicesButton, ChoicesImage} from './styledComponents'

const GameItem = props => {
  const {gameItemDetails, changeMyChoiceImageId} = props
  const {id, imageUrl} = gameItemDetails

  const getAltText = () => {
    let altText = ''
    if (id === 'ROCK') {
      altText = 'rockButton'
    } else if (id === 'SCISSORS') {
      altText = 'scissorsButton'
    } else {
      altText = 'paperButton'
    }

    return altText
  }

  const onClickChoiceImage = () => {
    changeMyChoiceImageId(id)
  }

  const altText = getAltText()

  return (
    <GameItemList>
      <ChoicesButton
        data-testid={altText}
        type="button"
        onClick={onClickChoiceImage}
      >
        <ChoicesImage src={imageUrl} alt={altText} />
      </ChoicesButton>
    </GameItemList>
  )
}

export default GameItem
