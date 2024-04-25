// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  updateSearchInput = value => {
    // console.log(`Searched: ${value}`)
    this.setState({
      searchInput: value,
    })
  }

  onChangeSearchInput = event => {
    // console.log(event.target.value)
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    // console.log(this.props)
    const {suggestionsList} = this.props
    const {searchInput} = this.state

    const searchResults = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )
    return (
      <div className="app-container">
        <div className="google-suggestions-container">
          <img
            className="google-logo"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
          />
          <div className="search-input-suggestions-container">
            <div className="search-input-container">
              <img
                className="search-icon"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
              />
              <input
                className="search-input"
                type="search"
                placeholder="Google Search"
                value={searchInput}
                onChange={this.onChangeSearchInput}
              />
            </div>
            <ul className="suggestions-list">
              {searchResults.map(eachSuggestion => (
                <SuggestionItem
                  key={eachSuggestion.id}
                  suggestionDetails={eachSuggestion}
                  updateSearchInput={this.updateSearchInput}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
