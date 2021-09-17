import { Router } from 'express'
import ClientController from './controllers/ClientController'

const routes = Router()

routes.get('/clients', ClientController.index)
routes.post('/clients', ClientController.create)
routes.delete('/clients', ClientController.delete)

export default routes
