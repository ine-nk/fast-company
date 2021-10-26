import React, { useState } from 'react'
import PropTypes from 'prop-types'
// import TextField from './textField'
const SearchBar = ({ onChange }) => {
  const [inpPattern, setInpPattern] = useState('')
  // let searchText = ''
  // const handleKeyPress = (e) => {
  //   searchText = e.target
  //   console.log('searchText', searchText)
  //   setPattern(
  //     searchText
  //   )
  //   console.log('событие = ', e, '\nfrom mpdule search', pattern)

  //   if (e.key === 'Enter') {
  //     console.log('enter press here! ')
  //     setPattern(() =>
  //       e.target.value
  //     )
  //   } else {
  //     searchText = e.target.value
  //   }
  // }
  const handleSetPattern = (e) => {
    e.preventDefault()
    setInpPattern(() => e.target.value)
    console.log('событие = onSubmit ', e.target, '\nfrom mpdule search', inpPattern)
  }
  return (
    <form onSubmit={ handleSetPattern }>
      <input
        type='text'
        onChange={ onChange }
        value={ inpPattern }
      />
    </form>
  )
}
SearchBar.propTypes = {
  pattern: PropTypes.string,
  onChange: PropTypes.func

}
export default SearchBar
