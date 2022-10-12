//let arrNum = numbers.split(',').map(Number);

/*let numbers = "1762483";
let arrNum = Array.from(numbers).map(function (item) {
  return parseInt(item, 10);
});

let sum = 0;

for (let i = 0; i < arrNum.length; i++) {
  if (i % 2 === 0) {
    sum += arrNum[i];
  }
  if (i % 2 !== 0) {
    let multi = 0;
    multi = arrNum[i] * 2;
    if (multi > 9) {
      let splited = [];
      splited = Array.from(multi.toString()).map(Number);
      for (let j = 0; j < splited.length; j++) {
        sum += splited[j];
      }
    } else {
      sum += multi;
    }
  }
}
console.log(sum);
if (sum % 10 === 0) {
  console.log("Checksum is true");
} else console.log("Checsum is invalid");
*/
//refactor

let numbers = "1762483";
let arrNum = Array.from(numbers).map(function (item) {
  return parseInt(item, 10);
});

let sum = 0;

for (let i = 0; i < arrNum.length; i++) {
  if (i % 2 === 0) {
    sum += arrNum[i];
  }
  if (i % 2 !== 0) {
    let multi = arrNum[i] * 2;
    if (multi > 9) {
      let splited = Array.from(multi.toString()).map(Number);
      for (let j = 0; j < splited.length; j++) {
        sum += splited[j];
      }
    } else {
      sum += multi;
    }
  }
}
console.log(sum);
sum % 10 === 0
  ? console.log("Checksum is true")
  : console.log("Checksum is invalid");
