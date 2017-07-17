exports.up = function(knex) {
  return knex.schema.createTable('people_ant', table => {
    table.increments()
    table.integer("lines").notNullable()
    table.string("character").notNullable()
    table.string("origin").notNullable()
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('people_ant')
}
