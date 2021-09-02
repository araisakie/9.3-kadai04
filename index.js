"use strict";

const numbers = [1, -22, 30, -4, 5, 6, 29, 12, 3];

/**
 * numbersの個数を表示
 */
console.log(numbers);

/**
 * 30は何番目
 */
console.log(numbers.indexOf(30));

/**
 * 10以上の数をリスト表示
 */
const numbers2 = numbers.filter(function (value, index, array) {
  return value >= 10;
});
console.log(numbers2);

/**
 * 最初に数字を追加してリスト表示
 */
numbers.unshift(10000);
console.log(numbers);

/**
 * 最後に数字を追加してリスト表示
 */
numbers.push(100);
console.log(numbers);

/**
 * 3番目から5番目の数をリスト表示
 */
console.log(numbers.slice(3, 6));

/**
 * 逆順でリスト表示
 */
numbers.reverse();
console.log(numbers);

/**
 * すべてに2をかけてリスト表示
 */
const numbers3 = numbers.map(function (value, index, array) {
  return value * 2;
});
console.log(numbers3);

/**
 * 先頭の要素を削除してリスト表示
 */
numbers.shift();
console.log(numbers);

/**
 * 最後の要素を削除してリスト表示
 */
numbers.pop();
console.log(numbers);

/**
 * すべてを足した値を表示
 */
let total = numbers.reduce((sum, element) => sum + element, 0);

console.log(total);

/**
 * 最初に出てくる5以上の値を表示
 */
const numbers4 = numbers.find((element) => element > 5);

console.log(numbers4);

/**
 * すべて-50以上(true/false)
 */
const Number = numbers.every(function (value, index, array) {
  return value >= -50;
});
console.log(Number);

/**
 * -50は存在する(true/false)
 */
const Number2 = numbers.some(function (value, index, array) {
  return value == -50;
});
console.log(Number2);

/**
 * 大きい順にリスト表示
 */
const numbers9 = [1, -22, 30, -4, 5, 6, 29, 12, 3];

numbers9.sort(function (a, b) {
  return a < b ? 1 : -1;
});

console.log(numbers9);

/**
 * 小さい順にリスト表示
 */
const numbers10 = [1, -22, 30, -4, 5, 6, 29, 12, 3];

numbers10.sort(function (a, b) {
  return a < b ? -1 : 1;
});

console.log(numbers10);
