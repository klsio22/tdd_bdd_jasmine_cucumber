module.exports = class Client {
  constructor() {
    this.id = 0
    this.name = ''
    this.phone = ''

  }

  static fistClient() {
    return new Client()
  }

  static all() {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }
};
