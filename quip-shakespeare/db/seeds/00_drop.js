exports.seed = function (knex) {
  return knex('works').del()
  .then(() => {
    // return knex('next-table-name').del()
  })
}
