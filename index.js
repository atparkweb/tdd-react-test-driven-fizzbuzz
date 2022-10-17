const multipleOf = (x) => (n) => n % x == 0;

module.exports = (num) => {
  if (multipleOf(15)(num)) {
    return "FizzBuzz";
  }
  if (multipleOf(3)(num)) {
    return "Fizz";
  }
  if (multipleOf(5)(num)) {
    return "Buzz";
  }

  return `${num}`;
};
