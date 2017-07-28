const db = require('../db/connection')
const reject = require('../bin/scripts/utility-functions').rejectCharacter
const regex = '*.*'

class Game {
  constructor () {}

  // get all WORKS
  static getAllWorks (works) {
    return db(works)
  }

  // get a particular WORK by id
  static getOneWork (works, id) {
    return db(works).select('*').where('id', id).first()
  }

  // get a particular WORKS by its idno
  static getOneWorkByIDNO (works, idno) {
    return db(works).select('*').where('idno', idno).first()
  }

  // get N random WORKS
  static getNRandomWorks(works, num, toBeExcluded = []) {
    return db(works).select('*').whereNotIn('idno', toBeExcluded).orderByRaw('RANDOM()').limit(num)
  }

  // get N random WORKS, excluding those that lack a character list:
  // idnos = Luc, PhT, Son, Ven (poetical works)
  static getNRandomWorksNoChar(works, num, toBeExcluded = []) {
    return db(works).select('*').whereNotIn('idno', toBeExcluded).orderByRaw('RANDOM()').limit(num)
  }

  // get N random WORKS, excluding the "correct" work
  static getNRandomWorksNotId(works, correctWorkIdno, toBeExcluded = []) {
    return db(works).select('*').whereNot('idno', correctWorkIdno).orderByRaw('RANDOM()').limit(3)
  }

  // get N random WORKS, excluding the "correct" work and a given character
  static getNWorksNotIdOrChar(works, correctWorkIdno, character, toBeExcluded = []) {
    return db(works)
    .select('*')
    .innerJoin('all_people', 'works.idno', 'all_people.origin')
    .whereNot('works.idno', correctWorkIdno)
    .orderByRaw('RANDOM()').limit(3)
  }

  // get N random CHARACTERS, with optional exclusion list
  static getNRandomCharacters(workIdno, number, toBeExcluded = []) {
    return db('all_people').select('*').where('origin', workIdno).andWhere('lines', '>', 260).orderByRaw('RANDOM()').limit(number)
  }

  // get N random WORKS, concordance
  static getNRandomWorksConcord(num, toBeIncluded = []) {
    return db('works').select('*').whereIn('idno', toBeIncluded).orderByRaw('RANDOM()').limit(num)
  }

  // get a random WORD from a given work, with exclusions
   static getOneRandomWord(workIdno, exclusionList) {
    return db('word_frequency').select('*').whereIn('work', workIdno).whereNotIn('instances', exclusionList).orderByRaw('RANDOM()').limit(1)
  }

  // get N random WORDS for a given work
  static getNRandomWords(workIdno, num) {
    return db('word_frequency').select('*').whereIn('work', workIdno).orderByRaw('RANDOM()').limit(num)
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
