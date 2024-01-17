"use strict";

class UserStorage {
  static #users = {
    id: ["wwj9559", "카리나", "원터"],
    psword: ["1234", "1234", "123456"],
    name: ["누", "군", "가"],
  };
  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) =>{
        if (users.hasOwnProperty(field)){
        newUsers[field] = users[field];
        }
        return newUsers;
    }, {});
    return newUsers;
  }
}

module.exports = UserStorage;
