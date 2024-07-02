// Write your code here
import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoggleSuggestions extends Component {
  state = {suggestionsList: this.props.suggestionsList, searchInput: ''}
  Onsearch = e => {
    this.setState({searchInput: e.target.value})
  }

  Fun = id => {
    console.log(id)
    const {suggestionsList} = this.state
    const f = suggestionsList.filter(each => each.id === id)
    console.log(f)
    this.setState({searchInput: f.suggestion})
  }
  render() {
    const {suggestionsList, searchInput} = this.state
    const filterarry = suggestionsList.filter(each =>
      each.suggestion.includes(searchInput),
    )
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          className="heading"
        />
        <div className="card-container">
          <div className="container1">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              className="search"
            />
            <input
              type="search"
              placeholder="Search Google"
              className="search1"
              onChange={this.Onsearch}
              value={this.searchInput}
            />
          </div>
          <ul>
            {filterarry.map(each => (
              <SuggestionItem each={each} key={each.id} Fun={this.Fun} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoggleSuggestions
