const sumAll = function (int1, int2) {
  // find min and max; args can be entered in either order
  const minInt = Math.min(int1, int2);
  const maxInt = Math.max(int1, int2);

  if (minInt < 0 || typeof int1 === NaN || typeof int2 === NaN) return 'ERROR';

  let sum = 0;
  let i = minInt;

  // Sum all integers from minInt to maxInt
  while (i <= maxInt) {
    sum += i;
    
    i++;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
