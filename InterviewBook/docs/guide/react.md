# React
## React是什么特点是什么
- 用于构建用户界面的 JavaScript 库
- 声明式
- 组件化
- 一次学习，随处编写
## React的状态复用逻辑有哪些
- HOC
- hooks
- render props
## 为什么React引入JSX
- React 团队认为 JSX 不会引入太多新的概念，编码更纯净，更具有可读性，更贴近 HTML。而对于 JSX 本身来说，是 React.createElement() 函数的语法糖，createElement() 对参数进行拆解后，发起 ReactElement 调用生成虚拟 DOM 对象。
- React.createElement 到底做了什么呢
  - React. createElement 二次处理 key、ref、self、 source 四个属性值；
  - 遍历 config，筛出可以提进 props 里的属性；
  - 提取子元素，推入 childArray（也即 props.children）数组；
  - 格式化 defaultProps；
  - 结合以上数据作为入参，发起 ReactElement 调用；

## 说一下你对虚拟dom的理解
- 是React.createElement返回的一个JS对象
- 描述真实dom的JS对象
- $$typeof/type/key/props
- 避免用户操作真实DOM
- 可以防范XSS处理
- 减少更新时DOM操作

## 函数式组件和类组件的区别
- 编程思想不同：类组件+基于面向对象的方式编程，而函数式组件+基于函数式编程的思想
- 内存占用：类组件需要创建并保存实力，会在占用一定的内存，函数组件不需要创建实例，可以节约内存
- 捕获特性：函数组件具有值捕获特性
- 可测试性：函数式组件更方便，编写单元测试
- 状态：类组件有自己的实例，可以定义状态，而且可以修改状态更新组件，函数式组件以前没有状态，现在可以使用useState状态
- 生命周期：类组间有自己完整的生命周期，可以在生命周期内编写逻辑，函数组件以前没有生命周期，现在可以使用useEffect实现类似生命周期
- 逻辑复用：类组件可以通过继承实现逻辑的复用，但官方推荐组件的优于继承，函数组件可以通过自定义Hooks实现逻辑复用
- 跳过更新：类组件可以通过shouldComponentUpdate和PureComponent来跳过更新，而函数组件可以使用React.memo来跳过更新
- 发展前景：未来函数至福建将会成为主流，因为它可以更好的避免this问题，规范和复用逻辑

## 请说一下React中的渲染流程
- 

## 请说一下你对reacr合成事件的理解
- React 合成事件（SyntheticEvent）是 React 模拟原生 DOM 事件所有能力的一个事件对象，即浏览器原生事件的跨浏览器包装器。它根据 W3C 规范 来定义合成事件，兼容所有浏览器，拥有与浏览器原生事件相同的接口。 
- 首先得了解事件捕获，事件目标，事件冒泡和事件委托。
- React 所有事件都挂载在 document 对象上；
- 当真实 DOM 元素触发事件，会冒泡到 document 对象后，再处理 React 事件；
- 所以会先执行原生事件，然后处理 React 事件；
- 最后真正执行 document 上挂载的事件。
- React 事件池仅支持在 React 16 及更早版本中，在 React 17 已经不使用事件池。
- 在 React 合成事件中，需要阻止冒泡时，可以使用 e.stopPropagation() 或 e.preventDefault()  方法来解决，另外还可以使用 e.nativeEvent.stopImmediatePropagation() 方法解决。

## 谈谈受控组件和非受控组件的区别
- 判断一个组件是不是受控组件，就要看这个表单组件它是否由react的state状态控制，它的值是否保存在this.state中，是否只能使用setState将修改后的值同步到初始变量。
简而言之，表单数据状态受React的state控制，通过setState修改的就是受控组件，通过DOM控制，不受state控制的就是非受控组件
## 谈谈react的生命周期

## 谈谈react中refs的使用
Refs 是使用 React.createRef() 创建的，并通过 ref 属性附加到 React 元素。在构造组件时，通常将 Refs 分配给实例属性，以便可以在整个组件中引用它们。

## react中setState到底是异步还是同步
- 有时是同步，有时是异步。
- 合成事件和生命周期函数里是异步的，其实造成setState的异步并不是由内部的异步代码引起的，在本身的执行过程中时同步的，但是合成事件和生命周期函数的调用顺序在更新之前，导致在内部不能直接得到更新后的值。
- 在原生事件和setTimeout里是同步的
- 异步setState可能会被合并的问题，就是进行多次相同的异步setState操作时，更新前会被合并。
## 谈谈react中组件通信方式有哪些
- 利用 Props 实现组件通信
- Props 实现父子组件通信
## 谈谈对React fiber的理解
- 为了解决 diff 时间过长导致的卡顿问题，React Fiber 用类似 requestIdleCallback 的机制来做异步 diff。但是之前的数据结构不支持这样的实现异步 diff，于是 React 实现了一个类似链表的数据结构，将原来的 递归diff 变成了现在的 遍历diff，这样就能方便的做中断和恢复了。
- 操作系统会按照一定的调度策略，先到先得(First-Come-First-Served, FCFS)，轮转，最短进程优先(Shortest Process Next, SPN)，最短剩余时间(Shortest Remaining Time, SRT)，最高响应比优先(HRRN)-（注：响应比 = （等待执行时间 + 进程执行时间） / 进程执行时间）， 反馈法
- React 的 Reconcilation 是CPU密集型的操作, 它就相当于我们上面说的’长进程‘，为了给用户制造一种应用很快的'假象'，我们不能让一个程序长期霸占着资源. 你可以将浏览器的渲染、布局、绘制、资源加载(例如HTML解析)、事件响应、脚本执行视作操作系统的'进程'，我们需要通过某些调度策略合理地分配CPU资源，从而提高浏览器的用户响应速率, 同时兼顾任务执行效率。
- 所以 React 通过Fiber 架构，让自己的Reconcilation 过程变成可被中断。 '适时'地让出CPU执行权，除了可以让浏览器及时地响应用户的交互，还有其一次性操作大量 DOM 节点相比, 分批延时对DOM进行操作，可以得到更好的用户体验。
- React 目前的做法是使用链表, 每个 VirtualDOM 节点内部现在使用 Fiber表示, 可以很清晰地看到每次渲染有两个阶段：Reconciliation(协调阶段) 和 Commit(提交阶段）
- Reconciliation(协调阶段)可以认为是 Diff 阶段, 这个阶段可以被中断, 这个阶段会找出所有节点变更，例如节点新增、删除、属性变更等等, 这些变更React 称之为'副作用(Effect)' ，Commit(提交阶段）将上一个阶段计算出来的需要处理的副作用(Effects)一次性执行了。这个阶段必须同步执行，不能被打断。
- Fiber 包含结构信息，节点类型信息，节点的状态，副作用，替身
- WIP 树构建这种技术类似于图形化领域的'双缓存(Double Buffering)'技术, 图形绘制引擎一般会使用双缓冲技术，先将图片绘制到一个缓冲区，再一次性传递给屏幕进行显示，这样可以防止屏幕抖动，优化渲染性能。
- 接下来就是副作用的收集和提交
## 谈谈你对react中的Mixin的了解
Mixin模式就是一些提供能够被一个或者一组子类简单继承功能的类,意在重用其功能
## 谈谈你对react中Render Props的了解
- render prop是一种在React组件之间使用一个值为函数的prop共享代码的技术，即使用了render这个prop的组件，接受一个函数来渲染元素，即父组件控制这部分的显示内容，而不是组件内部去实现自己的渲染逻辑。而父组件渲染的元素使用的数据是子组件内部控制的状态

## 谈谈你对react中高阶组件HOC的了解
- 高阶组件(HOC)是接受一个组件并返回一个新组件的函数。基本上，这是一个模式，是从 React 的组合特性中衍生出来的，称其为纯组件，因为它们可以接受任何动态提供的子组件，但不会修改或复制输入组件中的任何行为。
- HOC可以用于以下许多用例，代码重用、逻辑和引导抽象，渲染劫持，state 抽象和操作，props 处理
## 谈谈你对react中react-hooks的了解
- Hooks 是 React 16.8 新增的特性，它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性
- Hooks 解决的问题，组件的不足（状态逻辑难复用，趋向复杂难以维护，this 指向问），能在无需修改组件结构的情况下复用状态逻辑（自定义 Hooks ），能将组件中相互关联的部分拆分成更小的函数（比如设置订阅或请求数据），副作用的关注点分离：副作用指那些没有发生在数据向视图转换过程中的逻辑，如 ajax 请求、访问原生dom 元素、本地持久化缓存、绑定/解绑事件、添加订阅、设置定时器、记录日志等。
- 它们允许在不编写类的情况下使用state和其他 React 特性。使用 Hooks，可以从组件中提取有状态逻辑，这样就可以独立地测试和重用它。Hooks 允许咱们在不改变组件层次结构的情况下重用有状态逻辑，这样在许多组件之间或与社区共享 Hooks 变得很容易。
- 首先，Hooks 通常支持提取和重用跨多个组件通用的有状态逻辑，而无需承担高阶组件或渲染 props 的负担。Hooks 可以轻松地操作函数组件的状态，而不需要将它们转换为类组件。
- Hooks 在类中不起作用，通过使用它们，咱们可以完全避免使用生命周期方法，例如 componentDidMount、componentDidUpdate、componentWillUnmount。相反，使用像useEffect这样的内置钩子。
## 谈谈你对Redux的了解
## 谈谈Redux和MobX的区别

## 谈谈React18