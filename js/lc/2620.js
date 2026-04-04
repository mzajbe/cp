// https://leetcode.com/problems/counter/description/?envType=study-plan-v2&envId=30-days-of-javascript

var createCounter = function (n) {
  let i = n;
  return function () {
    return i++;
  };
};

const counter = createCounter(-2);
console.log(counter());
console.log(counter());
console.log(counter());


