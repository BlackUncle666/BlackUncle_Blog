let names = ["iPhone X", "iPhone XS"]
let colors = ["黑色", "白色"]
let storages = ["64g", "256g"]
let combine = function (...args) {
  let res = []
  let helper = function (argIndex, prev) {
    let arg = args[argIndex]
    let isLast = argIndex === args.length - 1
    for (let val of arg) {
      let cur = prev.concat(val)
      if (isLast) {
        // 如果已经处理到数组的最后一项了 则把拼接的结果放入返回值中
        res.push(cur)
      } else {
        helper(argIndex + 1, cur)
      }
    }
  }
  // 从属性数组下标为 0 开始处理
  // 并且此时的 prev 是个空数组
  helper(0, [])
  return res
}
console.log(combine(names, colors, storages))


const arr = [
  {
    id: "100001",
    value: ["大陆版", "港版", "台版"],
  },
  {
    id: "100002",
    value: ["红", "白", "黑"],
  },
  {
    id: "100003",
    value: ["64G", "32G", "16G"],
  }
]
let queue = []
function getItem(obj, i, arr) {
  for (let j = 0; j < arr[i].value.length; j++) {
    if (i < arr.length - 1) {
      obj[arr[i].id] = arr[i].value[j]
      getItem(obj, i + 1, arr)
    } else {
      obj[arr[i].id] = arr[i].value[j]
      console.log('here', obj);
      queue.push(JSON.parse(JSON.stringify(obj)))
    }
  }
}
getItem({}, 0, arr)
console.log(queue);