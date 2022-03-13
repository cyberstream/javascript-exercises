const ftoc = function(tempF) {
  if (typeof tempF !== 'number') return 'ERROR';

  // [°C] = ([°F] − 32) × 5⁄9
  const tempC = (tempF - 32) * (5/9);

  return roundOnePlace(tempC);
};

const ctof = function(tempC) {
  if (typeof tempC !== 'number') return 'ERROR';

  // [°F] = [°C] × 9⁄5 + 32
  const tempF = (tempC * 9/5) + 32;

  return roundOnePlace(tempF);
};

function roundOnePlace(num) {
  return (Math.round(num * 10) / 10);
}

console.log(ftoc(32));

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
