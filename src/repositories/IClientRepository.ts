import { Client } from '../entities/client'

export interface IClientRepository {

    findByPhone(phone: string): Promise<Client>;
    save(Client: Client): Promise<void>;
}
