import React from 'react'
import User from '../User'

const UsersList = ({ users, deleteUsers, changeJobStatus }) => {
  return (
    <ul>
      {users.map(el => (
        <User key={el.id} user={el} deleteUsers={deleteUsers} changeJobStatus={changeJobStatus} />
      ))}
    </ul>
  )
}

export default UsersList
