discribe('Clients', () => {
  beforeEach(() => {
    //codigo será executado antes da execução
  });
  
  it('Properties valid to one client', () => {
    let clients = clients.fistClient();
    expect(clients.id).not.toBeUndefined();
    expect(clients.name).not.toBeUndefined();
    expect(clients.phone).not.toBeUndefined();

  });

  it('Return all clients', () => {
    let clients = clients.all();
    expect(clients.length).toEqual(10);
  });

 
});
