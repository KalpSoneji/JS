const findMaxNum = (arr)=>{
    return Math.max(...arr)
}

var x = findMaxNum([23,33,98,121,45,67,89]);
console.log(x);

var a = [2,3,4];

var b = [7,8,9];

var c = [...a , ...b]

console.log(c);