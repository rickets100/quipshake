exports.up = function(knex) {
  return knex.schema.createTable('word_frequency', table => {
    table.increments()
    table.integer("instances").notNullable()
    table.string("word").notNullable()
    table.string("work").notNullable()
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('word_frequency')
}
