exports.up = function(knex) {
  return knex.schema.createTable('works', table => {
    table.increments()
    table.string("xmlName").notNullable()
    table.string("jsName").notNullable()
    table.string("title").notNullable()
    table.integer("yearFirst").notNullable()
    table.string("yearText").notNullable()
    table.integer("order").notNullable()
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('works')
}
