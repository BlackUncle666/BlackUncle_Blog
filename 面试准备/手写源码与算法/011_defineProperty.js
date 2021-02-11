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
input.addEventListener('keyup', function (e) {
    data.text = e.target.value;
});

Object.defineProperty(date,'text',{
    set(newVal){

    }
})