module.exports = class Client {
  constructor() {
    this.id = 0;
    this.name = '';
    this.phone = '';
  }

   nameUppercase() {
    return this.name.toUpperCase();
  }

  static fistClient() {
    return new Client();
  }

  static all() {
    let clients = [];
    function lope() {
      for (let i = 0; i <= 9; i++) {
        clients.push(new Client());
      }
    }
    lope();
    return clients;
  }
};
