/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express'
import { ClientUseCase } from './ClientUseCase'
import { constants } from '../../constants'

export class ClientController {
  constructor (
        private clientUseCase: ClientUseCase
  ) {}

  async findOneClient (req: Request, res: Response): Promise<Response> {
    console.log('fixture: ', req)
    const { phone } = req.query

    try {
      let data = null
      if (phone) {
        data = await this.clientUseCase.findOne({ phone })
      }

      return res.json(data)
    } catch (error) {
      return res.status(constants.HTTP_CODE.BAD_REQUEST).json({
        message: error.message || constants.ERROR_MESSAGE.INTERNAL_ERROR_MESSAGE
      })
    }
  }

  async create (req: Request, res: Response): Promise<Response> {
    const { name, phone } = req.body

    try {
      console.log('entrou para cadastrar')
      await this.clientUseCase.createClient({ name, phone })

      return res.status(constants.HTTP_CODE.NO_CONTENT).send()
    } catch (error) {
      return res.status(constants.HTTP_CODE.BAD_REQUEST).json({
        message: error.message || constants.ERROR_MESSAGE.INTERNAL_ERROR_MESSAGE
      })
    }
  }
}
