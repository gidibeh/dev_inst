var myString = "This dinner is not that bad!";
var mySub = myString.indexOf("not");
var mySub2 = myString.indexOf("bad");

if (mySub == -1 && mySub2 == -1) {
	console.log("This dinner is not that bad!")
} else if ( mySub < mySub2 ) {
	myString.replace("not that bad", "good")
} else {
	console.log("This dinner is not that bad!")
}