// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {row, onClickSuggestion} = props
  const {id, suggestion} = row

  const fillText = () => {
    onClickSuggestion(id)
  }
  return (
    <li className="results-container">
      <p className="result-text">{suggestion}</p>
      <img
        onClick={fillText}
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="link-logo"
      />
    </li>
  )
}

export default SuggestionItem
