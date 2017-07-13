const db = require('../db/connection')

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

class Type {
  constructor () {}

  static getAllTypes(question_types) {
    console.log('in getAllTypes')
    return db(question_types)
  }

  static getType(question_types, id) {
    console.log('in getType')
    return db(question_types).select('*').where('id', id).first()
  }
}

module.exports = {
  Game,
  Type
}
