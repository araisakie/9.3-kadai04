"use strict";

const numbers = [1, -22, 30, -4, 5, 6, 29, 12, 3];

/**
 * numbersの個数を表示
 */
console.log(numbers.length);

/**
 * 30は何番目
 */
console.log(numbers.indexOf(30));

/**
 * 10以上の数をリスト表示
 */
const numbers2 = numbers.filter((numbers) => numbers >= 10);
console.log(numbers2);

/**
 * 最初に数字を追加してリスト表示
 */
const Num = [77, ...numbers];
console.log(Num);

/**
 * 最後に数字を追加してリスト表示
 */
const Num2 = [...numbers, -77];
console.log(Num2);

/**
 * 3番目から5番目の数をリスト表示
 */
console.log(numbers.slice(3, 6));

/**
 * 逆順でリスト表示
 */

console.log(numbers.slice().reverse());

/**
 * すべてに2をかけてリスト表示
 */
const numbers3 = numbers.map((numbers) => numbers * 2);
console.log(numbers3);

/**
 * 先頭の要素を削除してリスト表示
 */

console.log(numbers.slice(1));

/**
 * 最後の要素を削除してリスト表示
 */

console.log(numbers.slice(0, -1));

/**
 * すべてを足した値を表示
 */
let total = numbers.reduce(function (sum, element) {
  return sum + element;
});

console.log(total);

/**
 * 最初に出てくる5以上の値を表示
 */
const numbers4 = numbers.find(function (numbers) {
  return numbers > 5;
});

console.log(numbers4);

/**
 * すべて-50以上(true/false)
 */
const Number = numbers.every((value) => value >= -50);
console.log(Number);

/**
 * -50は存在する(true/false)
 */
const Number2 = numbers.some((value) => value == -50);
console.log(Number2);

/**
 * 大きい順にリスト表示
 */
const numbers9 = [1, -22, 30, -4, 5, 6, 29, 12, 3];

numbers9.sort((a, b) => (a < b ? 1 : -1));

console.log(numbers9);

/**
 * 小さい順にリスト表示
 */
const numbers10 = [1, -22, 30, -4, 5, 6, 29, 12, 3];

numbers10.sort((a, b) => (a < b ? -1 : 1));

console.log(numbers10);
