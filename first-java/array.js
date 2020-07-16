var friendsAge=[15,16,17,18];

friendsAge[2]=22;
console.log(friendsAge);
friendsAge.push(45);
console.log(friendsAge.length);
friendsAge.pop();
console.log(friendsAge);
var inch= 127;
var feet=inch/12;
console.log(feet);
function InToFeet(inch) {
    var feet = inch/12;
    return feet;
    
}
const NaniFeet=InToFeet(100);
console.log(NaniFeet);
const dadifeet= InToFeet(60);
console.log(dadifeet);

var name='Popy';
if(name.length<5)
{
    name='Tripti';
}
console.log(name);
console.log(2021/4)
console.log(2020/4)
const lipy=4568
let remainder=lipy%4
console.log(remainder==0)
for(var i=1; i<=10; i++)
{
    console.log(i)
}
