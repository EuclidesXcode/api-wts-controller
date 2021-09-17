import { Client } from '../../entities/client'
import { IClientRepository } from '../IClientRepository'

export class MongoClientRepository implements IClientRepository {
  async findByPhone (phone: string): Promise<Client> {

    // TODO buscar no banco de dados
  }

  async save (client: Client): Promise<void> {

    // TODO Salvar no banco de dados
  }
}
