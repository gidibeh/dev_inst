/*const http = require('http');

const server = http.createServer( () => {
	console.log('Im listening');
});




const server = http.createServer( (req, res) =>{
	console.log('first request');
	res.setHeader('Content-Type', 'text/html');
	res.end('<h1>first response</h1>');
})

server.listen(3000);*/


const http = require('http');
const exp = require('express');
const cors =require('cors');

const app = exp();

app.get('/', (req, res) => {
	res.send()
})
app.listen(3000);