import React from 'react'
import './UsersList.scss'

class UsersList extends React.Component {
  render () {
    const {
      users,
      handleClickUser,
      handleRemoveUser
    } = this.props
    return (
      <>
        <div className='list-header'>
          <div>
            <span>
              Nombre
            </span>
          </div>
          <div>
            <span>
              Descripción
            </span>
          </div>
        </div>
        <div className='list-user-item'>
          {users && users.map((user, index) => {
            return (
              <div
                key={index}
                onClick={() => handleClickUser(user)}
                className='item-wrapper'
              >
                <div className='user-card'>
                  <div className='user-card-image'>
                    <img alt='photo' src={user.photo} />
                  </div>
                  <div className='user-card-info'>
                    <span>{user.name}</span>
                    <span onClick={event => {
                      event.stopPropagation()
                      handleRemoveUser(user.id)
                    }}
                    >
                      Eliminar
                    </span>
                  </div>
                </div>
                <div className='user-description'>
                  <span>{user.description}</span>
                </div>
              </div>
            )
          }
          )}
        </div>
      </>
    )
  }
}

export default UsersList
