//배열도 CRUD를 알아야제~

var arr = ['A', 'B', 'C','E','F'];
console.log(arr[0]); // R
arr[2] = '3'; // U
console.log(arr);
console.log(arr.length);
arr.push('D'); // C
console.log(arr);

console.log(arr.unshift('맨앞에 추가'));
console.log(arr);


console.log(arr.pop());
console.log(arr);

console.log(arr.shift());
console.log(arr);