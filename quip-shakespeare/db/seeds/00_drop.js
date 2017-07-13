exports.seed = function (knex) {
 return knex('works').del()
 .then(() => {
   return knex('question_types').del()
 })
}
