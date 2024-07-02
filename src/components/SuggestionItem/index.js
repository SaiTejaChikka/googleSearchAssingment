// Write your code here

import './index.css'

const SuggestionItem = props => {
  const {Fun, each} = props
  const {suggestion, id} = each
  const handleClick = () => {
   
    Fun(id)
  }

  return (
    <li >
      <p onClick={handleClick}>{suggestion}</p>
      <img src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png" />
    </li>
  )
}

export default SuggestionItem
