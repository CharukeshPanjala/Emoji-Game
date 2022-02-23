/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

import {Component} from 'react'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    emojiIdList: [],
    gameProgress: true,
  }

  emojiIdCalculator = id => {
    const {emojiIdList, score, topScore} = this.state
    if (emojiIdList.includes(id)) {
      this.setState({gameProgress: false})
    } else {
      this.setState(prevState => ({
        emojiIdList: [...prevState.emojiIdList, id],
        score: prevState.score + 1,
      }))
      if (score + 1 > topScore) {
        this.setState({topScore: score + 1})
      }
    }
  }

  onClickPlayAgain = () => {
    this.setState({score: 0, emojiIdList: [], gameProgress: true})
  }

  changeProgress = () => {
    this.setState({gameProgress: false})
  }

  render() {
    const {score, topScore, gameProgress} = this.state
    const {emojisList} = this.props
    const shuffledEmojisList = emojisList.sort(() => Math.random() - 0.5)
    let emojis
    if (gameProgress && score !== 12) {
      emojis = shuffledEmojisList.map(eachItem => (
        <EmojiCard
          key={eachItem.id}
          details={eachItem}
          emojiIdCalculator={this.emojiIdCalculator}
          gameProgress={gameProgress}
        />
      ))
    } else {
      emojis = (
        <WinOrLoseCard onClickPlayAgain={this.onClickPlayAgain} score={score} />
      )
    }
    return (
      <div className="bg-container">
        <NavBar score={score} topScore={topScore} gameProgress={gameProgress} />
        <ul className="emoji-container">{emojis}</ul>
      </div>
    )
  }
}

export default EmojiGame
