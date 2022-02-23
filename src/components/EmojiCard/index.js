import './index.css'

const EmojiCard = props => {
  const {details, emojiIdCalculator} = props
  const {id, emojiName, emojiUrl} = details
  const onClick = () => {
    emojiIdCalculator(id)
  }

  return (
    <li className="emoji-list-container" key={id} onClick={onClick}>
      <button type="button" className="button">
        <img src={emojiUrl} alt={emojiName} className="image" />
      </button>
    </li>
  )
}

export default EmojiCard
