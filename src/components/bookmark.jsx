import React from 'react';

const BookMark = ({ status, onToggleBookMark, id, ...rest }) => {
  console.log('satus', status)
  // status = true
  let classPart = 'bi bi-bookmark'
  classPart = status ? classPart + '-fill' : classPart


  return (<div className="text-al-center">
    <button  
      onClick={() => onToggleBookMark(id)}
    ><i className={classPart} ></i></button >
    </div>
  )
}

export default BookMark;