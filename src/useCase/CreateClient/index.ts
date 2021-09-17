import { MongoClientRepository } from '../../repositories/implementations/MongoClientRepository'
import { CreateClientUseCase } from './CreateClientUseCase'
import { CreateClientController } from './CreateUserController'

const mongoClientRepository = new MongoClientRepository()
const createClientUseCase = new CreateClientUseCase(mongoClientRepository)
const createClientController = new CreateClientController(createClientUseCase)

export { createClientUseCase, createClientController }
