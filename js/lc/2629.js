const functions = [(x) => 10 * x, (x) => 10 * x, (x) => 10 * x];


var compose = function (functions) {
  return function (x) {
    return functions.reduceRight((value,fn)=> fn(value),x);
  };
};


const fn = compose(functions);

console.log(fn(1));
