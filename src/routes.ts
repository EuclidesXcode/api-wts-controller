import { Router } from 'express'
import { clientController } from './useCase/Client'

const routes = Router()

routes.get('/clients/', (req, res) => {
  return clientController.findOneClient(req, res)
})
routes.post('/clients', (req, res) => {
  return clientController.create(req, res)
})

export default routes
