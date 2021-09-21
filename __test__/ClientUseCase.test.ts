import { clientController } from '../Client'
import fixture from './RequestTest.fixture.json'

describe('Testes de Clientes', () => {
  test('Cadastro de cliente', async () => {
    let response = null
    let error = null

    try {
      response = await clientController.create(fixture, {})

      return response
    } catch (err) {
      error = err
    }

    expect(response).not.toBe(null)
    expect(error).toBe(null)
  })
})
