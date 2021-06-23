const permute = (nums) => {
  const results = [];
  
  const backtrack = (nums, temp) => {
    if (temp.length === nums.length) {
      results.push(temp.slice());
      return;
    }
    
    nums.forEach(function(num) {
      //if (!temp.includes(num)) {
console.log(temp);        
        temp.push(num);
        backtrack(nums, temp);
        temp.pop();
      //}
    });
  };
  
  backtrack(nums, []);
  return results;
};

console.log(permute([1,2,3]));