

let obj = {
	name: "John",
	lastname: "Doe"
}


for (x in obj){
	console.log(x)
}

console.log(Objects.keys(obj))
console.log(Objects.entries(obj))
let [a, b] = [["hello"], ["bye"]];
console.log(a); // ["hello"]
console.log(b); // ["bye"]


for (let [key, value] of Objects.entries(obj)) {
	console.log(`${key}: ${value}`);
}


let myObj = {
	name : "John", 
    lastName : "Doe",
    age : 25,
    friends : ["Mark", "Lucie", "Anet"]
}
let i = 1;

for (let [key, value] of Object.entries(myObj)) {
    console.log(`The #${i} key is: ${key}, its value is : ${value}`);
    i++;
}






Daily challenge : Creating Objects
In this exercise, you will use object oriented programming concepts to define and use a custom object in JavaScript.

Create a class named Video. The class should take in arguments of title (a string), uploader (a string, the person who uploaded it), and seconds (a number, the duration), and it should save them as properties of the object.
Create a method on the Video object called watch(). When that method is called, it should use display a string like “You watched all 60 seconds of Otters Holding Hands!”
Instantiate a new Video object and call the watch() method on it.
Instantiate another Video object with different constructor arguments.
Bonus: Use an array of data and a for loop to instantiate 5 Video objects.
Bonus: Make the watch() method accept amounts of seconds to watch for, and call it with different amounts of seconds.










Exercise 1
Consider this code

const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}


const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
Analyse the code. What will be the output ?