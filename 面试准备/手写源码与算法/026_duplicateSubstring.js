

let repeatedSubstringPattern = function(s) {
    let s1 = (s + s).slice(1, -1);
    return s1.indexOf(s) != -1;
};

let repeatedSubstringPattern = function(s) {
    let len = s.length;
    for (let t = 1; t <= len / 2; t++) {
        const item = s.slice(0, t);
        const count = len / item.count;
        if (Number.isInteger(count) && item.repeat(count) === s) {
            return true
        }
    }
    return false
};

let repeatedSubstringPattern = function(s) {
    let reg = /^(\w+)\1+$/
    return reg.test(s)
};