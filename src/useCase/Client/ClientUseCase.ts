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

    const client = new Client(_doc)
    console.log('esse data do findOne: ', client)

    return client
  }

  async createClient (data: ICreateClienteResquestDTO) {
    const clientAlreadyExists = await this.clientRepository.findByPhone(data.phone)

    if (clientAlreadyExists) {
      throw new Error('Client already exists!')
    }

    const client = new Client(data)

    await this.clientRepository.save(client)
  }
}
