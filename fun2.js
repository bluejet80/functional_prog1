'use strict';

const Box = x => ({
  map: f => Box(f(x)),
  fold: f => f(x),
  show: () => `The result is ${x}`,
});

//Before refactor

const moneyToFloat = str => parseFloat(str.replace(/\$/g, ''));

const percentToFloat = str => {
  const replaced = str.replace(/\%/g, '');
  const number = parseFloat(replaced);
  return number * 0.01;
};

const applyDiscount = (price, disocunt) => {
  const cost = moneyToFloat(price);
  const savings = percentToFloat(disocunt);
  return `${disocunt} of ${price} is $${(cost - cost * savings).toFixed(2, 0)}`;
};

const applyTax = (price, tax) => {
  const cost = moneyToFloat(price);
  const num = percentToFloat(tax);
  return `${(cost + cost * num).toFixed(2, 0)}`;
};

console.log(applyDiscount(applyTax('$2.99', '8%'), '10%'));
