var a=10;
var b=20;
console.log(a+b);

/*
js code run in 2 phase 
1. memory allocation 
2. code execution

memory allocation :- in phase 1 code scan from top to bottom 
                  a- in memory allocation if var let const function and class is present in left side 
                   they will participate in both (memory allocation )and (code execution)

                   ex:-
                   a;// a is undefine in phase 1

                   b-in phase 2  if var let const function and class is not present in code then it will only participate
                   in code execution
                   ex:-
                   a=10;//it will update the value undefine to 10 by reading the code 


code execution:- in phase 2 code read from left to right line by line 


#execution context:- where our js code execute 

what is global execution context?





*/

console.log(b);
console.log(a) // it will give error because let is block scope it will not showing in gec(global execution context )
let a=10;
var b=20;
console.log(a+b);
/*
let and const is hoisted in block or (temporal dead zone) not in global scope 
thats by we are unable to access these from gec(global execution context )
like:-
script file 

what is temporal dead zone?

it is a place i can not access 
the place from which i use the variable to the variable declare


 */


// deepCopy
//