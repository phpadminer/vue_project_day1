// console.log('ok');
let arr = [1,2,3,4,5];
arr.b = 'ccc'
// 编程式
for (let i = 0 ; i<arr.length ;i++ ){
    console.log(arr[i]);
}
// 声明式 不关心如何实现
arr.forEach(function (item) {
    console.log(item);
})
// for in key会变成字符串类型，包括数组的私有化属性
for(let key in arr){
    console.log(key)
}
// 支持return 并且是值of数组 不能遍历对象
for(let key of arr){
    console.log(key);

}

let obj = {a:'a',b:'b'};
console.log(Object.keys(obj));
// 不操作原数组 返回结果：过滤后的新书组 回调函数返回结果 如果是true 表示这一项放到新数组中

arr.filter(function(item){
    console.log(item);
})

// map 映射 将原来的数组映射成新的数组 不操作原数组 返回什么

let arr1 = arr.map(function (item) {
    return `<li>${item}</li>`;
})
console.log(typeof(arr1.join(' ')));

// includes 检查数组中是否有某一个元素  不操作原数组 返回boolean
console.log(arr.includes('3'));

// 找到一个符合条件的元素
let res = arr.find(function (item) {
    return item>3;
})
console.log(res);
// 求和
let arr2 = ['1','2','3','4'];
let res1 = arr2.reduce(function (prev,next) {
    console.log(arguments);
    // console.log(prev);
     // return all + item;
})
console.log(typeof(res1));
// 计算各项中的和
let arr3 = [{'price':30,'count':2},{'price':30,'count':3},{'price':30,'count':4}] ;
let res3 = arr3.reduce(function (prev,next) {
  return prev + next.price * next.count;
},0)
console.log(res3);
// 讲一个二维数组拼接成一个一维数组
let arr4 = [[1,2,3],[4,5,6],[7,8,9]]  ;
let res4 = arr4.reduce(function(prev,next){
    return prev.concat(next);
})
console.log(res4);

