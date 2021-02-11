/*
第1次循环确定最大的
第n次循环确定第n大的
 */
function BubbleSort(arr) {
    const length = arr.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr
}
console.log(BubbleSort([3, 2, 1, 6, 5, 4]));