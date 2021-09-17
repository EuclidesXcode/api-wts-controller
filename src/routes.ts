import { Router } from 'express'
import { createClientController } from './useCase/CreateClient'

const routes = Router()

routes.get('/clients', (req, res) => {
  return createClientController.hendle(req, res)
})
routes.post('/clients', (req, res) => {
  return createClientController.hendle(req, res)
})
routes.delete('/clients', (req, res) => {
  return createClientController.hendle(req, res)
})

export default routes
