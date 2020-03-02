var members = ['ong', 'bin', 'kim'];
console.log(members[1]) // bin

var i = 0
while(i<members.length){
    console.log('loop', members[i])
    i += 1
}
var roles = {
    'programmer' : 'ong',
    'designer' : 'bin',
    'manager' : 'kim'
}
console.log(roles.designer); // bin
console.log(roles['designer']); // bin

for(var name in roles){  // key값이 들어옴.
    console.log('object :', name, '/ value :', roles[name]);
}