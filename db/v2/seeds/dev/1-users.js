
exports.seed = (knex) => {
  return knex('users').insert([
    {name: 'Alan', email: 'alan@turing.io', password: 'promisedotyall'},
    {name: 'Sam', email: 'sam@turing.io', password: '123456'},
    {name: 'Lucy', email: 'lucy@turing.io', password: 'password1'},
    {name: 'Greg', email: 'greg@turing.io', password: 'abc123'},
    {name: 'Ken', email: 'ken@turing.io', password: '654321'},
    {name: 'Charlie', email: 'charlie@turing.io', password: 'qwerty'},
    {name: 'Diana', email: 'diana@turing.io', password: '111111'},
    {name: 'Rick', email: 'rick@turing.io', password: 'asdf123'},
    {name: 'Marge', email: 'marge@turing.io', password: 'password123'},
    {name: 'Tinsel', email:'tinsel@turing.io', password: 'zxcvb'},
    {name: 'Claire', email: 'claire@turing.io', password: 'qwer1234'},
    {name: 'George', email: 'george@turing.io', password:'98765'},
    {name: 'Olivia', email: 'olivia@turing.io', password: 'pword'}
  ]);
};
