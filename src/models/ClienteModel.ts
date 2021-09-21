import { Schema, model } from 'mongoose'

 interface ClientInterface extends Document {
     email?: string,
     phone: string
 }

const ClientModel = new Schema({
  name: String,
  phone: String
}, {
  timestamps: true
})

export default model<ClientInterface>('Client', ClientModel)
