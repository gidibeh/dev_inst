let reverseArray = [1,2,3,4,5]; // [5,4,3,2,1]
let reverseArray1 = [1,2]; // [2,1]
let reverseArray2 = []; // []
let reverseArray3 = [1,2,3,4,5,6,7,8,9,10]; // [10,9,8,7,6,5,4,3,2,1]


   
   
  function reverse(arr) {
  var newArray = [];
 	 for (var i = arr.length - 1; i >= 0; i--) {
    	newArray.push(arr[i]);
  		}
  	return newArray;
	}

reverse(reverseArray);
reverse(reverseArray1);
reverse(reverseArray2);
reverse(reverseArray3);