import React from 'react'
import { connect } from 'react-redux'
import { userActions } from 'actions'
import UsersList from './UsersList'
import UserModal from './UserModal'
import { Button, TextField } from '@beetrack/hp-components'
import SearchInput from 'components/SearchInput'
import './UsersDashboard.scss'

class UsersDashboard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isModalOpen: false,
      currentUser: null,
      querySearch: null
    }

    this.filterUsers = this.filterUsers.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount () {
    const { getAllUser } = this.props
    getAllUser()
  }

  filterUsers (users) {
    const { querySearch } = this.state
    return querySearch
      ? users.filter(user => user.name.toLowerCase().startsWith(querySearch.toLowerCase()))
      : users
  }
 
  handleSubmit (data) {
    const { createUser, updateUser } = this.props
    const { currentUser } = this.state
    if (!currentUser) {
      return createUser(data)
        .then(response => this.setState({ isModalOpen: false }))
        .catch(error => {})
    }
    return updateUser(currentUser.id, data)
      .then(response => this.setState({ isModalOpen: false, currentUser: null }))
      .catch(error => {})
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
            <SearchInput
              handleChange={query => { this.setState({ querySearch: query }) }}
            />
          </div>
          <div>
            <Button
              type="primary"
              onClick={() => { this.setState({ isModalOpen: true }) }}
            >
            Hello there
            </Button>
          </div>
        </div>
        <div className='users-list'>
          <UsersList
            users={this.filterUsers(user.data)}
            handleRemoveUser={removeUser}
            handleClickUser={(user) => { this.setState({ isModalOpen: true, currentUser: user }) }}
          />
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
export default connect(mapStateToProps, {
  getAllUser: userActions.getAllUsers,
  createUser: userActions.createUser,
  updateUser: userActions.updateUser,
  removeUser: userActions.removeUser
})(UsersDashboard)
