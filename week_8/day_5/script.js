let button = document.querySelector('#button');
let name = document.querySelector('#name');
let height = document.querySelector('#height');
let gender = document.querySelector('#gender');
let birthyear = document.querySelector('#birthyear');
let homeworld = document.querySelector('#homeworld');

function getInfo(){
	updateloading();
	let randomNumber = Math.floor((Math.random() * 88) + 1);
	let randomNumber2 = Math.floor((Math.random() * 16) + 1);
	let apiURL = 'https://swapi.dev/api/people/' + randomNumber;
	let apiURL2 = 'https://swapi.dev/api/planets/' + randomNumber2 + name;


	
    
   /*function loadPlanets(){
  var docBod = document.body;
  let randomNumber = Math.floor((Math.random() * 88) + 1);
  var req = new XMLHttpRequest();
  var URLhost = 'https://swapi.co/api/people/' + f;
      req.open('GET', URLhost, true);
      req.addEventListener('load',function(){
        if(req.status >= 200 && req.status < 400){
          var response = JSON.parse(req.responseText);
          console.log(response);*/

    /*
	var req = new XMLHttpRequest();
	var URLhost = 'https://swapi.co/api/planets/
	req.open('GET', URLhost, true);
		req.addEventListener('load',function(){
		  if(req.status >= 200 && req.status < 400){
		    var response = JSON.parse(req.responseText);
		    console.log(response);
		  } else {
		    console.log('Error in network request: ' + req.statusText);
		  }});
		req.send(null);
		event.preventDefault();
*/

	axios.get(apiURL).then(function(response){
		updateInfo(response.data);
	}).catch(e => {
		updateError();
	})

	axios.get(apiURL2).then(function(response){
		updateInfo2(response.data);
	}).catch(e => {
		updateError();
	})

	
	
} 

function updateInfo(data){
	name.innerText = data.name;
	height.innerText = 'Height: ' + data.height;
	gender.innerText = 'Gender: ' + data.gender;
	birthyear.innerText = 'Birth Year ' + data.birth_year;
	homeworld.innerText = 'Homeworld: ' + data.homeworld;
	
}

function updateInfo2(data){
	homeworld.innerText = 'Homeworld: ' + data.homeworld;
}

function updateloading(data){
	name.innerHTML = '<i class="fa fa-spinner" aria-hidden="true"></i>';
}

function updateError(data){
	name.innerText = 'not found'
	height.innerText = 'not found'
	gender.innerText = 'not found'
	birthyear.innerText = 'not found'
	homeworld.innerText = 'not found'
}

button.addEventListener('click', getInfo);