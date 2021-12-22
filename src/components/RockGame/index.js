import {Component} from 'react'

import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'

import Header from '../Header'
import {
  GameResultContainer,
  ImagesContainer,
  PlayAgainButton,
  PlayingContainer,
  RockContainer,
  RockBodyContainer,
  ModelContainer,
  CloseButton,
  RulesImage,
  RulesButton,
  LabelText,
  MyChoiceImage,
  RandomChoiceImage,
  PlayingAndArrangeContainer,
  ArrangeContainer,
  ArrangeTwoButtonsContainer,
  PlayingViewButton,
  ButtonContainer,
  GameImage,
} from './styledComponents'

import './index.css'

class RockGame extends Component {
  state = {
    score: 0,
    isPlayingView: true,
    myChoiceImageId: '',
  }

  onClickPlayAgain = () => this.setState({isPlayingView: true})

  getRandomImageId = () => {
    const {choicesList} = this.props

    const randomImageId = choicesList[Math.floor(Math.random() * 10)]

    return randomImageId
  }

  getWinningLabelText = (myChoiceImageId, randomImageId) => {
    let labelEl = ''

    if (myChoiceImageId === 'ROCK' && randomImageId === 'SCISSORS') {
      labelEl = 'You Won'
    } else if (myChoiceImageId === 'PAPER' && randomImageId === 'ROCK') {
      labelEl = 'You Won'
    } else if (myChoiceImageId === 'SCISSORS' && randomImageId === 'PAPER') {
      labelEl = 'You Won'
    } else if (myChoiceImageId === 'ROCK' && randomImageId === 'PAPER') {
      labelEl = 'You Lose'
    } else if (myChoiceImageId === 'SCISSORS' && randomImageId === 'ROCK') {
      labelEl = 'You Lose'
    } else if (myChoiceImageId === 'PAPER' && randomImageId === 'SCISSORS') {
      labelEl = 'You Lose'
    } else {
      labelEl = 'It Is Draw'
    }

    return labelEl
  }

  renderGameResultView = () => {
    const {choicesList} = this.props

    const {myChoiceImageId} = this.state
    console.log(myChoiceImageId)
    const myChoice = choicesList.find(each => each.id === myChoiceImageId)
    const {imageUrl} = myChoice

    const randomlyGeneratedImageId = this.getRandomImageId()

    const randomImageId = choicesList.find(
      each => each.id === randomlyGeneratedImageId,
    )

    const randomImageGenerateUrl = randomImageId.imageUrl
    console.log(randomImageGenerateUrl)

    const winningLabelText = this.getWinningLabelText(
      myChoiceImageId,
      randomImageId,
    )

    return (
      <GameResultContainer>
        <ImagesContainer>
          <MyChoiceImage src={imageUrl} alt="your choice" />
          <RandomChoiceImage
            src={randomImageGenerateUrl}
            alt="opponent choice"
          />
          <LabelText>{winningLabelText}</LabelText>
          <PlayAgainButton
            type="button"
            test-id=""
            onClick={this.onClickPlayAgain}
          >
            PLAY AGAIN
          </PlayAgainButton>
        </ImagesContainer>
      </GameResultContainer>
    )
  }

  onClickGameImage = id => {
    this.setState({myChoiceImageId: id, isPlayingView: false})
  }

  renderPlayingView = () => {
    const {choicesList} = this.props
    const rockImageUrl = choicesList[0].imageUrl

    const scissorsImageUrl = choicesList[1].imageUrl
    const paperImageUrl = choicesList[2].imageUrl

    return (
      <PlayingContainer>
        <PlayingAndArrangeContainer>
          <ArrangeContainer>
            <ArrangeTwoButtonsContainer>
              <PlayingViewButton
                type="button"
                data-testid="rockButton"
                onClick={this.onClickGameImage}
              >
                <ButtonContainer>
                  <GameImage src={rockImageUrl} alt="rock" />
                </ButtonContainer>
              </PlayingViewButton>
            </ArrangeTwoButtonsContainer>

            <PlayingViewButton
              type="button"
              data-testid="scissorsButton"
              onClick={this.onClickGameImage}
            >
              <ButtonContainer>
                <GameImage src={scissorsImageUrl} alt="scissors" />
              </ButtonContainer>
            </PlayingViewButton>
          </ArrangeContainer>

          <PlayingViewButton
            type="button"
            data-testid="paperButton"
            onClick={this.onClickGameImage}
          >
            <ButtonContainer>
              <GameImage src={paperImageUrl} alt="paper" />
            </ButtonContainer>
          </PlayingViewButton>
        </PlayingAndArrangeContainer>
      </PlayingContainer>
    )
  }

  render() {
    const {isPlayingView, score} = this.state
    return (
      <RockContainer>
        <RockBodyContainer>
          <Header score={score} />
          {isPlayingView
            ? this.renderPlayingView()
            : this.renderGameResultView()}
          <Popup
            model
            trigger={<RulesButton data-testid="RulesButton">Rules</RulesButton>}
            className="popup-content"
          >
            {close => (
              <ModelContainer>
                <CloseButton
                  type="button"
                  data-testid="closeButton"
                  onClick={() => close()}
                >
                  <RiCloseLine size="30" color="#616e7c" />
                </CloseButton>
                <RulesImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </ModelContainer>
            )}
          </Popup>
        </RockBodyContainer>
      </RockContainer>
    )
  }
}

export default RockGame
