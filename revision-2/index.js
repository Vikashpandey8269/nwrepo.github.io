/* example:-slice

let data =[1,2,3,4,5,6]

let subData =data.slice(2,5)
console.log(data,"data");
console.log(subData,"subData");

*/

/*//example :-splice

let data =[1,2,3,4,5,6,7]

let subData =data.splice(1,3)
//console.log(data,"data");//[1,5,6,7] splice  will change original 
//console.log(subData,"subData");// 2,3,4 it will remove these values from 1st index

let replace =data.splice(1,2,13,14)
//console.log(replace,"data");//[2,3]
//console.log(data,"data replaced");// it will update original array  from index 1st to two element 13, 14 in place of 2 and 3 
*/

/*//example:-switch

let dishName ="maggi";

switch(dishName){
    case "soup":
        console.log("soup price is 40 inr");
        break;
        case "maggi":
        console.log("maggi price is 20 inr");
        break;
        default:
            console.log("dish is not available");

}

// in switch statement if we don't add " break; " it will print all the result

//we can use default any where in code it will considered as else statement 
*/


/*//example:- deep copy

let student1={
    "name":"vikas",
    "city":"gwalior",
    "age":25,
    "id":2
}

let student2 =JSON.parse(JSON.stringify(student1))
//json.stringify =wit it we will convert object to string
// json.parse = with it we will convert string to object

student2.name="ankit";
console.log(student1);
console.log(student2); // it will change only in student2 object
*/


/*// example:-shallow copy
let student1={
    "name":"vikas",
    "city":"gwalior",
    "age":25,
    "id":2
}

let student2 =student1


student2.name="ankit";
console.log(student1);
console.log(student2); // it will change both  object
*/



//example:-array of object
let student1 = {
    "name":"Asgar",
    "city":"Mumbai",
    "age":24,
    "id":1
}

let student2 = {
    "name":"Aniket",
    "city":"Delhi",
    "age":22,
    "id":2
}

let student3 = {
    "name":"Raju",
    "city":"Punjab",
    "age":28,
    "id":3
}


let student4 = {
    "name":"Srinivas",
    "city":"Chennai",
    "age":24,
    "id":4
}

let students = [student1,student2,student3,student4]

console.log(students)

const UpdateStudentName = (studentsArray,idNo,updatedName)=>{
    
    let answer = []
    
    for(let i=0;i<studentsArray.length;i++){
        
        const student = JSON.parse(JSON.stringify(students[i]))
        
        if(student.id===idNo){
            student.name = updatedName;
            answer.push(student);
        }else{
            answer.push(student);
        }
        
    }
    
    return answer
    
}

console.log(UpdateStudentName(students,3,"Mr. Raju"))

console.log(students)


