import './index.css'

const NavBar = props => {
  const {score, topScore, gameProgress} = props
  let value
  if (gameProgress && score !== 12) {
    value = (
      <>
        <p className="paragraph">Score: {score}</p>
        <p className="paragraph">Top Score: {topScore}</p>
      </>
    )
  }
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="logo-heading">Emoji Game</h1>
      </div>
      <div className="score-container">{value}</div>
    </nav>
  )
}

export default NavBar
