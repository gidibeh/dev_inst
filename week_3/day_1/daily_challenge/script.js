

//Part 1
/*var array = ["Banana", "Apples", "Oranges", "Blueberries"];
Remove the Banana from the array.
Sort the array in order.
Put “Kiwi” at the end of the array.
Remove “Apples” from the array.
Sort the array in reverse order. (Not alphabetical, but reverse
the current Array i.e. [‘a’, ‘c’, ‘b’] becomes [‘b’, ‘c’, ‘a’])
you should have at the end:
[“Kiwi”, “Oranges”, “Blueberries”]*/


var array = ["Banana", "Apples", "Oranges", "Blueberries"];
array.splice(0,1);
//["Banana"]
var x = array.sort();
/*console.log(x)
(3) ["Apples", "Blueberries", "Oranges"]*/
array.push("kiwi");
/* ["Apples", "Blueberries", "Oranges", "kiwi"]*/
array.slice(0,1);
//["Apples"]
array.reverse();
//["kiwi", "Oranges", "Blueberries", "Apples"]



//Part 2

var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

//access “Oranges”.


console.log(array2[1][1]