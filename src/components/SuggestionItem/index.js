// Write your code here
import './index.css'

const SuggestionItem = props => {
  // console.log(props)
  const {suggestionDetails, updateSearchInput} = props
  const {suggestion} = suggestionDetails

  const onClickSuggestion = () => {
    updateSearchInput(suggestion)
  }

  return (
    <li className="suggestion-item">
      <p className="suggestion-text">{suggestion}</p>
      <button
        className="arrow-button"
        type="button"
        onClick={onClickSuggestion}
      >
        <img
          className="arrow-icon"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
        />
      </button>
    </li>
  )
}
export default SuggestionItem
