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

  static getNWorks(works, idArray) {
    console.log('GAME-MODEL: in getNWorksNotId', idArray)
    return db(works).select('*').whereIn('id', idArray)
  }

  static get4RandomWorks(works) {
    console.log('GAME-MODEL: in get3RandomWorks')
    return db(works).select('*').orderByRaw('RANDOM()').limit(4)
  }

  static get3RandomWorksNotId(works, correctId) {
    console.log('GAME-MODEL: in get3RandomWorksNotId')
    return db(works).select('*').whereNot('id', correctId).orderByRaw('RANDOM()').limit(3)
  }

  static getRandomCharacter(workIdno) {
    console.log('GAME-MODEL: in getCharacterByRowId')
    return db('all_people').select('*').where('origin', workIdno).orderByRaw('RANDOM()').limit(1)
  }

  static getCharacterCount(tableName) {
    console.log('GAME-MODEL: in getCharacterCount', tableName)
    return db(tableName).count('id').first()
  }

  static getNCharacters(tableName, idArray) {
    console.log('GAME-MODEL: in getNCharacters')
    return db(tableName).select('*').whereIn('id', idArray)
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
