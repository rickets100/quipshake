exports.seed = function(knex) {
  return knex('works').del()
    .then(() => {
      return knex('works').insert([
        {id: 1,
        xmlName: '1H4.xml',
        jsName: '1H4.js',
        title: 'Henry IV Part 1',
        yearFirst: 1596,
        yearText: '1596-1597',
        order: 18,
        idno: '1H4',
        type: 'play'},

        {id: 2,
        xmlName: '1H6.xml',
        jsName: '1H6.js',
        title: 'Henry VI Part 1',
        yearFirst: 1591,
        yearText: '1591-1592',
        order: 5,
        idno: '1H6',
        type: 'play'},

        {id: 3,
        xmlName: '2H4.xml',
        jsName: '2H4.js',
        title: 'Henry IV Part 2',
        yearFirst: 1597,
        yearText: '1597-1598',
        order: 20,
        idno: '2H4',
        type: 'play'},

        {id: 4,
        xmlName: '2H6.xml',
        jsName: '2H6.js',
        title: 'Henry VI Part 2',
        yearFirst: 1591,
        yearText: '1591',
        order: 3,
        idno: '2H6',
        type: 'play'},

        {id: 5,
        xmlName: '3H6.xml',
        jsName: '3H6.js',
        title: 'Henry  VI Part 3',
        yearFirst: 1591,
        yearText: '1591',
        order: 4,
        idno: '3H6',
        type: 'play'},

        {id: 6,
        xmlName: 'AWW.xml',
        jsName: 'AWW.js',
        title: 'All\'s Well That Ends Well',
        yearFirst: 1604,
        yearText: '1604-1605',
        order: 30,
        idno: 'AWW',
        type: 'play'},

        {id: 7,
        xmlName: 'AYL.xml',
        jsName: 'AYL.js',
        title: 'As You Like It',
        yearFirst: 1599,
        yearText: '1599-1600',
        order: 23,
        idno: 'AYL',
        type: 'play'},

        {id: 8,
        xmlName: 'Ado.xml',
        jsName: 'Ado.js',
        title: 'Much Ado About Nothing',
        yearFirst: 1598,
        yearText: '1598-1599',
        order: 20,
        idno: 'Ado',
        type: 'play'},

        {id: 9,
        xmlName: 'Ant.xml',
        jsName: 'Ant.js',
        title: 'Anthony and Cleopatra',
        yearFirst: 1606,
        yearText: '1606',
        order: 34,
        idno: 'Ant',
        type: 'play'},

        {id: 10,
        xmlName: 'Cor.xml',
        jsName: 'Cor.js',
        title: 'Corialanus',
        yearFirst: 1608,
        yearText: '1608',
        order: 36,
        idno: 'Cor',
        type: 'play'},

        {id: 11,
        xmlName: 'Cym.xml',
        jsName: 'Cym.js',
        title: 'Cymbeline',
        yearFirst: 1610,
        yearText: '1610',
        order: 39,
        idno: 'Cym',
        type: 'play'},

        {id: 12,
        xmlName: 'Err.xml',
        jsName: 'Err.js',
        title: 'The Comedy of Errors',
        yearFirst: 1594,
        yearText: '1594',
        order: 10,
        idno: 'Err',
        type: 'play'},

        {id: 13,
        xmlName: 'H5.xml',
        jsName: 'H5.js',
        title: 'Henry V',
        yearFirst: 1599,
        yearText: '1599',
        order: 21,
        idno: 'H5',
        type: 'play'},

        {id: 14,
        xmlName: 'H8.xml',
        jsName: 'H8.js',
        title: 'Henry VIII',
        yearFirst: 1612,
        yearText: '1612-1618',
        order: 41,
        idno: 'H8',
        type: 'play'},

        {id: 15,
        xmlName: 'Ham.xml',
        jsName: 'Ham.js',
        title: 'Hamlet',
        yearFirst: 1599,
        yearText: '1599-1601',
        order: 24,
        idno: 'Ham',
        type: 'play'},

        {id: 16,
        xmlName: 'JC.xml',
        jsName: 'JC.js',
        title: 'Julius Caesar',
        yearFirst: 1599,
        yearText: '1599',
        order: 22,
        idno: 'JC',
        type: 'play'},

        {id: 17,
        xmlName: 'Jn.xml',
        jsName: 'Jn.js',
        title: 'King John',
        yearFirst: 1596,
        yearText: '1596',
        order: 16,
        idno: 'Jn',
        type: 'play'},

        {id: 18,
        xmlName: 'LLL.xml',
        jsName: 'LLL.js',
        title: 'Love\'s Labors Lost',
        yearFirst: 1594,
        yearText: '1594-1595',
        order: 11,
        idno: 'LLL',
        type: 'play'},

        {id: 19,
        xmlName: 'Lr.xml',
        jsName: 'Lr.js',
        title: 'King Lear',
        yearFirst: 1605,
        yearText: '1605-1606',
        order: 31,
        idno: 'Lr',
        type: 'play'},

        {id: 20,
        xmlName: 'MM.xml',
        jsName: 'MM.js',
        title: 'Measure for Measure',
        yearFirst: 1603,
        yearText: '1603-1604',
        order: 28,
        idno: 'MM',
        type: 'play'},

        {id: 21,
        xmlName: 'MND.xml',
        jsName: 'MND.js',
        title: 'A Midsummer Night\'s Dream',
        yearFirst: 1595,
        yearText: '1595',
        order: 15,
        idno: 'MND',
        type: 'play'},

        {id: 22,
        xmlName: 'MV.xml',
        jsName: 'MV.js',
        title: 'The Merchant of Venice',
        yearFirst: 1596,
        yearText: '1596-1597',
        order: 17,
        idno: 'MV',
        type: 'play'},

        {id: 23,
        xmlName: 'Mac.xml',
        jsName: 'Mac.js',
        title: 'Macbeth',
        yearFirst: 1606,
        yearText: '1606',
        order: 33,
        idno: 'Mac',
        type: 'play'},

        {id: 24,
        xmlName: 'Oth.xml',
        jsName: 'Oth.js',
        title: 'Othello',
        yearFirst: 1603,
        yearText: '1603-1604',
        order: 29,
        idno: 'Oth',
        type: 'play'},

        {id: 25,
        xmlName: 'Per.xml',
        jsName: 'Per.js',
        title: 'Pericles',
        yearFirst: 1607,
        yearText: '1607-1608',
        order: 35,
        idno: 'Per',
        type: 'play'},

        {id: 26,
        xmlName: 'R2.xml',
        jsName: 'R2.js',
        title: 'Richard II',
        yearFirst: 1595,
        yearText: '1595',
        order: 13,
        idno: 'R2',
        type: 'play'},

        {id: 27,
        xmlName: 'R3.xml',
        jsName: 'R3.js',
        title: 'Richard III',
        yearFirst: 1592,
        yearText: '1592-1593',
        order: 7,
        idno: 'R3',
        type: 'play'},

        {id: 28,
        xmlName: 'Rom.xml',
        jsName: 'Rom.js',
        title: 'Romeo and Juliet',
        yearFirst: 1595,
        yearText: '1595',
        order: 14,
        idno: 'Rom',
        type: 'play'},

        {id: 29,
        xmlName: 'Shr.xml',
        jsName: 'Shr.js',
        title: 'The Taming of the Shrew',
        yearFirst: 1590,
        yearText: '1590-1591',
        order: 2,
        idno: 'Shr',
        type: 'play'},

        {id: 30,
        xmlName: 'TGV.xml',
        jsName: 'TGV.js',
        title: 'Two Gentlemen of Verona',
        yearFirst: 1589,
        yearText: '1589-1591',
        order: 1,
        idno: 'TGV',
        type: 'play'},

        {id: 31,
        xmlName: 'TN.xml',
        jsName: 'js.xml',
        title: 'Twelfth Night',
        yearFirst: 1601,
        yearText: '1601',
        order: 26,
        idno: 'TN',
        type: 'play'},

        {id: 32,
        xmlName: 'TNK.xml',
        jsName: 'TNK.js',
        title: 'Two Noble Kinsmen',
        yearFirst: 1589,
        yearText: '1589-1591',
        order: 42,
        idno: 'TNK',
        type: 'play'},

        {id: 33,
        xmlName: 'Tim.xml',
        jsName: 'Tim.js',
        title: 'Timon of Athens',
        yearFirst: 1605,
        yearText: '1605-1606',
        order: 32,
        idno: 'Tim',
        type: 'play'},

        {id: 34,
        xmlName: 'Tit.xml',
        jsName: 'Tit.js',
        title: 'Titus Andronicus',
        yearFirst: 1591,
        yearText: '1591-1592',
        order: 6,
        idno: 'Tit',
        type: 'play'},

        {id: 35,
        xmlName: 'Tmp.xml',
        jsName: 'Tmp.js',
        title: 'The Tempest',
        yearFirst: 1610,
        yearText: '1610-1611',
        order: 40,
        idno: 'Tmp',
        type: 'play'},

        {id: 36,
        xmlName: 'Tro.xml',
        jsName: 'Tro.js',
        title: 'Troilus and Cresside',
        yearFirst: 1600,
        yearText: '1600-1602',
        order: 27,
        idno: 'Tro',
        type: 'play'},

        {id: 37,
        xmlName: 'WT.xml',
        jsName: 'WT.js',
        title: 'The Winter\'s Tale',
        yearFirst: 1609,
        yearText: '1609-1611',
        order: 38,
        idno: 'WT',
        type: 'play'},

        {id: 38,
        xmlName: 'Wiv.xml',
        jsName: 'Wiv.js',
        title: 'Merry Wives of Windsor',
        yearFirst: 1597,
        yearText: '1597',
        order: 19,
        idno: 'Wiv',
        type: 'play'},

        {id: 39,
        xmlName: 'Luc.xml',
        jsName: 'Luc.js',
        title: 'Lucrece',
        yearFirst: 1594,
        yearText: '1594',
        order: 12,
        idno: 'Luc',
        type: 'poem'},

        {id: 40,
        xmlName: 'PhT.xml',
        jsName: 'PhT.js',
        title: 'The Phoenix and Turtle',
        yearFirst: 1601,
        yearText: '1601',
        order: 25,
        idno: 'PhT',
        type: 'poem'},

        {id: 41,
        xmlName: 'Son.xml',
        jsName: 'Son.js',
        title: 'Sonnets',
        yearFirst: 1609,
        yearText: '1609',
        order: 37,
        idno: 'Son',
        type: 'poem'},

        {id: 42,
        xmlName: 'Ven.xml',
        jsName: 'Ven.js',
        title: 'Venus and Adonis',
        yearFirst: 1593,
        yearText: '1593',
        order: 9,
        idno: 'Ven',
        type: 'poem'}
      ])
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('works_id_seq', (SELECT MAX(id) FROM works))"
      )
    })
}
