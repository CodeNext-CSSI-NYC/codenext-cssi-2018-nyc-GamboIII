// Given two strings, a and b, return the result of putting them together in the order abba, e.g. "Hi" and "Bye" returns "HiByeByeHi".

Examples:
console.log(makeAbba("Hi", "Bye") + " → HiByeByeHi");
console.log(makeAbba("Yo", "Alice") + " → YoAliceAliceYo");
console.log(makeAbba("What", "Up") + " → WhatUpUpWhat");

function makeAbba(a, b) {
  return a + b + b + a;
}

// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty (length 0).

Examples:
console.log(comboString("Hello", "hi") + " → hiHellohi");
console.log(comboString("hi", "Hello") + " → hiHellohi");
console.log(comboString("aaa", "b") + " → baaab");

function comboString(a, b) {
  if (a.length > b.length) {
    return b + a + b;
  }else {
    return a + b + a;
  }
}

// Given a string of any length, return a new string where the last 2 chars, if present, are swapped, so "coding" yields "codign". If the string's length is less than 2, then simply return the string itself.

Examples:
console.log(lastTwo("coding") + " → codign");
console.log(lastTwo("ab") + " → ba");
console.log(lastTwo("a") + " → a");

function lastTwo(str) {
  if (str.length < 2) {
    return str;
  }else {
    return str.substring(0, str.length - 2) + str.charAt(str.length - 1) + str.charAt(str.length - 2)
  }
}
