import React from 'react'

// import Quality from './quality'
import BookMark from './bookmark'
import { PropTypes } from 'prop-types'
import QualitiesList from './qualitiesList'

const User = ({
  _id,
  name,
  profession,
  qualities,
  completedMeetings,
  rate,
  bookmark,
  onDelete,
  onToggleBookMark
}) => {
  // console.log('_id', _id, typeof (_id))
  return (
    <tr key={ _id }>
      {/* <td> <Link to={`users/${_id}?` } >{name}</Link> </td> */ }
      <td> { name }  </td>
      <td>{ profession.name }</td>
      <td>
        {/* тут было { qualities.map(({ _id, ...quality }) => (
          <Quality key={ _id } { ...quality } />
        )) } */}
        <QualitiesList />
      </td>
      <td className="text-al-center"> { completedMeetings } </td>
      <td className="text-al-center"> { rate }/5 </td>
      <td>
        <BookMark
          status={ bookmark }
          onClick={ () => onToggleBookMark(_id) }
        // id={ _id }
        />
      </td>
      <td>
        <button onClick={ () => onDelete(_id) } className="btn btn-danger btn-sm">
          Удалить
        </button>
      </td>
    </tr>
  )
}
User.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  profession: PropTypes.object,
  qualities: PropTypes.array,
  completedMeetings: PropTypes.number,
  rate: PropTypes.number,
  bookmark: PropTypes.bool,
  onDelete: PropTypes.func.isRequired,
  onToggleBookMark: PropTypes.func.isRequired
}
export default User
