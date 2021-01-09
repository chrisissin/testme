/*
Let’s say N ppl go to trip, each spend some amount of money. 
Write a function to print out the how to split 
the money evenly, and minimize 
the number of transactions.

[5 10 15]  spend10

person 0 pays person 2 amount $5

[0 2 5]
[1 3 5]

// iterate through the array and the sum and average of numbers // O(n)
// average, count, persons spend
// iterate use the average number and find the difference between person's pay and store in another map //O(n)
// [[3] 5 [2] -2 [3] -3] // sort, 
// iterate the compare array itself to find match and push out counted //O(n^2)
// 
// 

*/

//const _ = require('lodash');

function sayHello(pays) {
  console.log('pays ', pays);
  if(!pays) return;
  var average = getAverage(pays); // get average
  console.log("average ", average);
  var difference = getDifference(pays, average);
  console.log("difference ", difference);
  var payback = getPayback(difference);
  console.log("payback ",payback);
}

function getPayback(difference){
	var payback = [];
	difference = difference.sort(function(a,b){return b-a;});
	for(var i = 0; i<difference.length;i++)
	{
		payback[i] = [];
		for(var j = 0;j < difference.length ; j++){
			if(i==j) {
				payback[i][j] = 0;
				difference.shift();
			}else{
				if(difference[j]<0){
					payback[i][j] = difference[i] + difference[j];
				}
			}
		}
	}
	return payback;
}

function getDifference(pays, average){
	var difference = [];
	for(var i = 0; i < pays.length; i++){
		difference[i] = average - pays[i];
	}
	return difference;
}

function getAverage(pays){
	var sum = 0;
  for(var i = 0; i < pays.length ; i++){
  	sum += pays[i];
  }
  average = sum / pays.length;
  return average;
}

sayHello([5,10,15]);
//_.times(5, sayHello);

