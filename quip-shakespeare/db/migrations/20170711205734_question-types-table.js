exports.up = function(knex) {
  return knex.schema.createTable('question_types', table => {
    table.increments()
    table.string("question_type").notNullable()
    table.string("question_class").notNullable()
    table.integer("num_options").notNullable()
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('question_types')
}
