
exports.min = function min (array) {
  return array && array.length > 0 ?
        array.reduce((min, cur) => {
            if (cur < min) {
                min = cur;
            }

            return min;
        }, array[0]) : 0;
}

exports.max = function max (array) {
  if (!array || array.length === 0) return 0
    return Math.max(...array)
}

exports.avg = function avg (array) {
  if (!array || array.length === 0) return 0
    return (
        array.reduce((previous, current) => (current += previous), 0) /
        array.length
}
