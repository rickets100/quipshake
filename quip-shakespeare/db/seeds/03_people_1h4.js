exports.seed = function(knex) {
  return knex('people_1h4').del()
    .then(() => {
      return knex('people_1h4').insert([
        {id: 1, lines: 5510, character: 'Falstaff', origin: '1H4'},
        {id: 2, lines: 4368, character: 'Henry V', origin: '1H4'},
        {id: 3, lines: 4326, character: 'Hotspur', origin: '1H4'},
        {id: 4, lines: 2555, character: 'Henry IV', origin: '1H4'},
        {id: 5, lines: 1421, character: 'Worcester', origin: '1H4'},
        {id: 6, lines: 608, character: 'Glendower', origin: '1H4'},
        {id: 7, lines: 546, character: 'Poins', origin: '1H4'},
        {id: 8, lines: 460, character: 'Vernon', origin: '1H4'},
        {id: 9, lines: 444, character: 'Mortimer', origin: '1H4'},
        {id: 10, lines: 419, character: 'Lady Percy', origin: '1H4'},
        {id: 11, lines: 411, character: 'Mistress Quickly', origin: '1H4'},
        {id: 12, lines: 343, character: 'Gadshill', origin: '1H4'},
        {id: 13, lines: 341, character: 'Douglas', origin: '1H4'},
        {id: 14, lines: 299, character: 'Blunt', origin: '1H4'},
        {id: 15, lines: 297, character: 'Westmoreland', origin: '1H4'},
        {id: 16, lines: 258, character: 'Archbishop', origin: '1H4'},
        {id: 17, lines: 201, character: 'Bardolph', origin: '1H4'},
        {id: 18, lines: 175, character: 'TRAVELERS.CARRIERS.1', origin: '1H4'},
        {id: 19, lines: 170, character: 'Northumberland', origin: '1H4'},
        {id: 20, lines: 149, character: 'Chamberlain', origin: '1H4'},
        {id: 21, lines: 140, character: 'TRAVELERS.CARRIERS.2', origin: '1H4'},
        {id: 22, lines: 93, character: 'Peto', origin: '1H4'},
        {id: 23, lines: 83, character: 'DRAWERS.Francis', origin: '1H4'},
        {id: 24, lines: 64, character: 'Bedford', origin: '1H4'},
        {id: 25, lines: 59, character: 'Sheriff', origin: '1H4'},
        {id: 26, lines: 53, character: 'Sir Michael', origin: '1H4'},
        {id: 27, lines: 49, character: 'MESSENGERS.X', origin: '1H4'},
        {id: 28, lines: 33, character: 'Vintner', origin: '1H4'},
        {id: 29, lines: 31, character: 'TRAVELERS.GENTLEMEN.0.1', origin: '1H4'},
        {id: 30, lines: 19, character: 'SERVANTS.HOTSPUR.1', origin: '1H4'},
        {id: 31, lines: 12, character: 'TRAVELERS.GENTLEMEN', origin: '1H4'},
        {id: 32, lines: 8, character: 'MESSENGERS.2', origin: '1H4'},
        {id: 33, lines: 7, character: 'MESSENGERS.1', origin: '1H4'},
        {id: 34, lines: 4, character: 'TRAVELERS.CARRIERS.X', origin: '1H4'},
        {id: 35, lines: 3, character: 'TRAVELERS.CARRIERS', origin: '1H4'},
        {id: 36, lines: 2, character: 'Ostler', origin: '1H4'}
      ])
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('people_1h4_id_seq', (SELECT MAX(id) FROM people_1h4))"
      )
    })
}
