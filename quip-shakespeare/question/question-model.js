const db = require('../../db/knex')

class Question {
  constructor () {}

  static getAllQuestionTypes(questions) {
    console.log('in getAllQuestionTypes')
    return db(questions)
  }

  static getOneQuestionType(questions, id) {
    console.log('in getOneQuestionType')
    return db(questions).select('*').where('id', id).first()
  }
}

module.exports = Questions
