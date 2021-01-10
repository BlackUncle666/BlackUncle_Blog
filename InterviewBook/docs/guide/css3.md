# CSS3新特性

## 新选择器
- p:frist-child 选择属于其元素的首个子元素
- p:first-of-type 选择属于其父元素的首个p元素的每个p元素
- p:last-of-type 选择属于其父元素的最后p元素的每个p元素
- p:only-of-type 选择属于其父元素唯一的p元素的每个p元素
- p:only-child 选择属于其父元素的唯一子元素的每个p元素
- p:nth-child(2) 选择属于其父元素的第二个子元素的每个p元素
- :after 在元素之前添加内容,也可以用来做清除浮动
- :before 在元素之后添加内容
- :enabled 已启用的表单元素
- :disabled 已禁用的表单元素
- :checked 单选框或复选框被选中

## 过渡（transition）
- transition-property: 属性
- transition-duration: 间隔
- transition-timing-function: 曲线
- transition-delay: 延迟
- 常用钩子: transitionend

## 动画（animation）
- animation-name: 动画名称，对应@keyframes
- animation-duration: 间隔
- animation-timing-function: 曲线
- animation-delay: 延迟
- animation-iteration-count: 次数（infinite: 循环动画）
- animation-direction: 方向（alternate: 反向播放）
- animation-fill-mode: 静止模式
- 常用钩子: animationend

## 旋转（transform）
- translate / translate3d / translateX / translateY / translateZ 移动
- scale / scale3d / scaleX / scaleY / scaleZ 缩放
- rotate / rotate3d / rotateX / rotateY / rotateZ 旋转
- skew / skewX / skewY 倾斜
- perspective / matrix / matrix3d 矩阵

## flex
- flex-direction
  - row | row-reverse | column | column-reverse
- flex-wrap
  - nowrap | wrap | wrap-reverse
- flex-flow
  - flex-direction || flex-wrap
- justify-content
  - flex-start | flex-end | center | space-between | space-around;
- align-items
  - flex-start | flex-end | center | baseline | stretch
- align-content
  - flex-start | flex-end | center | space-between | space-around | stretch

## @media媒体查询
- max-width/min-width/device-width

## 文本属性
- text-shadow/text-overflow/text-wrap/word-break/word-wrap/white-space

## 边框
- border-raduis/border-image

## 背景
- rgba/backgrounnd-size:cover/contain

## 渐变
- linear-gradient/radial-gradient

## 多列布局（column）