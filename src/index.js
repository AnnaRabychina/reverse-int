module.exports = function reverse (n) {
  let num =Number(Math.abs(n).toString().slice().split('').reverse().join(''));
  return (num);
}
