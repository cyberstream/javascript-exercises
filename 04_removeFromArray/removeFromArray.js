const removeFromArray = function(inputArray, ...valuesToRemove) {
  valuesToRemove.forEach(valueToRemove => {
    let valueIndex = inputArray.indexOf(valueToRemove);

    if (valueIndex >= 0) inputArray.splice(valueIndex, 1);
  });

  return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;