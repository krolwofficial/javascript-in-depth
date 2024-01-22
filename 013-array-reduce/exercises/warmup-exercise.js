/*
    1. Create an array called "points" with the numbers 55-60 (inclusive)

    2. Create a variable called "sum" using reduce that sums up the points in "points"
    
    3. Print out both "points" and "sum"
*/

const points = [55, 56, 57, 58, 59, 60];

const sum = (arr) => {
  arr.reduce((acc, item) => {
    console.log(item);
    console.log(acc);
  });
};

sum(points);
