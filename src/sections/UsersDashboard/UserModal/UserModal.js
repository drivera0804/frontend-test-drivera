import React from 'react'
import Modal from 'react-modal'
import UserForm from '.././UserForm'
import './UserModal.scss'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    width: '40rem',
    padding: '0rem',
    backgroundColor: '#F9F9F9'
  }
}

class UserModal extends React.Component {
  render () {
    const {
      user,
      isOpen,
      handleCloseModal,
      onSubmitUser
    } = this.props

    return (
      <>
        <Modal
          isOpen={isOpen}
          contentLabel='Example Modal'
          onRequestClose={handleCloseModal}
          style={customStyles}
        >
          <div className='modal-header'>
            <h2> {user ? 'Actualizar contacto' : 'Agregar nuevo contacto'} </h2>
          </div>
          <div>
            <UserForm
              values={user}
              handleSubmitUser={onSubmitUser}
            />
          </div>
        </Modal>
      </>
    )
  }
}

export default UserModal
