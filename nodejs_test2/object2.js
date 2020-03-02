// array, object   자바스크립트에서 함수는 값이다
// var i = if(true){console.log(1)};   -->> 오류 while 도 마찬가지
var f = function(){ 
    console.log(1);
}
var a = [f];
a[0]();

var o = {
    func:f
}
o.func();