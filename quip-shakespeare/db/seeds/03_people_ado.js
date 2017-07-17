exports.seed = function(knex) {
  return knex('people_ado').del()
    .then(() => {
      return knex('people_ado').insert([
        {id: 271, lines:  3761, character: 'Benedick', origin: 'Ado'},
        {id: 272, lines: 2642, character: 'Leonato', origin: 'Ado'},
        {id: 273, lines: 2461, character: 'Don Pedro', origin: 'Ado'},
        {id: 274, lines: 2359, character: 'Beatrice', origin: 'Ado'},
        {id: 275, lines: 2012, character: 'Claudio', origin: 'Ado'},
        {id: 276, lines: 1541, character: 'Dogberry', origin: 'Ado'},
        {id: 277, lines: 997, character: 'Borachio', origin: 'Ado'},
        {id: 278, lines: 980, character: 'Hero', origin: 'Ado'},
        {id: 279, lines: 900, character: 'Don John', origin: 'Ado'},
        {id: 280, lines: 592, character: 'Friar Francis', origin: 'Ado'},
        {id: 281, lines: 548, character: 'Margaret', origin: 'Ado'},
        {id: 282, lines: 396, character: 'Leonatos Brother', origin: 'Ado'},
        {id: 283, lines: 362, character: 'Ursula', origin: 'Ado'},
        {id: 284, lines: 248, character: 'Conrade', origin: 'Ado'},
        {id: 285, lines: 211, character: 'MESSENGERS.LEONATO.1', origin: 'Ado'},
        {id: 286, lines: 185, character: 'Verges', origin: 'Ado'},
        {id: 287, lines: 180, character: 'Balthasar', origin: 'Ado'},
        {id: 288, lines: 106, character: 'Sexton', origin: 'Ado'},
        {id: 289, lines: 106, character: 'WATCHMEN.Seacoal', origin: 'Ado'},
        {id: 290, lines: 101, character: 'WATCHMEN.1', origin: 'Ado'},
        {id: 291, lines: 48, character: 'MUSICIANS', origin: 'Ado'},
        {id: 292, lines: 24, character: 'WATCHMEN.2', origin: 'Ado'},
        {id: 293, lines: 19, character: 'Antonio', origin: 'Ado'},
        {id: 294, lines: 17, character: 'MESSENGERS.DONPEDRO.1', origin: 'Ado'},
        {id: 295, lines: 6, character: 'Boy', origin: 'Ado'},
        {id: 296, lines: 4, character: 'ATTENDANTS.0.1', origin: 'Ado'}
      ])
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('people_ado_id_seq', (SELECT MAX(id) FROM people_ado))"
      )
    })
}
