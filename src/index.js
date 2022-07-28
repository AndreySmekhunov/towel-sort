
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let result = [];
  let num = 0;
  let l = 0;
  if (arguments.length === 0) return [];
  if ( matrix.length === 0) return [];
  for (let i = 0; i < matrix.length; i++) {
    l = matrix[i].length;
    if (i % 2 === 0) {
      for (let j = 0; j < l; j++) {
        num = matrix[i][j];
        result.push(num);
        }
    }
    if (i % 2 === 1) {
      for (let j = l-1; j >= 0; j--) {
        num = matrix[i][j];
        result.push(num);
        }
    }
  }
  return result; 
}