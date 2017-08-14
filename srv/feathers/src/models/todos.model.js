/* eslint-disable no-console */

// todos-model.js - A KnexJS
// 
// See http://knexjs.org/
// for more of what you can do here.
module.exports = function (app) {
  const db = app.get('knexClient');

  db.schema.hasTable('todos').then(exists => {
    if(!exists) {
      db.schema.createTable('todos', table => {
        table.increments('id');
        table.string('text');
      }).then(
        () => console.log('Updated todos table'),
        e => console.error('Error updating todos table', e)
      );
    }
  });
  

  return db;
};
