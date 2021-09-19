/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express'
import { CreateClientUseCase } from './CreateClientUseCase'
import { constants } from '../../constants'

export class CreateClientController {
  constructor (
        private createClientUseCase: CreateClientUseCase
  ) {}

  async hendle (req: Request, res: Response): Promise<Response> {
    const { name, phone } = req.body

    try {
      console.log('entrou para cadastrar')
      await this.createClientUseCase.execute({ name, phone })

      return res.status(constants.HTTP_CODE.NO_CONTENT).send()
    } catch (error) {
      return res.status(constants.HTTP_CODE.BAD_REQUEST).json({
        message: error.message || constants.ERROR_MESSAGE.INTERNAL_ERROR_MESSAGE
      })
    }
  }
}
