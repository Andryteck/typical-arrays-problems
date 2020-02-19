
exports.min = function min(array) {
  if(array === undefined || array.length === 0) {
    return 0;
  }

  let min = array[0];
  array.forEach(element => {
    min = Math.min(min, element);
  });

  return min;
}

exports.max = function max(array) {
  if (!array || array.length === 0) return 0
  return Math.max(...array)
}

exports.avg = function avg(array) {
  if (!array || array.length === 0) return 0
  return (
    array.reduce((previous, current) => (current += previous), 0) /
    array.length
  )
}
