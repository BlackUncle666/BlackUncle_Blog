// 手写call源码
Function.prototype.mycall = function (context) {
    if (typeof this !== 'function') {
        throw new TypeError('Error')
    }
    context = context || window;
    context.fn = this;
    const args = [...arguments].slice(1);
    const result = context.fn(...args);
    delete context.fn;
    return result;
}
