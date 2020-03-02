var o = {
    v1 : 'v1',
    v2 : 'v2',
    f1 : function(){
        console.log(this.v1); // 함수가속해있는 객체를 참고할수있게 this로...!
    },
    f2 : function(){
        console.log(this.v2);
    }
} // 객체는 값을 저장하는 그릇이다! 

o.f1();
o.f2();