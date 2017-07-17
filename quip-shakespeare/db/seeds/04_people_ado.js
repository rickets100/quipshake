exports.seed = function(knex) {
  return knex('people_ado').del()
    .then(() => {
      return knex('people_ado').insert([
        {id: 1, lines:  3761, character: 'Benedick', origin: 'Ado'},
        {id: 2, lines: 2642, character: 'Leonato', origin: 'Ado'},
        {id: 3, lines: 2461, character: 'Don Pedro', origin: 'Ado'},
        {id: 4, lines: 2359, character: 'Beatrice', origin: 'Ado'},
        {id: 5, lines: 2012, character: 'Claudio', origin: 'Ado'},
        {id: 6, lines: 1541, character: 'Dogberry', origin: 'Ado'},
        {id: 7, lines: 997, character: 'Borachio', origin: 'Ado'},
        {id: 8, lines: 980, character: 'Hero', origin: 'Ado'},
        {id: 9, lines: 900, character: 'Don John', origin: 'Ado'},
        {id: 10, lines: 592, character: 'Friar Francis', origin: 'Ado'},
        {id: 11, lines: 548, character: 'Margaret', origin: 'Ado'},
        {id: 12, lines: 396, character: 'Leonatos Brother', origin: 'Ado'},
        {id: 13, lines: 362, character: 'Ursula', origin: 'Ado'},
        {id: 14, lines: 248, character: 'Conrade', origin: 'Ado'},
        {id: 15, lines: 211, character: 'MESSENGERS.LEONATO.1', origin: 'Ado'},
        {id: 16, lines: 185, character: 'Verges', origin: 'Ado'},
        {id: 17, lines: 180, character: 'Balthasar', origin: 'Ado'},
        {id: 18, lines: 106, character: 'Sexton', origin: 'Ado'},
        {id: 19, lines: 106, character: 'WATCHMEN.Seacoal', origin: 'Ado'},
        {id: 20, lines: 101, character: 'WATCHMEN.1', origin: 'Ado'},
        {id: 21, lines: 48, character: 'MUSICIANS', origin: 'Ado'},
        {id: 22, lines: 24, character: 'WATCHMEN.2', origin: 'Ado'},
        {id: 23, lines: 19, character: 'Antonio', origin: 'Ado'},
        {id: 24, lines: 17, character: 'MESSENGERS.DONPEDRO.1', origin: 'Ado'},
        {id: 25, lines: 6, character: 'Boy', origin: 'Ado'},
        {id: 26, lines: 4, character: 'ATTENDANTS.0.1', origin: 'Ado'}
      ])
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('people_ado_id_seq', (SELECT MAX(id) FROM people_ado))"
      )
    })
}
