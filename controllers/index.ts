const Exp_register = require('./register');
const Exp_login = require('./login');
const Exp_getUserById = require('./getUserById');

module.exports = {
    register: Exp_register,
    login: Exp_login,
    getUserById: Exp_getUserById
};