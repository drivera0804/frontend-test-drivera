import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Button from 'components/Button'
import Input from 'components/Input'
import './UserForm.scss'

const validationSchema = Yup.object().shape({
  photo: Yup.string()
    .required('El campo imágen es un parámetro requerido'),
  name: Yup.string()
    .required('El nombre es un parámetro requerido'),
  description: Yup.string()
    .required('Parámetro requerido')
})

class UserForm extends React.Component {
  render () {
    const {
      values,
      handleSubmitUser
    } = this.props
    return (
      <Formik
        initialValues={values || { photo: '', name: '', description: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          return handleSubmitUser(values)
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          isSubmitting
        }) => (
          <form onSubmit={handleSubmit}>
            <div className='form-wrapper'>
              <Input
                type='text'
                name='photo'
                label='URL imagen de perfil'
                value={values.photo}
                error={touched && errors.photo}
                isRequired
                handleChange={handleChange}
              />
              <Input
                type='text'
                name='name'
                label='Nombre'
                value={values.name}
                error={touched && errors.name}
                isRequired
                handleChange={handleChange}
              />
              <Input
                type='textarea'
                name='description'
                label='Descripción'
                value={values.description}
                error={errors.description}
                isRequired
                handleChange={handleChange}
              />
              <Button
                label='Guardar'
                type='submit'
              />
            </div>
          </form>
        )}
      </Formik>
    )
  }
}

export default UserForm
