import React from 'react';


const renderPhrase = (number) => {
  const numForPhrase = [2, 3, 4]
  console.log('number ===========', number)

  const lastSimb = +String(number).slice(-1)

  let people = 'человек'

  if (numForPhrase.includes(lastSimb) && number < 10) {
    people = 'человека'
  } else if (numForPhrase.includes(lastSimb) && number > 21) {
    people = 'человека'
  } else {
    people = 'человек'
  }

  const tusa = number === 1 ? 'тусанет' : 'тусанут'
  const nobody = 'Никто с тобой не тусанет'

  let phraseOfNum = `${number} ${people} ${tusa} с тобой сегодня `

  return (number === 0 ? nobody : phraseOfNum)

}


const SearchStatus = ({ length }) => {
  // тут формируем фразу
  console.log('length++++++++++++',length)
  return (
    <span className={`badge bg-${length ? 'primary' : 'danger'}`}>{renderPhrase(length)}</span>)
}



export default SearchStatus