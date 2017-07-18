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

  static getNRandomWorks(works, num) {
    console.log('GAME-MODEL: in get N RandomWorks: ', num)
    return db(works).select('*').orderByRaw('RANDOM()').limit(num)
  }

  static get3RandomWorksNotId(works, correctWorkIdno) {
    console.log('GAME-MODEL: in get3RandomWorksNotId')
    console.log('...and correctWorkIdno is ', correctWorkIdno)
    return db(works).select('*').whereNot('idno', correctWorkIdno).orderByRaw('RANDOM()').limit(3)
  }

/*
character: Bardolph
'1H4'
'2H4'
'H5'
*/
  static test(works, correctWorkIdno, character) {
    console.log('GAME-MODEL: in get3RandomWorksNotId')
    console.log('character is ', character);
    return db(works)
    .select('*')
    .innerJoin('all_people', 'works.idno', 'all_people.origin')
    .whereNot('works.idno', correctWorkIdno)
    // .whereNot('all_people.character', character.character)
    .orderByRaw('RANDOM()').limit(3)
  }

  static test2(works, correctWorkIdno, correctOrigin) {
    console.log('GAME-MODEL: in get3RandomWorksNotId')
    return db(works)
    .select('*')
    .innerJoin('all_people', 'works.idno', 'all_people.origin')
    .whereNot('works.idno', correctWorkIdno)
    .whereNot('all_people.origin', correctOrigin)
    .orderByRaw('RANDOM()').limit(3)
  }


  static getNRandomCharacters(workIdno, number) {
    console.log('GAME-MODEL: in getNRandomCharacters', workIdno)
    return db('all_people').select('*').where('origin', workIdno)
    .orderByRaw('RANDOM()').limit(number)
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
