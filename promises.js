

let a = prompt("enter a number");


let compareToTen = new Promise(function (resolve, reject) {
    if (a > 10) {
        resolve(a + " is greater than 10");
    } else {
        reject(a + " is less than 10");
    }
});

compareToTen;

let makeAllCapps = new Promise(function (resolve, reject){


});

const arrayOfWords = ['cucumber', 'tomato', 'avocado'];
const complicatedArray = ['cucumber', 44, true];




function makeAllCaps(arr) {
	arr.toUpperCase();
} 

function sortWords(){

}


let test = new Promise((resolve, reject) => {
    let x = makeAllCaps(arrayOfWords);
    let y = x.sortWords;
    if (goodGrades > 90) {
        resolve("Computer");
    } else if (goodGrades => 80 && goodGrades <= 89) {
        resolve("Phone");
    } else {
        reject("I won't get the gift");
    }
    console.log("Asynchronous test2")
})

test.finally(() => console.log(`No matter if I get a gift or not,I want to have good grades`))
test.then(value => console.log("Yeahhh I got a gift"))
test.then(value => console.log("I got an amazing gift : A ", value))



const makeAllCaps = (arr) => {
	let p = new Promise((resolve, reject) => {
		let capsArray = array.map(word => {
		return word.toUpperCase();
	})
   })
	
}