const db = require('../db/connection')

class Game {
  constructor () {}

  static getAllWorks (works) {
    return db(works)
  }

  static getOneWork (works, id) {
    return db(works).select('*').where('id', id).first()
  }

  static getOneWorkByIDNO (works, idno) {
    return db(works).select('*').where('idno', idno).first()
  }


  // get N random works
  static getNRandomWorks(works, num) {
    return db(works).select('*').orderByRaw('RANDOM()').limit(num)
  }

  // get N random works, excluding the "correct" work
  static getNRandomWorksNotId(works, correctWorkIdno) {
    return db(works).select('*').whereNot('idno', correctWorkIdno).orderByRaw('RANDOM()').limit(3)
  }


  // get N random works, excluding the "correct" work and a given character
  static test(works, correctWorkIdno, character) {
    return db(works)
    .select('*')
    .innerJoin('all_people', 'works.idno', 'all_people.origin')
    .whereNot('works.idno', correctWorkIdno)
    // .whereNot('all_people.character', character.character)
    .orderByRaw('RANDOM()').limit(3)
  }

  static test2(works, correctWorkIdno, correctOrigin) {
    return db(works)
    .select('*')
    .innerJoin('all_people', 'works.idno', 'all_people.origin')
    .whereNot('works.idno', correctWorkIdno)
    .whereNot('all_people.origin', correctOrigin)
    .orderByRaw('RANDOM()').limit(3)
  }


  static getNRandomCharacters(workIdno, number) {
    return db('all_people').select('*').where('origin', workIdno)
    .orderByRaw('RANDOM()').limit(number)
  }

  static getCharacterCount(tableName) {
    return db(tableName).count('id').first()
  }

  static getNCharacters(tableName, idArray) {
    return db(tableName).select('*').whereIn('id', idArray)
  }

}

class Type {
  constructor () {}

  static getAllTypes(question_types) {
    return db(question_types)
  }

  static getType(question_types, id) {
    return db(question_types).select('*').where('id', id).first()
  }
}

module.exports = {
  Game,
  Type
}
