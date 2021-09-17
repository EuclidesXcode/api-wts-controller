/* eslint-disable no-throw-literal */
import { Request, Response } from 'express'
import ClientService from '../services/ClientService'

class ClientController {
  public async index (req: Request, res: Response): Promise<Response> {
    try {
      const clients = await ClientService.getAllClients()

      return res.json(clients)
    } catch (error) {
      console.log('Erro on get clients: ', error)
    }
  }

  public async create (req: Request, res: Response): Promise<Response> {
    const payload = req.body
    try {
      if (!payload) {
        throw 'body is necessary'
      }

      const client = await ClientService.addClient(payload)

      return res.json(client)
    } catch (error) {
      console.log('Erro on create clients: ', error)
    }
  }

  public async delete (req: Request, res: Response): Promise<Response> {
    console.log('body: ', req.body)
    const id = req.body
    try {
      if (!id) {
        throw 'id is necessary'
      }

      const deletedClient = await ClientService.deleteClient(id)

      return res.json(deletedClient)
    } catch (error) {
      console.log('Erro on create clients: ', error)
    }
  }
}

export default new ClientController()
