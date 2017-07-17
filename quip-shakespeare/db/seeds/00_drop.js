exports.seed = function (knex) {
 return knex('works').del()
 .then(() => {
   return knex('question_types').del()
 })
 .then(() => {
   return knex('people_1h4').del()
 })
}
