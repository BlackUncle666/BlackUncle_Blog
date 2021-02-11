function InsertionSort(arr) {
    const length = arr.length
    for (let i = 1; i < length; i++) {
        const temp = arr[i]
        for (let j = i - 1; j >= 0 && temp < arr[j]; j--) {
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = temp
    }
    return arr
}

console.log(InsertionSort([3, 2, 1, 6, 5, 4]));