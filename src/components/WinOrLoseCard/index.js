import './index.css'

const WinOrLoseCard = props => {
  const {score, onClickPlayAgain} = props
  const onClickButton = () => {
    onClickPlayAgain()
  }
  let displayText
  let scoreName
  let imgUrl
  if (score === 12) {
    displayText = 'You Won'
    scoreName = 'Best Score'
    imgUrl = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
  } else {
    displayText = 'You Lose'
    scoreName = 'Score'
    imgUrl = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  }
  return (
    <li className="win-card">
      <div className="text-content">
        <h1 className="heading-text">{displayText}</h1>
        <p className="paragraph-text">{scoreName}</p>
        <p className="score-text">{score}/12</p>
        <button
          type="button"
          className="play-again-button"
          onClick={onClickButton}
        >
          Play Again
        </button>
      </div>
      <img src={imgUrl} alt="win or lose" className="game-won-image" />
    </li>
  )
}

export default WinOrLoseCard
