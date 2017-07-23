exports.seed = function (knex) {
 return knex('works').del()
 .then(() => {
   return knex('question_types').del()
 })
 .then(() => {
   return knex('all_people').del()
 })
 .then(() => {
   return knex('word_frequency').del()
 })
}
