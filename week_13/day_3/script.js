const register = () => {
let username = document.getElementById('username').value;
let password = document.getElementById('password').value;

const user = {
	username, 
	password
}


 fetch('http://localhost:3000/login', {
 	method: 'POST',
 	headers: {
 		'Content-type: 'application/json'
 	},
 	body: JSON.stringify(user)
 })
 .then(res => res.json())
 .then(data => {
 	console.log(data);
 })
 .catch(err => {
 	console.log('Error', err);
 })

}