/* forEach */
const flatten = (arr) => {
    let result = [];
    arr.forEach((item, i, arr) => {
        if (Array.isArray(item)) {
            // result = result.concat(flatten(item));
            result.push(...flatten(item))
        } else {
            result.push(arr[i])
        }
    })
    return result;
};

/* toString */
const flatten = (arr) => arr.toString().split(',');

/* reduce */
function flatten(arr) {
    return arr.reduce(function (prev, cur) {
        return prev.concat(Array.isArray(cur) ? flatten(cur) : cur)
    }, [])
}

/* some */
function flatten(arr) {
    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr);
    }
    return arr;
}

/* some */
const flatten = (arr) => {
    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat.apply([], arr);
    }
    return arr;
}