//Exercise 1
var topColors = ['red', 'white', 'blue'];
var choice = ['1st', '2nd', '3rd'];

for (var i = 0; i < topColors.length; i++){
	alert("My " + choice[i] + " is " + topColors[i]);
}

//Exercise 2

do  {
	var x = prompt("enter a number");
} 
while (x < 10);

//Exercise 3
var people = ["Greg", "Mary", "Devon", "James"];
//1.
for (var i = 0; i < people.length; i++) {
	console.log(people[i]);
}
//2.
people.shift();
//3.
people.splice(2,2, "Jason");
//4.
people.push("Gideon");
//5.
do {
	console.log(people[i]);
	i++;
} while (people[i] != "Mary");
//6.
var newArray = people.slice(1,3);
//7.
console.log(people.indexOf('Mary', 0));
//8.
console.log(people.indexOf('foo', 0));
//9.
var last = people[people.length-1];

//Exercise 4
var age = [20,5,12,43,98,55];
var sum = 0;
for (var i = 0; i < age.length; i++) {
	sum = age[i]+sum;
}
console.log(sum);

//part 2 of exercise 4
var age = [20,5,12,43,98,55];
var sum = 0;
for (var i = 0; i < age.length; i++) {
	if (age[i] % 2 == 0){
	sum = age[i]+sum;
	}
}
console.log(sum);