

let a = prompt("enter a number");
let b = prompt("enter a number");

let compareToTen = new Promise(function (resolve, reject) {
    if (a > b) {
        resolve("I will get a gift");
    } else {
        reject("${a} is smaller than ${b}");
    }
});