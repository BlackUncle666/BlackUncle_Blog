function fib(n) {
    if (n < 2 && n >= 0) return n
    return fib(n - 1) + fib(n - 2)
}
fib(10)

function fib(n) {
    let array = new Array(n + 1).fill(null)
    array[0] = 0
    array[1] = 1
    for (let i = 2; i <= n; i++) {
        array[i] = array[i - 1] + array[i - 2]
    }
    return array[n]
}
fib(10)

// 在ES6规范中，有一个尾调用优化，可以实现高效的尾递归方案。
// ES6的尾调用优化只在严格模式下开启，正常模式是无效的。
'use strict'
function fib(n, current = 0, next = 1) {
    if (n == 0) return 0;
    if (n == 1) return next; // return next
    return fib(n - 1, next, current + next);
}
fib(10)
