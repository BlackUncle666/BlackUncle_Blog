// 实现柯里化

const curry = fn =>
    (
        judge = (...args) =>
            args.length >= fn.length
                ? fn(...args)
                : (...arg) => judge(...args, ...arg)
    );
const sum = (a, b, c, d) => a + b + c + d;
const currySum = curry(sum);

currySum(1)(2)(3)(4); // 10