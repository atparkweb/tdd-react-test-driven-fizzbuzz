const fizzBuzz = require('./index');

describe('fizzBuzz()', () => {
  it('returns "FizzBuzz" for multiples of 3 and 5', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
    expect(fizzBuzz(30)).toBe('FizzBuzz');
  });

  it('returns the number by default', () => {
    expect(fizzBuzz(4)).toBe('4');
    expect(fizzBuzz(71)).toBe('71');
  });

  it('returns "Fizz" for multiples of 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
    expect(fizzBuzz(9)).toBe('Fizz');
    expect(fizzBuzz(27)).toBe('Fizz');
  });

  it('returns "Buzz" for multiples of 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
    expect(fizzBuzz(25)).toBe('Buzz');
    expect(fizzBuzz(55)).toBe('Buzz');
  });
});
