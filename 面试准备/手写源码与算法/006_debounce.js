// 实现防抖

function debounce(fn, delay) {
    let timeout;
    return function () {
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn.apply(this, arguments);
        }, delay);
    };
}
// 使用
window.onscroll = debounce(function () {
    console.log('debounce');
}, 1000);