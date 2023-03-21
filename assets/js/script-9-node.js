// EventEmitter
const EventEmitter = require('events');

class Users extends EventEmitter {
  userLogged(data) {
    setTimeout(() => {
      this.emit('User logged', data);
    }, 2000);
  }
}

const users = new Users();

// users.once('User logged', data => { console.log(data); });
users.on('User logged', data => { console.log(data); });

users.userLogged({ user: 'Maria Aparecida' });
users.userLogged({ user: 'Celso Henrique' });