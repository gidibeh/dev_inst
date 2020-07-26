var knex = require('knex');


const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    port: '5433',
    user : 'postgres',
    password : '123floor',
    database : 'myapp_test'
  }
});

console.log(
	db.select('*').from('countries')
	);

db.select('*').from('countries')
.then(data => {
	console.log(data);
})

db.('countries')
.where({country_id:'ZW'})
.update({country_name:'Zimbabwe'})
.returning('*')
.then(data => {
	console.log(data);
})

knex('users')
  .join('contacts', 'users.id', '=', 'contacts.user_id')
  .select('users.id', 'contacts.phone')



db.('countries')
.join('locations', 'country_id', '=', 'locations.country_id')
.select('country_id', 'country_name', 'city')
.then(data => {
	console.log(data);
})