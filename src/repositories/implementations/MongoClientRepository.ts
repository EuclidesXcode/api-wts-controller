import ClientModel from '../../models/ClienteModel'
import { Client } from '../../entities/Client'

import { IClientRepository } from '../IClientRepository'

export class MongoClientRepository implements IClientRepository {
  async findByPhone (phone: string): Promise<Client> {
    let response = null

    try {
      response = await ClientModel.findOne({ phone: phone })
      if (!response) return
      const receiveClient = new Client(response)

      return receiveClient
    } catch (error) {
      throw new Error(error)
    }
  }

  async save (client: Client): Promise<void> {
    let response = null

    try {
      response = await ClientModel.create(client)

      return response
    } catch (error) {
      throw new Error(error)
    }
  }
}
