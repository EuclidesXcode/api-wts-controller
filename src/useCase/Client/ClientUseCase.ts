/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-useless-constructor */
import { Client } from '../../entities/client'
import { IClientRepository } from '../../repositories/IClientRepository'
import { ICreateClienteResquestDTO } from './CreateClientDTO'
import { IFindOneClienteResquestDTO } from './FindOneClientDTO'

export class ClientUseCase {
  constructor (
        private clientRepository: IClientRepository
  ) {}

  async findOne (payload: IFindOneClienteResquestDTO) {
    const { _doc } = await this.clientRepository.findByPhone(payload.phone)
    console.log('Achou esse cara: ', _doc)

    const client = new Client(_doc)

    return client
  }

  async createClient (payload: ICreateClienteResquestDTO) {
    const clientAlreadyExists = await this.clientRepository.findByPhone(payload.phone)

    if (clientAlreadyExists) {
      throw new Error('Client already exists!')
    }

    console.log("Payload para cadastro: ", payload)

    const client = new Client(payload)

    console.log("Client para cadastro: ", client)

    await this.clientRepository.save(client)
  }
}
