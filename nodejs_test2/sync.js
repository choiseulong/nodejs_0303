var fs = require('fs');

/*
// readFileSync 동기적 리턴값을 줌
console.log('A');
var result = fs.readFileSync('nodejs_test2/sample.txt', 'utf8');
console.log(result);
console.log('C');
*/

// readFile 비동기적 세번째에 콜백 - 다되면 함수 실행시켜~ 
console.log('A');
fs.readFile('nodejs_test2/sample.txt', 'utf8', function(err, result){
    console.log(result);
});
console.log('C');