import {Component} from 'react'

import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import GameItem from '../GameItem'

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
  PlayingListContainer,
  MyChoiceContainer,
  MyChoiceHeading,
  RandomChoiceContainer,
  OpponentChoiceHeading,
  LabelAndButtonContainer,
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
    const lengthOfList = choicesList.length

    const randomImageId = choicesList[Math.floor(Math.random() * lengthOfList)]

    return randomImageId
  }

  getWinningLabelText = (myChoiceImageId, opponentImageId) => {
    let labelEl = ''

    if (myChoiceImageId === 'ROCK' && opponentImageId === 'SCISSORS') {
      labelEl = 'You Won'
    } else if (myChoiceImageId === 'PAPER' && opponentImageId === 'ROCK') {
      labelEl = 'You Won'
    } else if (myChoiceImageId === 'SCISSORS' && opponentImageId === 'PAPER') {
      labelEl = 'You Won'
    } else if (myChoiceImageId === 'ROCK' && opponentImageId === 'PAPER') {
      labelEl = 'You Lose'
    } else if (myChoiceImageId === 'SCISSORS' && opponentImageId === 'ROCK') {
      labelEl = 'You Lose'
    } else if (myChoiceImageId === 'PAPER' && opponentImageId === 'SCISSORS') {
      labelEl = 'You Lose'
    } else {
      labelEl = 'IT IS DRAW'
    }

    return labelEl
  }

  getYourChoiceImageUrl = myChoiceImageId => {
    const {choicesList} = this.props
    const yourChoice = choicesList.find(each => each.id === myChoiceImageId)
    const {imageUrl} = yourChoice
    return imageUrl
  }

  renderGameResultView = () => {
    const {myChoiceImageId} = this.state
    const yourChoiceImageUrl = this.getYourChoiceImageUrl(myChoiceImageId)
    const opponentId = this.getRandomImageId()
    const {id, imageUrl} = opponentId
    const opponentImageId = id
    // console.log(id)

    // console.log(imageUrl)

    const winningLabelText = this.getWinningLabelText(
      myChoiceImageId,
      opponentImageId,
    )

    if (winningLabelText === 'You Won') {
      this.setState(prevState => ({score: prevState.score + 1}))
    } else if (winningLabelText === 'You Lose') {
      this.setState(prevState => ({score: prevState.score - 1}))
    } else {
      this.setState(prevState => ({score: prevState.score}))
    }

    return (
      <GameResultContainer>
        <ImagesContainer>
          <MyChoiceContainer>
            <MyChoiceHeading>YOU</MyChoiceHeading>
            <MyChoiceImage src={yourChoiceImageUrl} alt="your choice" />
          </MyChoiceContainer>

          <RandomChoiceContainer>
            <OpponentChoiceHeading>OPPONENT</OpponentChoiceHeading>
            <RandomChoiceImage src={imageUrl} alt="opponent choice" />
          </RandomChoiceContainer>
        </ImagesContainer>

        <LabelAndButtonContainer>
          <LabelText>{winningLabelText}</LabelText>
          <PlayAgainButton
            type="button"
            test-id=""
            onClick={this.onClickPlayAgain}
          >
            PLAY AGAIN
          </PlayAgainButton>
        </LabelAndButtonContainer>
      </GameResultContainer>
    )
  }

  changeMyChoiceImageId = id => {
    this.setState({myChoiceImageId: id, isPlayingView: false})
  }

  renderPlayingView = () => {
    const {choicesList} = this.props

    return (
      <PlayingContainer>
        <PlayingListContainer>
          {choicesList.map(each => (
            <GameItem
              key={each.id}
              gameItemDetails={each}
              changeMyChoiceImageId={this.changeMyChoiceImageId}
            />
          ))}
        </PlayingListContainer>
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
            position="top right"
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
