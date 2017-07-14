const db = require('../db/connection')

class Game {
  constructor () {}

  static getAllWorks (works) {
    console.log('GAME-MODEL: in getAllWorks')
    return db(works)
  }

  static getOneWork (works, id) {
    console.log('GAME-MODEL: in getOneWork')
    return db(works).select('*').where('id', id).first()
  }

  static getOneWorkByIDNO (works, idno) {
    console.log('GAME-MODEL: in getOneWorkByIDNO')
    return db(works).select('*').where('idno', idno).first()
  }

  static getThreeWorks(works, idArray) {
    console.log('GAME-MODEL: in getThreeWorksNotId')
    return db(works).select('*').whereIn('id', idArray)

    //   knex.select('name').from('users')
    // .whereIn('id', [1, 2, 3])
  }

}

class Type {
  constructor () {}

  static getAllTypes(question_types) {
    console.log('GAME-MODEL: in getAllTypes')
    return db(question_types)
  }

  static getType(question_types, id) {
    console.log('GAME-MODEL: in getType')
    return db(question_types).select('*').where('id', id).first()
  }
}

module.exports = {
  Game,
  Type
}
