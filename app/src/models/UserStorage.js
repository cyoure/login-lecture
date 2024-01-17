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
  static getUserInfo(id) {
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users);
    const userInfo = usersKeys.reduce((newUser, info)=>{
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    return userInfo;
  }
}

module.exports = UserStorage;
