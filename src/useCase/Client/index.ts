import { MongoClientRepository } from '../../repositories/implementations/MongoClientRepository'
import { ClientUseCase } from './ClientUseCase'
import { ClientController } from './ClientController'

const mongoClientRepository = new MongoClientRepository()
const clientUseCase = new ClientUseCase(mongoClientRepository)
const clientController = new ClientController(clientUseCase)

export { clientUseCase, clientController }
