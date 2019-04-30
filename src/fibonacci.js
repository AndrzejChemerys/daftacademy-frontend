let fib = function (number) {
  if (isNaN(number)) {
      console.log(number + ' is not a number')
      return false;
  } else if (number < 0) {
      console.log(number + ' is negative value')
      return false;
  } else if (number === 0) {
      return [];
  } else if (number === 1) {
      return [0];
  } else if (number === 2) {
      return [0, 1];
  } else {
      let chain = [0, 1];
      for (let i = 2; i < number; i++)
          chain[i] = chain[i - 1] + chain[i - 2];
      return chain;
  }
}

// fib(-1);
// fib("asd");
// fib(1);

module.exports = fib;