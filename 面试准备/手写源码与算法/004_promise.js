// 手写Promise源码

const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';
class Promise {
    constructor(params) {
        this.status = PENDING;
        this.value = undefined;
        this.reason = undefined;
        this.onFulfilledCallbacks = [];
        this.onRejectedCallbacks = [];
        const resolve = value => {
            if (this.status === PENDING) {
                this.status = FULFILLED;
                this.value = value;
                this.onFulfilledCallbacks.forEach(fn => fn(this.value))
            }
        }
        const reject = reason => {
            if (this.status === PENDING) {
                this.status = REJECTED;
                this.reason = reason;
                this.onRejectedCallbacks.forEach(fn => fn(this.reason))
            }
        }
        try {
            params(resolve, reject)
        } catch (error) {
            resolve()
        }
    }
    then() {

    }
    catch() {

    }
    static resolve(value) {
        if (value instanceof Promise) {
            // 如果是Promise实例，直接返回
            return value;
        } else {
            // 如果不是Promise实例，返回一个新的Promise对象，状态为FULFILLED
            return new Promise((resolve, reject) => resolve(value));
        }
    }
    static reject(reason) {
        return new Promise((resolve, reject) => {
            reject(reason);
        })
    }
}
