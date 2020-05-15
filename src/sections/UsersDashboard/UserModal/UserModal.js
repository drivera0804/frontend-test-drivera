import React from 'react'
import { Modal } from '@beetrack/hp-components'
import UserForm from '.././UserForm'
import './UserModal.scss'

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
          key='user-form-modal'
          open={isOpen}
          title={user ? 'Actualizar contacto' : 'Agregar nuevo contacto'}
          onClose={handleCloseModal}
        >
          {isOpen &&
            (
              <UserForm
                values={user || { photo: '', name: '', description: '' }}
                handleSubmitUser={onSubmitUser}
              />
            )}
        </Modal>
      </>
    )
  }
}

export default UserModal
