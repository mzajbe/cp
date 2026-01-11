//reverse first 5 letter from a string.

let str = "abcdefgh";
let reverseStr = "";

for (let i = 4; i >= 0; i--) {
  reverseStr += str[i];
}
console.log(reverseStr);
