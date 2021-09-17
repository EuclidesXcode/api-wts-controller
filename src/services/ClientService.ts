/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Client from '../schemas/client'

class ClientService {
  static async getAllClients () {
    const clients = await Client.find()

    return clients
  }

  static async addClient (payload) {
    const newClient = await Client.create(payload)

    return newClient
  }

  static async deleteClient (payload) {
    const deletedClient = await Client.remove(payload)

    return deletedClient
  }
}

export default ClientService
