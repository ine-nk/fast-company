import React from 'react';

import Quality from './quality';
import BookMark from './bookmark';

const User = ({ _id, name, profession, qualities, completedMeetings, rate, status, onDelete, onToggleBookMark }) => {

  return (
    <tr key={_id}>
      <td >{name}</td>
      <td>{profession.name}</td>
      <td>{qualities.map(({ _id, ...quality }) => (
        <Quality
          key={_id}
          {...quality}
        />
      ))}</td>
      <td className="text-al-center"> {completedMeetings} </td>
      <td className="text-al-center"> {rate}/5 </td>
      <td ><BookMark
        onToggleBookMark={onToggleBookMark}
        id={_id}
        status={status}
      /></td>
      <td> <button onClick={() => onDelete(_id)} className='btn btn-danger btn-sm'>Удалить</button> </td>
    </tr>)
}

export default User