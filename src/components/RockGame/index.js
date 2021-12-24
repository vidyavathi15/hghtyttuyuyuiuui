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
    randomChoiceImageId: '',
    gameResult: '',
  }

  onClickPlayAgain = () => this.setState({isPlayingView: true})

  getResultLabel = (myChoiceImageId, randomGeneratedImageId) => {
    let labelEl = ''
    if (myChoiceImageId === 'ROCK' && randomGeneratedImageId === 'SCISSORS') {
      labelEl = 'YOU WON'
    } else if (
      myChoiceImageId === 'PAPER' &&
      randomGeneratedImageId === 'ROCK'
    ) {
      labelEl = 'YOU WON'
    } else if (
      myChoiceImageId === 'SCISSORS' &&
      randomGeneratedImageId === 'PAPER'
    ) {
      labelEl = 'YOU WON'
    } else if (
      myChoiceImageId === 'ROCK' &&
      randomGeneratedImageId === 'PAPER'
    ) {
      labelEl = 'YOU LOSE'
    } else if (
      myChoiceImageId === 'SCISSORS' &&
      randomGeneratedImageId === 'ROCK'
    ) {
      labelEl = 'YOU LOSE'
    } else if (
      myChoiceImageId === 'PAPER' &&
      randomGeneratedImageId === 'SCISSORS'
    ) {
      labelEl = 'YOU LOSE'
    } else {
      labelEl = 'IT IS DRAW'
    }
    return labelEl
  }

  getScore = () => {
    const {gameResult} = this.state

    if (gameResult === 'YOU WON') {
      this.setState(prevState => ({score: prevState + 1}))
    } else if (gameResult === 'YOU LOSE') {
      this.setState(prevState => ({score: prevState - 1}))
    } else {
      this.setState(prevState => ({score: prevState}))
    }
  }

  getRandomChoiceImageUrl = randomChoice => {
    const {imageUrl} = randomChoice
    const opponentChoiceImageUrl = imageUrl
    return opponentChoiceImageUrl
  }

  renderGameResultView = () => {
    const {choicesList} = this.props
    const {myChoiceImageId, randomChoiceImageId, gameResult} = this.state
    console.log(myChoiceImageId)
    console.log(randomChoiceImageId)

    const myChoice = choicesList.find(each => each.id === myChoiceImageId)
    const {imageUrl} = myChoice
    const yourChoiceImageUrl = imageUrl
    // console.log(yourChoiceImageUrl)

    const randomChoice = choicesList.find(
      each => each.id === randomChoiceImageId,
    )

    const opponentChoiceImageUrl = this.getRandomChoiceImageUrl(randomChoice)
    //  console.log(opponentChoiceImageUrl)

    return (
      <GameResultContainer>
        <ImagesContainer>
          <MyChoiceContainer>
            <MyChoiceHeading>YOU</MyChoiceHeading>
            <MyChoiceImage src={yourChoiceImageUrl} alt="your choice" />
          </MyChoiceContainer>

          <RandomChoiceContainer>
            <OpponentChoiceHeading>OPPONENT</OpponentChoiceHeading>
            <RandomChoiceImage
              src={opponentChoiceImageUrl}
              alt="opponent choice"
            />
          </RandomChoiceContainer>
        </ImagesContainer>

        <LabelAndButtonContainer>
          <LabelText>{gameResult}</LabelText>
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
    const {choicesList} = this.props

    const lengthOfList = choicesList.length

    const randomId = choicesList[Math.floor(Math.random() * lengthOfList)]
    const randomGeneratedImageId = randomId.id

    const result = this.getResultLabel(id, randomGeneratedImageId)

    this.setState({
      randomChoiceImageId: randomGeneratedImageId,
      gameResult: result,
      myChoiceImageId: id,
      isPlayingView: false,
    })
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
              getScore={this.getScore}
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
