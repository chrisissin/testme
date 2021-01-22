/*
In order to win the prize for most cookies sold, my friend Alice and I are going to merge our Girl Scout Cookies orders and enter as one unit.

Each order is represented by an "order id" (an integer).

We have our lists of orders sorted numerically already, in arrays. Write a function to merge our arrays of orders into one sorted array.

For example:

  const myArray = [3, 4, 6, 10, 11, 15];
const alicesArray = [1, 5, 8, 12, 14, 19];

console.log(mergeArrays(myArray, alicesArray));
// logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]



Gotchas
We can do this in O(n) and O(n) time and space.
*/

var mergeArrays = function(myArray, alicesArray){
	var newArray = [];
	var combinedLength = myArray.length + alicesArray.length;
	for(var i = 0; i < combinedLength ; i++){
		var smaller;
		if(myArray[0]<alicesArray[0] && myArray.length){
			smaller = myArray.shift();
		}else{
			smaller = alicesArray.shift();
		}
		newArray.push(smaller);
		console.log(newArray,myArray,alicesArray)
	}
	return newArray;
}

const myArray = [3, 4, 6, 10, 11, 15];
const alicesArray = [1, 5, 8, 12, 14, 19];
console.log(mergeArrays(myArray, alicesArray));