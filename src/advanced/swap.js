let a = 8
let b = 10

// TODO: Swap the values of a and b without changing lines 1 and 2; extra points if you can do it without using a temporary variable

b = a + b // 8 + 10 = 18
a = b - a // 18 - 8 = 10
b = b - a // 18 - 10 = 8

module.exports = { a, b }
