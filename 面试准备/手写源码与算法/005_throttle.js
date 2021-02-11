// 实现节流

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