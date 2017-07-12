const db = require('../../db/knex')

class Game {
  constructor () {}

  static getAllWorks(works) {
    console.log('in getAllWorks')
    return db(works)
  }

  static getOneWork(works, id) {
    console.log('in getOneWork')
    return db(works).select('*').where('id', id).first()
  }
}

module.exports = Game
