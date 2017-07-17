exports.seed = function(knex) {
  return knex('people_ham').del()
    .then(() => {
      return knex('people_ham').insert([
        {id: 1, lines: 11613, character: 'Hamlet',  origin: 'Ham'},
        {id: 2, lines: 4084, character: 'Claudius',  origin: 'Ham'},
        {id: 3, lines: 2662, character: 'Polonius',  origin: 'Ham'},
        {id: 4, lines: 2073, character: 'Horatio',  origin: 'Ham'},
        {id: 5, lines: 1446, character: 'Laertes',  origin: 'Ham'},
        {id: 6, lines: 1183, character: 'Ophelia',  origin: 'Ham'},
        {id: 7, lines: 1050, character: 'Gertrude',  origin: 'Ham'},
        {id: 8, lines: 736, character: 'Gravedigger',  origin: 'Ham'},
        {id: 9, lines: 708, character: 'Rosencrantz',  origin: 'Ham'},
        {id: 10, lines: 680, character: 'Ghost',  origin: 'Ham'},
        {id: 11, lines: 440, character: 'Marcellus',  origin: 'Ham'},
        {id: 12, lines: 359, character: 'Osric',  origin: 'Ham'},
        {id: 13, lines: 352, character: 'PLAYERS.1',  origin: 'Ham'},
        {id: 14, lines: 337, character: 'PLAYERS.King',  origin: 'Ham'},
        {id: 15, lines: 323, character: 'Guildenstern',  origin: 'Ham'},
        {id: 16, lines: 247, character: 'PLAYERS.Queen',  origin: 'Ham'},
        {id: 17, lines: 226, character: 'Barnardo',  origin: 'Ham'},
        {id: 18, lines: 187, character: 'Fortinbras',  origin: 'Ham'},
        {id: 19, lines: 159, character: 'Voltemand',  origin: 'Ham'},
        {id: 20, lines: 99, character: 'ATTENDANTS.1',  origin: 'Ham'},
        {id: 21, lines: 97, character: 'Gravediggers Companion',  origin: 'Ham'},
        {id: 22, lines: 90, character: 'Doctor',  origin: 'Ham'},
        {id: 23, lines: 85, character: 'SOLDIERS.FORTINBRAS.Captain',  origin: 'Ham'},
        {id: 24, lines: 77, character: 'MESSENGERS.1',  origin: 'Ham'},
        {id: 25, lines: 67, character: 'ATTENDANTS.2',  origin: 'Ham'},
        {id: 26, lines: 65, character: 'Reynaldo',  origin: 'Ham'},
        {id: 27, lines: 55, character: 'Francisco',  origin: 'Ham'},
        {id: 28, lines: 40, character: 'AMBASSADORS',  origin: 'Ham'},
        {id: 29, lines: 40, character: 'PLAYERS.Lucianus',  origin: 'Ham'},
        {id: 30, lines: 40, character: 'SAILORS.0.1',  origin: 'Ham'},
        {id: 31, lines: 36, character: 'MESSENGERS.2',  origin: 'Ham'},
        {id: 32, lines: 16, character: 'PLAYERS.Prologue',  origin: 'Ham'},
        {id: 33, lines: 14, character: 'PLAYERS.0.1',  origin: 'Ham'},
        {id: 34, lines: 13, character: 'ATTENDANTS.0.1',  origin: 'Ham'},
        {id: 35, lines: 10, character: 'Cornelius',  origin: 'Ham'},
        {id: 36, lines: 8, character: 'FOLLOWERS.LAERTES',  origin: 'Ham'},
        {id: 37, lines: 3, character: 'ATTENDANTS.GUARDS',  origin: 'Ham'},
        {id: 38, lines: 3, character: 'ATTENDANTS', origin: 'Ham'}
      ])
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('people_ham_id_seq', (SELECT MAX(id) FROM people_ham))"
      )
    })
}
