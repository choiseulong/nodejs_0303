function a(){
    console.log('A');
}
var b = function(){
    console.log('B');
} // 함수는 값이다 b();

function slowfunc(callback){
    callback();
}
slowfunc(b); // slowfunc 가 실행되고 var b 함수가 실행된다