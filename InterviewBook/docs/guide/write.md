# 常见源码

## 节流
```
function throttle(fn, delay) {
  var prevTime = Date.now();
  return function() {
    var curTime = Date.now();
    if (curTime - prevTime > delay) {
      fn.apply(this, arguments);
      prevTime = curTime;
    }
  };
}
// 使用
var throtteScroll = throttle(function() {
  console.log('throtte');
}, 1000);
window.onscroll = throtteScroll;
```

## 防抖
```
function debounce(func, wait) {
  let timeout;
  return function() {
    let context = this;
    let args = arguments;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  };
}
// 使用
window.onscroll = debounce(function() {
  console.log('debounce');
}, 1000);
```

## bind 实现
```
Function.prototype.mybind = function(thisArg) {
    if (typeof this !== 'function') {
      throw TypeError("Bind must be called on a function");
    }
    // 拿到参数，为了传给调用者
    const args = Array.prototype.slice.call(arguments, 1),
      // 保存 this
      self = this,
      // 构建一个干净的函数，用于保存原函数的原型
      nop = function() {},
      // 绑定的函数
      bound = function() {
        // this instanceof nop, 判断是否使用 new 来调用 bound
        // 如果是 new 来调用的话，this的指向就是其实例，
        // 如果不是 new 调用的话，就改变 this 指向到指定的对象 o
        return self.apply(
          this instanceof nop ? this : thisArg,
          args.concat(Array.prototype.slice.call(arguments))
        );
      };
    // 箭头函数没有 prototype，箭头函数this永远指向它所在的作用域
    if (this.prototype) {
      nop.prototype = this.prototype;
    }
    // 修改绑定函数的原型指向
    bound.prototype = new nop();
    return bound;
  }
}
```

## call 实现
```
Function.prototype.mycall = function(thisArg) {
    // this指向调用call的对象
    if (typeof this !== 'function') {
      // 调用call的若不是函数则报错
      throw new TypeError('Error');
    }
    // 声明一个 Symbol 属性，防止 fn 被占用
    const fn = Symbol('fn')
    const args = [...arguments].slice(1);
    thisArg = thisArg || window;
    // 将调用call函数的对象添加到thisArg的属性中
    thisArg[fn] = this;
    // 执行该属性
    const result = thisArg[fn](...args);
    // 删除该属性
    delete thisArg[fn];
    // 返回函数执行结果
    return result;
  }
```

## apply 实现
```
Function.prototype.myapply = function(thisArg) {
  if (typeof this !== 'function') {
    throw this + ' is not a function';
  }
  const args = arguments[1];
  const fn = Symbol('fn')
  thisArg[fn] = this;
  const result = thisArg[fn](...arg);
  delete thisArg[fn];
  return result;
};
```

## new做了什么及实现
- 创建一个新对象
- 将构造函数的作用域赋给新对象（因此 this 就指向了这个新对象）
- 执行构造函数中的代码（为这个新对象添加属性）
- 返回新对象

```
function myNew() {
  // 创建一个实例对象
  var obj = new Object();
  // 取得外部传入的构造器
  var Constructor = Array.prototype.shift.call(arguments);
  // 实现继承，实例可以访问构造器的属性
  obj.__proto__ = Constructor.prototype;
  // 调用构造器，并改变其 this 指向到实例
  var ret = Constructor.apply(obj, arguments);
  // 如果构造函数返回值是对象则返回这个对象，如果不是对象则返回新的实例对象
  return typeof ret === 'object' && ret !== null ? ret : obj;
}
```

## class 实现继承
使用寄生组合继承的方式
- 原型链继承，使子类可以调用父类原型上的方法和属性
- 借用构造函数继承，可以实现向父类传参
- 寄生继承，创造干净的没有构造方法的函数，用来寄生父类的 prototype
```
// 实现继承，通过继承父类 prototype
function __extends(child, parent) {
  // 修改对象原型
  Object.setPrototypeOf(child, parent);
  // 寄生继承，创建一个干净的构造函数，用于继承父类的 prototype
  // 这样做的好处是，修改子类的 prototype 不会影响父类的 prototype
  function __() {
    // 修正 constructor 指向子类
    this.constructor = child;
  }
  // 原型继承，继承父类原型属性，但是无法向父类构造函数传参
  child.prototype =
    parent === null
      ? Object.create(parent)
      : ((__.prototype = parent.prototype), new __());
}

var B = (function() {
  function B(opt) {
    this.name = opt.name;
  }
  return B;
})();

var A = (function(_super) {
  __extends(A, _super);
  function A() {
    // 借用继承，可以实现向父类传参, 使用 super 可以向父类传参
    return (_super !== null && _super.apply(this, { name: 'B' })) || this;
  }
  return A;
})(B);
```

## 函数柯里化实现
```
const curry = fn =>
  (judge = (...args) =>
    args.length >= fn.length
      ? fn(...args)
      : (...arg) => judge(...args, ...arg));

const sum = (a, b, c, d) => a + b + c + d;
const currySum = curry(sum);

currySum(1)(2)(3)(4); // 10
currySum(1, 2)(3)(4); // 10
currySum(1)(2, 3)(4); // 10
```

## Object.create 原理(粗略版)
```
function object(obj){
  function F(){}
  F.prototype = obj;
  return new F();
}
```

## async/await 实现
- 异步迭代，模拟异步函数
```
function _asyncToGenerator(fn) {
  return function() {
    var self = this,
      args = arguments;
    // 将返回值promise化
    return new Promise(function(resolve, reject) {
      // 获取迭代器实例
      var gen = fn.apply(self, args);
      // 执行下一步
      function _next(value) {
        asyncGeneratorStep(
          gen, 
          resolve, 
          reject, 
          _next, 
          _throw, 
          'next', 
          value
        );
      }
      // 抛出异常
      function _throw(err) {
        asyncGeneratorStep(
          gen, 
          resolve, 
          reject, 
          _next, 
          _throw, 
          'throw', 
          err
        );
      }
      // 第一次触发
      _next(undefined);
    });
  };
}
```
- 执行迭代步骤，处理下次迭代结果
```
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    // 迭代器完成
    resolve(value);
  } else {
    // -- 这行代码就是精髓 --
    // 将所有值promise化
    // 比如 yield 1
    // const a = Promise.resolve(1) a 是一个 promise
    // const b = Promise.resolve(a) b 是一个 promise
    // 可以做到统一 promise 输出
    // 当 promise 执行完之后再执行下一步
    // 递归调用 next 函数，直到 done == true
    Promise.resolve(value).then(_next, _throw);
  }
}
```

## Array.isArray 实现
```
Array.myIsArray = function(o) {
  return Object.prototype.toString.call(Object(o)) === '[object Array]';
};

console.log(Array.myIsArray([])); // true
```

## instanceof 实现
原理：L的__proto__是不是等于R.prototype，不等于再找L.__proto__.__proto__直到__proto__为null
```
// L 表示左表达式，R 表示右表达式
function instance_of(L, R) {
  var O = R.prototype;
  L = L.__proto__;
  while (true) {
    if (L === null) return false;
    // 这里重点：当 O 严格等于 L 时，返回 true
    if (O === L) return true;
    L = L.__proto__;
  }
}
```

## 实现一个双向绑定
- defineProperty 版本
```
// 数据
const data = {
  text: 'default'
};
const input = document.getElementById('input');
const span = document.getElementById('span');
// 数据劫持
Object.defineProperty(data, 'text', {
  // 数据变化 --> 修改视图
  set(newVal) {
    input.value = newVal;
    span.innerHTML = newVal;
  }
});
// 视图更改 --> 数据变化
input.addEventListener('keyup', function(e) {
  data.text = e.target.value;
});
```

- proxy 版本
```
// 数据
const data = {
  text: 'default'
};
const input = document.getElementById('input');
const span = document.getElementById('span');
// 数据劫持
const handler = {
  set(target, key, value) {
    target[key] = value;
    // 数据变化 --> 修改视图
    input.value = value;
    span.innerHTML = value;
    return value;
  }
};
const proxy = new Proxy(data, handler);

// 视图更改 --> 数据变化
input.addEventListener('keyup', function(e) {
  proxy.text = e.target.value;
});
```

## 深浅拷贝
- 深拷贝
  - JSON.parse(JSON.stringify(object))局限性
    - 会忽略 undefined
    - 不能序列化函数
    - 不能解决循环引用的对象
  - lodash函数库实现深拷贝
  - 如何解决循环引用
    - 解决循环引用问题，我们可以额外开辟一个存储空间，来存储当前对象和拷贝对象的对应关系，当需要拷贝当前对象时，先去存储空间中找，有没有拷贝过这个对象，如果有的话直接返回，如果没有的话继续拷贝，这样就巧妙化解的循环引用的问题
  - 实现
```
function deepCopy(ori) {
  const type = getType(ori);
  let copy;
  switch (type) {
    case 'array':
      return copyArray(ori, type, copy);
    case 'object':
      return copyObject(ori, type, copy);
    case 'function':
      return copyFunction(ori, type, copy);
    default:
      return ori;
  }
}

function copyArray(ori, type, copy = []) {
  for (const [index, value] of ori.entries()) {
    copy[index] = deepCopy(value);
  }
  return copy;
}

function copyObject(ori, type, copy = {}) {
  for (const [key, value] of Object.entries(ori)) {
    copy[key] = deepCopy(value);
  }
  return copy;
}

function copyFunction(ori, type, copy = () => {}) {
  const fun = eval(ori.toString());
  fun.prototype = ori.prototype
  return fun
}
```
- 浅拷贝
  - Object.assign
  - 展开运算符（…）
