const db = require('../db/connection')
const reject = require('../bin/scripts/utility-functions').rejectCharacter
const regex = '*.*'

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
  static getNRandomWorks(works, num, toBeExcluded = []) {
    console.log('MODEL: GETNRANDOMWORKS, toBeExcluded', toBeExcluded);
    return db(works).select('*').whereNotIn('idno', toBeExcluded).orderByRaw('RANDOM()').limit(num)
  }

  // get N random works, excluding those that lack a character list
  // exclude idnos = luc, pht, son, ven
  static getNRandomWorksNoChar(works, num, toBeExcluded = []) {
    return db(works).select('*').whereNotIn('idno', toBeExcluded).orderByRaw('RANDOM()').limit(num)
  }

  // get N random works, excluding the "correct" work
  static getNRandomWorksNotId(works, correctWorkIdno, toBeExcluded = []) {
    return db(works).select('*').whereNot('idno', correctWorkIdno).orderByRaw('RANDOM()').limit(3)
  }

  // get N random works, excluding the "correct" work and a given character
  static test(works, correctWorkIdno, character, toBeExcluded = []) {
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

  static getNRandomCharacters(workIdno, number, toBeExcluded = []) {
    console.log('MODEL: getNRandomCharacters, workIdno is ', workIdno)
    console.log('MODEL num is ', number);
    console.log('MODEL: toBeExcluded is ^^^^ ', toBeExcluded);
    return db('all_people').select('*').where('origin', workIdno)
    .orderByRaw('RANDOM()').limit(number)
    // return db('all_people').select('*').where('origin', workIdno).havingRaw('character <>', regex).orderByRaw('RANDOM()').limit(number)
  }


// db.raw()




  static getCharacterCount(tableName) {
    return db(tableName).count('id').first()
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
