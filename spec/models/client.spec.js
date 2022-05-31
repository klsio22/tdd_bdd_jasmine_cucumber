const Client = require('../../models/client');

describe('Clients', () => {
  beforeEach(() => {
    //codigo será executado antes da execução
  });

  it('Properties valid to one client', () => {
    let client = Client.fistClient();
    expect(client.id).not.toBeUndefined();
    expect(client.name).not.toBeUndefined();
    expect(client.phone).not.toBeUndefined();
  });

  it('Return all clients', () => {
    let clients = Client.all();
    expect(clients.length).toEqual(10);
  });

  it('Name client uppercase', () => {
    let client = Client.fistClient();
    client.name = "danilo";
    expect(client.nameUppercase()).toEqual('DANILO');
  });
});
