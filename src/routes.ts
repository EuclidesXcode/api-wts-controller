import { Router } from 'express'
import { clientController } from './useCase/Client'

const routes = Router()

routes.get('/clients/', (req, res) => {
  console.log('entrou no get', req.params, req.query)
  return clientController.findOneClient(req, res)
})
routes.post('/clients', (req, res) => {
  console.log('entrou no post')
  return clientController.create(req, res)
})

export default routes
