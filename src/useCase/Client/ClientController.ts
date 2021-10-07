/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express'
import { ClientUseCase } from './ClientUseCase'
import { constants } from '../../util/constants'

export class ClientController {
  constructor (
        private clientUseCase: ClientUseCase
  ) {}

  async findOneClient (req: Request, res: Response): Promise<Response> {
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
    const { phone, name } = req.body

    try {
      await this.clientUseCase.createClient({ name, phone })

      return res.status(constants.HTTP_CODE.CREATED).send()
    } catch (error) {
      return res.status(constants.HTTP_CODE.BAD_REQUEST).json({
        message: error.message || constants.ERROR_MESSAGE.INTERNAL_ERROR_MESSAGE
      })
    }
  }
}
