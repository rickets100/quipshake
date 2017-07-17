exports.up = function(knex) {
  return knex.schema.createTable('all_people', table => {
    table.increments()
    table.integer("lines").notNullable()
    table.string("character").notNullable()
    table.string("origin").notNullable()
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('all_people')
}
