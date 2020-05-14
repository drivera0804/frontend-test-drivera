import { api } from 'helpers/api'

const basePath = '/users'

const getAll = () => api.get(`${basePath}`)

const create = user => api.post(`${basePath}`, user)

const update = (userId, user) => api.put(`${basePath}/${userId}`, user)

const remove = userId => api.delete(`${basePath}/${userId}`)

const usersService = {
  getAll,
  create,
  update,
  remove
}

export default usersService
