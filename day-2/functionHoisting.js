/*a()
function a(){
    console.log("hello");//hello
}
/*
function hoisting

a():-is not participate in memory 
function a():-will  participate in memory elocation and store
all function 
console.log("hello"):-

a():- will participate in  code execution


 */

// Example :-
console.log(a);
console.log(b);
var a= 10;
var b =20;
console.log(a);
console.log(b);
aa()

function aa(){ // function is execute in local execution under the code execution in GEC
    var c=30;
    var d=40;
    console.log(c);
    console.log(d);
    console.log("hello");

}
console.log(c);
console.log(d);
aa();