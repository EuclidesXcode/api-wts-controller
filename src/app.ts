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
        const response = await mongoose.connect('mongodb+srv://admin:Gattes2013@database.xabw8.mongodb.net/Database?retryWrites=true&w=majority')
        console.log('Connection: ', response.connections.length && 'true')
      } catch (error) {
        console.log('Error on connection', error)
      }
    }

    private routes (): void {
      this.express.use(routes)
    }
}

export default new App().express
