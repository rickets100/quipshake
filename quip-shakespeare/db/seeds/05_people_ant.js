exports.seed = function(knex) {
  return knex('people_ant').del()
    .then(() => {
      return knex('people_ant').insert([
        {id: 1, lines: 5998, character: 'Antony', origin: 'Ant'},
        {id: 2, lines: 4695, character: 'Cleopatra', origin: 'Ant'},
        {id: 3, lines: 2889, character: 'Octavius', origin: 'Ant'},
        {id: 4, lines: 2436, character: 'Enobarbus', origin: 'Ant'},
        {id: 5, lines: 931, character: 'Pompey', origin: 'Ant'},
        {id: 6, lines: 632, character: 'Charmian', origin: 'Ant'},
        {id: 7, lines: 459, character: 'Menas', origin: 'Ant'},
        {id: 8, lines: 411, character: 'Lepidus', origin: 'Ant'},
        {id: 9, lines: 376, character: 'Agrippa', origin: 'Ant'},
        {id: 10, lines: 286, character: 'Dolabella', origin: 'Ant'},
        {id: 11, lines: 284, character: 'Eros', origin: 'Ant'},
        {id: 12, lines: 267, character: 'Scarus', origin: 'Ant'},
        {id: 13, lines: 255, character: 'Maecenas', origin: 'Ant'},
        {id: 14, lines: 252, character: 'Countryman', origin: 'Ant'},
        {id: 15, lines: 234, character: 'Octavia', origin: 'Ant'},
        {id: 16, lines: 224, character: 'MESSENGERS.X.2', origin: 'Ant'},
        {id: 17, lines: 220, character: 'Ventidius', origin: 'Ant'},
        {id: 18, lines: 211, character: 'Proculeius', origin: 'Ant'},
        {id: 19, lines: 209, character: 'Soothsayer', origin: 'Ant'},
        {id: 20, lines: 207, character: 'Alexas', origin: 'Ant'},
        {id: 21, lines: 182, character: 'Thidias', origin: 'Ant'},
        {id: 22, lines: 165, character: 'Canidius', origin: 'Ant'},
        {id: 23, lines: 160, character: 'Iras', origin: 'Ant'},
        {id: 24, lines: 159, character: 'GUARDS.Dercetus', origin: 'Ant'},
        {id: 25, lines: 128, character: 'Diomedes', origin: 'Ant'},
        {id: 26, lines: 125, character: 'Philo', origin: 'Ant'},
        {id: 27, lines: 118, character: 'Mardian', origin: 'Ant'},
        {id: 28, lines: 107, character: 'Ambassador', origin: 'Ant'},
        {id: 29, lines: 91, character: 'WATCHMEN.Sentry', origin: 'Ant'},
        {id: 30, lines: 87, character: 'SOLDIERS.ANTONY.X.1', origin: 'Ant'},
        {id: 31, lines: 86, character: 'GUARDS.CAESAR.0.1', origin: 'Ant'},
        {id: 32, lines: 83, character: 'MESSENGERS.ANTONY.1', origin: 'Ant'},
        {id: 33, lines: 79, character: 'SOLDIERS.ANTONY.0.1', origin: 'Ant'},
        {id: 34, lines: 77, character: 'SOLDIERS.ANTONY.0.2', origin: 'Ant'},
        {id: 35, lines: 69, character: 'SERVANTS.0.1', origin: 'Ant'},
        {id: 36, lines: 67, character: 'MESSENGERS.CAESAR.2', origin: 'Ant'},
        {id: 37, lines: 67, character: 'Silius', origin: 'Ant'},
        {id: 38, lines: 63, character: 'SOLDIERS.ANTONY.X.3', origin: 'Ant'},
        {id: 39, lines: 62, character: 'SOLDIERS.CAESAR.X.1', origin: 'Ant'},
        {id: 40, lines: 61, character: 'SERVANTS.0.2', origin: 'Ant'},
        {id: 41, lines: 49, character: 'MESSENGERS.CAESAR.1', origin: 'Ant'},
        {id: 42, lines: 39, character: 'Boy', origin: 'Ant'},
        {id: 43, lines: 37, character: 'Egyptian', origin: 'Ant'},
        {id: 44, lines: 36, character: 'GUARDS.0.1', origin: 'Ant'},
        {id: 45, lines: 35, character: 'Demetrius', origin: 'Ant'},
        {id: 46, lines: 29, character: 'SOLDIERS.ANTONY.0.3', origin: 'Ant'},
        {id: 47, lines: 27, character: 'Varrius', origin: 'Ant'},
        {id: 48, lines: 26, character: 'Seleucus', origin: 'Ant'},
        {id: 49, lines: 26, character: 'WATCHMEN.2', origin: 'Ant'},
        {id: 50, lines: 25, character: 'WATCHMEN.1', origin: 'Ant'},
        {id: 51, lines: 24, character: 'CAPTAINS.0.1', origin: 'Ant'},
        {id: 52, lines: 24, character: 'Gallus', origin: 'Ant'},
        {id: 53, lines: 22, character: 'MESSENGERS.ANTONY.3', origin: 'Ant'},
        {id: 54, lines: 21, character: 'GUARDS.CAESAR.1', origin: 'Ant'},
        {id: 55, lines: 20, character: 'SOLDIERS.ANTONY.0.4', origin: 'Ant'},
        {id: 56, lines: 18, character: 'SOLDIERS.ANTONY.X.2', origin: 'Ant'},
        {id: 57, lines: 17, character: 'CAPTAINS', origin: 'Ant'},
        {id: 58, lines: 15, character: 'GUARDS.0.2', origin: 'Ant'},
        {id: 59, lines: 14, character: 'SOLDIERS.ANTONY', origin: 'Ant'},
        {id: 60, lines: 13, character: 'MESSENGERS.X.3', origin: 'Ant'},
        {id: 61, lines: 11, character: 'ATTENDANTS.CAESAR', origin: 'Ant'},
        {id: 62, lines: 11, character: 'GUARDS.0.3', origin: 'Ant'},
        {id: 63, lines: 9, character: 'GUARDS.CAESAR.0.2', origin: 'Ant'},
        {id: 64, lines: 9, character: 'GUARDS', origin: 'Ant'},
        {id: 65, lines: 9, character: 'MESSENGERS.ANTONY.2', origin: 'Ant'},
        {id: 66, lines: 7, character: 'SERVANTS.X.2', origin: 'Ant'},
        {id: 67, lines: 6, character: 'MESSENGERS.X.1', origin: 'Ant'},
        {id: 68, lines: 6, character: 'MESSENGERS.X.5', origin: 'Ant'},
        {id: 69, lines: 4, character: 'MESSENGERS.X.4', origin: 'Ant'},
        {id: 71, lines: 4, character: 'SERVANTS.X.1', origin: 'Ant'},
        {id: 72, lines: 3, character: 'ATTENDANTS.ANTONY', origin: 'Ant'},
        {id: 73, lines: 3, character: 'LADIES', origin: 'Ant'},
        {id: 74, lines: 3, character: 'SERVANTS', origin: 'Ant'},
        {id: 75, lines: 2, character: 'Taurus', origin: 'Ant'}
      ])
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('people_ant_id_seq', (SELECT MAX(id) FROM people_ant))"
      )
    })
}