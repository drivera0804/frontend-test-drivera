import React from 'react'
import { connect } from 'react-redux'
import { userActions } from 'actions'
import UsersList from './UsersList'
import UserModal from './UserModal'
import { Button, TextField, NotFoundState } from '@beetrack/hp-components'
import { Search } from '@beetrack/hp-icons-react'
import plusIcon from 'assets/plus.svg'
import PropTypes from 'prop-types'
import './UsersDashboard.scss'

const propTypes = {
  getAllUser: PropTypes.func,
  createUser: PropTypes.func,
  updateUser: PropTypes.func,
  removeUser: PropTypes.func,
  user: PropTypes.object
}

class UsersDashboard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isModalOpen: false,
      currentUser: null,
      querySearch: null
    }
    this.filterUsers = this.filterUsers.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount () {
    const { getAllUser } = this.props
    getAllUser()
  }

  /**
  *@describe: function that return the filtered user array (it returns the same array if there
  *           is no search criteria or no query search
  *@params: the original user array
  *@return: [Object] the filtered origininal user array
  **/
  filterUsers (users) {
    const { querySearch } = this.state
    return querySearch
      ? users.filter(user => user.name.toLowerCase().startsWith(querySearch.toLowerCase()))
      : users
  }

  /**
  *@describe: function that handle the submitted data from the user form and do the specific
              http requset according to the context (update or create)
  *@params: [Object] the user object params data.
  *@return: [Object] the service http response.
  **/
  handleSubmit (data) {
    const { createUser, updateUser } = this.props
    const { currentUser } = this.state
    if (!currentUser) {
      return createUser(data)
        .then(response => this.setState({ isModalOpen: false }))
        .catch(() => { /* Do something if there is error */ })
    }
    return updateUser(currentUser.id, data)
      .then(response => this.setState({ isModalOpen: false, currentUser: null }))
      .catch(() => { /* Do something if there is error */ })
  }

  render () {
    const {
      user,
      removeUser
    } = this.props
    const {
      isModalOpen,
      currentUser,
      querySearch
    } = this.state

    const filteredUser = this.filterUsers(user.data)
    return (
      <div className='dashboard-wrapper'>
        <UserModal
          isOpen={isModalOpen}
          user={currentUser}
          onSubmitUser={this.handleSubmit}
          handleCloseModal={() => { this.setState({ isModalOpen: false, currentUser: null }) }}
        />
        <div className='dashboard-options'>
          <div>
            <TextField
              label='Buscar usuario...'
              onChange={e => { this.setState({ querySearch: e.target.value }) }}
              trailingIcon={<Search />}
              value={querySearch}
            />

          </div>
          <div>
            <Button
              type='primary'
              icon={<img src={plusIcon} />}
              onClick={() => { this.setState({ isModalOpen: true }) }}
            >
            Crear Usuario
            </Button>
          </div>
        </div>
        <div className='users-list'>
          {filteredUser.length === 0
            ? (
              <NotFoundState
                title='Usuario no encontrado'
                text='El usuario que está buscando no pudo ser encontrado.'
              />
            )
            : (
              <UsersList
                users={this.filterUsers(user.data)}
                handleRemoveUser={removeUser}
                handleClickUser={(user) => { this.setState({ isModalOpen: true, currentUser: user }) }}
              />
            )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

UsersDashboard.propTypes = propTypes

export default connect(mapStateToProps, {
  getAllUser: userActions.getAllUsers,
  createUser: userActions.createUser,
  updateUser: userActions.updateUser,
  removeUser: userActions.removeUser
})(UsersDashboard)
