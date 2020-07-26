// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string

const p = new Promise((resolve, reject) => {
	setTimeout(()=>{
		resolve('success')
	}, 4000)
});
// #2) Run the above promise and make it console.log "success"

p.then(res => {
	console.log("success");
})

// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"

const p = Promise.resolve(
	setTimeout(()=>{
		console.log('success')
	}, 4000)
)


// #4) Catch this error and console log 'Ooops something went wrong'

Promise.reject('failed');
.catch(console.log('error'))

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.




const urls = [
  'https://swapi.dev/api/people/1/',
  'https://swapi.dev/api/people/2/',
  'https://swapi.dev/api/people/3/',
  'https://swapi.dev/api/people/4/'
]

Promise.all(urls.map(url=>{
	return fetch(url).then(res => res.json())
}))
.then(arr =>{
	console.log('1 ', arr[0])
	console.log('2 ', arr[1])
	console.log('3 ', arr[2])
	console.log('4 ', arr[3])
})



Promise.all(['https://swapi.dev/api/people/1/',
  'https://swapi.dev/api/people/2/',
  'https://swapi.dev/api/people/3/',
  'https://swapi.dev/api/people/4/'])
 .then(result) => {
   console.log(result)
 })
 .catch(error => console.log(`Error in promises ${error}`))

// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?
//returns a promise below
const anAsyncexmaple = async() => {

} //returns promise




const getPosts = (userId) => new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log('Posts ', 'Done!');
		resolve([{id:1}]);
	}, 1500);
})


// Solve the below problems:

// #1) Convert the below promise into async await
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(date => console.log(data))

const exercise = async() => {
	try{
		const response = await fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(date => console.log(data));
	}
	catch(err){
		throw new Error('Can not fetch');
	}
}



// #2) ADVANCED: Update the function below to also have
// async await for this line: fetch(url).then(resp => resp.json())
// So there shouldn't be any .then() calls anymore!
// Don't get discouraged... this is a really tough one...
const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function() {
  const [ users, posts, albums ] = await Promise.all(urls.map(url =>
      fetch(url).then(resp => resp.json())
  ));
  console.log('users', users);
  console.log('posta', posts);
  console.log('albums', albums);
}

// #3) Add a try catch block to the #2 solution in order to catch any errors.
// Now chnage one of the urls so you console.log your error with 'ooooooops'