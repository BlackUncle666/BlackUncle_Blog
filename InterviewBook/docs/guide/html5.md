# HTML5新特性
## canvas
- fillstyle/strokeStyle等颜色、样式和阴影API
- lineCap/lineWidth等样式API
- rect/fillRect等矩形API
- fill/stroke/beginPath/moveTo/lineTo等路径API
- scale/rotate/translate/transform等转换API
- font/textAlign/fillText等文本API
- drawImage图像绘画API

## 新增video和audio标签
- 属性：autoplay/controls/height/loop/width/preload等
## 语义化标签
- 新标签：article/nav/header/section/aside/footer/hgroup等
- 作用和优点
  - 让页面具有良好的结构和含义
  - 开发者友好，即有利于团队的开发与维护
  - 机器友好，适合搜索引擎的爬虫

## 表单控件
- Type属性值（url/email/date/time/week/number/range/tel/color/search）
- 属性（placeholder/autofocus/autocomplete）

## webworker/websocket/geolocation
- webworker
  - 允许在主线程之外再创建一个 worker 线程，在主线程执行任务的同时，worker 线程也可以在后台执行它自己的任务，互不干扰
  - 在worker内不能直接操作DOM节点，也不能使用window对象的默认方法和属性，无法加载本地资源

- websocket
  - 包装成了一个应用层协议作为socket，从而能够让客户端和远程服务端通过web建立全双工通信。websocket提供ws和wss两种URL方案

- geolocation
  - 地理位置 API 通过window.navigator.geolocation提供
