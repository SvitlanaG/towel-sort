
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let towelSortedArray = [];
    let openBrackets;
  if (typeof matrix == 'undefined' || matrix.length == 0) return towelSortedArray;
  else {
      for (let i = 0; i < matrix.length; i++) {
          if (i % 2 === 0) {
            let temp = matrix.slice(i, i + 1);
            openBrackets = temp[0];
            towelSortedArray.push(...openBrackets);
          } else {
            let temp = matrix.slice(i, i + 1);
            temp[0].sort((a, b) =>  b - a);
            openBrackets = temp[0];
            towelSortedArray.push(...openBrackets);
          }
      }
  }
  return towelSortedArray;
}