// // example:- function without parameter

// function hello(){
//     console.log(hello);
// }

// hello()

// // function without parameter and return value
// function hello1(){
//     console.log(hello1);
//     return "bye bye"
// }

// hello1()


// // function with parameter and return value
// function hello2(){
//     console.log(hello2);
//     return "bye bye"
// }

// hello2("ram")

//question:1
// var a= function name2(){
//     console.log("hello");
//     return "bye bye"
// }

// name2(); // it will give error

/*ans:1

memory allocation:- a is variable it will give undefine


code execution:-  it will update a undefine with function

here it will call name2 function but name2 is not in memory allocation
 thats by it will give error
*/

//Question:2 how to get return value

// var a= function name2(){
//     console.log("hello");
//     return "bye bye"
// }

//a();

//console.log(a);
//console.log(a());// 1st way for return statement "bye bye ""
/**
 when ever we call function in console it will execute function 1st and print "hello" then it will
   return value in console  then it will print "bye bye"
 */
// var b =a()
// console.log(b);//2nd way for return statement "bye bye ""

/** note:- for 2nd way
 when ever we call a function value is store in calling place 
 as for now in b
 */

//Question:-3

// function a(){  
//     var b=10   
//     console.log(b);
//     function c(){  
//         var d=20
//         console.log(d)
//         console.log(b)
//         function e(){  
//             console.log(c());
//         }
//         return e
//     }
//     return c
// }

// var f=a() 
// console.log(f)



//types of function

//1:-odnary

function getFun(first,name){
    const fullName =first +""+ name
    return fullName
}

console.log(getFun("vikas","pandey"))

//2:-arrow function : const wantName=()=>{}

const wantName =(name,age)=>{

    const myName=name+age
    return myName

}

console.log(wantName("vikas",34));

//3:-



