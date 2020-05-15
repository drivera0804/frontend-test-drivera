import React from 'react'
import { Table } from '@beetrack/hp-components'
import { View, Delete } from '@beetrack/hp-icons-react'
import PropTypes from 'prop-types'
import './UsersList.scss'

const propTypes = {
  users: PropTypes.object,
  handleClickUser: PropTypes.func,
  handleRemoveUser: PropTypes.func
}

class UsersList extends React.Component {
  render () {
    const {
      users,
      handleClickUser,
      handleRemoveUser
    } = this.props

    const Avatar = (props) =>
      <div className='user-card-image'>
        <img alt='avatar' src={props.url} />
      </div>
    return (
      <>
        <Table
          columns={[
            {
              name: 'photo',
              title: 'Avatar',
              valueByFunc: (row) => <Avatar url={row.photo} />,
              width: 100
            },
            {
              name: 'name',
              title: 'Nombre',
              valueByAttribute: 'name',
              width: 200
            },
            {
              name: 'description',
              title: 'Descripción',
              valueByAttribute: 'description',
              width: 1000

            }
          ]}
          actions={[{
            title: 'Editar usuario',
            onClick: row => handleClickUser(row[0].item),
            icon: <View />,
            isGlobal: false
          }, {
            title: 'Eliminar',
            onClick: row => handleRemoveUser(row[0].item.id),
            icon: <Delete />,
            isGlobal: false
          }]}
          data={users || []}
          loading={false}
        />
      </>
    )
  }
}

UsersList.propTypes = propTypes

export default UsersList
