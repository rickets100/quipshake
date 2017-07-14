exports.seed = function(knex) {
  return knex('question_types').del()
    .then(() => {
      return knex('question_types').insert([
        {id: 1,
        question_type: 'chronology',
        question_class: 'multiple choice',
        num_options: 4},

        {id: 2,
        question_type: 'character origin',
        question_class: 'multiple choice',
        num_options: 4},

        {id: 3,
        question_type: 'character weight',
        question_class: 'multiple choice',
        num_options: 4},

        {id: 4,
        question_type: 'quote origin',
        question_class: 'multiple choice',
        num_options: 4},

        {id: 5,
        question_type: 'word frequency',
        question_class: 'multiple choice',
        num_options: 4},

        {id: 6,
        question_type: 'chronology',
        question_class: 'true or false',
        num_options: 2},

        {id: 7,
        question_type: 'character origin',
        question_class: 'true or false',
        num_options: 2},

        {id: 8,
        question_type: 'character weight',
        question_class: 'true or false',
        num_options: 2},

        {id: 9,
        question_type: 'quote origin',
        question_class: 'true or false',
        num_options: 2},

        {id: 10,
        question_type: 'word frequency',
        question_class: 'true or false',
        num_options: 2},

        {id: 11,
        question_type: 'chronology',
        question_class: 'multiple choice',
        num_options: 2},

        {id: 12,
        question_type: 'character origin',
        question_class: 'multiple choice',
        num_options: 2},

        {id: 13,
        question_type: 'character weight',
        question_class: 'multiple choice',
        num_options: 2},

        {id: 14,
        question_type: 'quote origin',
        question_class: 'multiple choice',
        num_options: 2},

        {id: 15,
        question_type: 'word frequency',
        question_class: 'multiple choice',
        num_options: 2}
      ])
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('question_types_id_seq', (SELECT MAX(id) FROM question_types))"
      )
    })
}
