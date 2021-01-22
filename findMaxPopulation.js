 /*
 given a list people with their birth and death year
 find the year with highest population
 
 input : [1,2] [2,4] [2,5]
 
 [1,2,3], 
   [2,3] 2,3
   [2,3,4,5] 2
     [3,4] 3

[2000,2010]
,[1975,2005]
,[1975,2003]
,[1803,1809]
,[1750,1869]
,[1840,1935]
,[1803,1921]
,[1894,1921]

1 1
2 1 1 1
3 1 1
4 1
5 1
   
 min 1
 2
 max 5
 4
 2
   
 output : 2
 constrain 
 how many people ? 
 can be zero?
 can the highest population be duplicated?
 is it input sorted?
 
 naive way:
 read all years
 list out all possible years 
 incrementing each year with each people who's birth and death are within 
 
 O(years)
 
 better way:
 loop through all people O(people)
 find the intercept years and incrment just those O(years)
 
 
 */
var findMaxPopulation = function(people){
  var years = [];
  var max = {"year":0, "num":0};//[0,0];
  people.sort(function(a,b){return a[0]-b[0]}); //todo findout sort
 // console.log(people);
  for(var i = 0; i < people.length-1; i++){
    var yearsinbetween =  people[i][1] //death of first
        - people[i+1][0] ; //birth of second
    var yearsfromfirst = people[i][1] - yearsinbetween;
    //console.log(yearsinbetween,yearsfromfirst, people[i][1] ,people[i+1][0]);
    //if(yearsinbetween > 0){
      for(var j = yearsfromfirst; j < yearsfromfirst+yearsinbetween;j++){
        //console.log(j);
        if(!years[j]) years[j]=1;
        years[j]++;
        if(years[j]>max.num){
          max.year = j;
          max.num = years[j];
        };
      }
    //}
    //find the max of years[] 
  }
  //console.log('kk',years);
  //var maxC = Math.max(...years.map(o=>o));
  return max;
}
console.log(findMaxPopulation(
[
[2000,2010]
,[1975,2005]
,[1975,2003]
,[1803,1809]
,[1750,1869]
,[1840,1935]
,[1803,1921]
,[1894,1921]
,[1888,1911]
])
  );

