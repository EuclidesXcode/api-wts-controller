/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-useless-constructor */
import { Client } from '../../entities/client'
import { IClientRepository } from '../../repositories/IClientRepository'
import { ICreateClienteResquestDTO } from './CreateClientDTO'

export class CreateClientUseCase {
  constructor (
        private clientRepository: IClientRepository
  ) {}

  async execute (data: ICreateClienteResquestDTO) {
    const clientAlreadyExists = await this.clientRepository.findByPhone(data.phone)

    if (clientAlreadyExists) {
      throw new Error('Client already exists!')
    }

    const client = new Client(data)

    await this.clientRepository.save(client)
  }
}
