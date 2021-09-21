import ClientModel from '../../models/ClienteModel'
import { Client } from '../../entities/Client'

import { IClientRepository } from '../IClientRepository'

export class MongoClientRepository implements IClientRepository {
  async findByPhone (phone: string): Promise<Client> {
    let response = null

    console.log('phone', phone)
    try {
      response = await ClientModel.findOne({ phone: phone })
      console.log('procurou e achou: ', response.name)
      if (!response) return
      const receiveClient = new Client(response)

      console.log('Criou o repository Client: ', receiveClient.name)
      return receiveClient
    } catch (error) {
      throw new Error(error)
    }
  }

  async save (client: Client): Promise<void> {
    let response = null

    try {
      response = await ClientModel.create(client)

      console.log('criou e retornou: ', response)
      return response
    } catch (error) {
      throw new Error(error)
    }
  }
}
