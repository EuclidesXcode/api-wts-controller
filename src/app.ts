/* eslint-disable no-undef */
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import routes from './routes'

class App {
    public express: express.Application

    public constructor () {
      this.express = express()

      this.middlewares()
      this.database()
      this.routes()
    }

    private middlewares (): void {
      this.express.use(express.json())
      this.express.use(cors())
    }

    private async database () {
      try {
        await mongoose.connect(`mongodb+srv://admin:${process.env.PASSWORD_DB_CONNECTION}@${process.env.DB_NAME}.xabw8.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`)
      } catch (error) {
        console.log('Error on connection', error)
      }
    }

    private routes (): void {
      this.express.use(routes)
    }
}

export default new App().express

