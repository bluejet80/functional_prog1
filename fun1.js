'use strict';

// map is composing

// first without a functional setup

const nextCharForNumberString = str => {
  const trimmed = str.trim();
  const number = parseInt(trimmed);
  const nextNumber = number + 1;
  return String.fromCharCode(nextNumber);
};

const result = nextCharForNumberString('  73 ');
console.log(`Without Functional Setup: ${result}`);

// Another way with chaining but it looks bad

const charChain = str => String.fromCharCode(parseInt(str.trim()) + 1);
console.log(`With charChain: ${charChain('  72 ')}`);

// First step of functional Setup
// Use array methods by puttin the string in a box[]

// prettier-ignore
const newCharFunct = str => 
  [str]
  .map(s => s.trim())
  .map(r => parseInt(r))
  .map(i => i + 1)
  .map(m => String.fromCharCode(m))

const result2 = newCharFunct('  71 ');
console.log(result2);

// Now how bout we create our own type, call it Box

const Box = x => ({
  map: f => Box(f(x)),
  fold: f => f(x),
  show: () => `The result is ${x}`,
});

// then we will do the same thing again

// prettier-ignore
const boxCharFunct = str => 
    Box(str)
    .map(s => s.trim())
    .map(r => Number(r))
    .map(i => i + 2)
    .fold(m => String.fromCharCode(m))

const result3 = boxCharFunct('  72 ');
console.log(result3);
