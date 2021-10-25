import React, { useState } from 'react'
import PropTypes from 'prop-types'
const SearchBar = () => {
  const [pattern, setPattern] = useState('')
  let searchText = ''
  const handleKeyPress = (e) => {
    searchText = e.target
    console.log('searchText', searchText)
    setPattern(
      searchText
    )
    console.log('событие = ', e, '\nfrom mpdule search', pattern)

    if (e.key === 'Enter') {
      console.log('enter press here! ')
      setPattern(() =>
        e.target.value
      )
    } else {
      searchText = e.target.value
    }
  }
  const handleSetPattern = (e) => {
    setPattern(() =>
      e.target.value
    )
    console.log('событие = ', e, '\nfrom mpdule search', pattern)
  }
  return (
    <div className="mb-4">
      {/* <label htmlFor='search' >search</label> */ }
      <div className="input-group mt-1">

        <input
          type='text'
          id='search'
          name='search'
          value={ searchText }
          onKeyPress={ handleKeyPress }
          placeholder='...Search'
        />

        { (<button className="btn btn-outline-secondary" type="button" onClick={ handleSetPattern } >
          <i className="bi bi-search"></i>
        </button>) }
      </div>
    </div>
  )
}
SearchBar.propTypes = {
  pattern: PropTypes.string

}
export default SearchBar
