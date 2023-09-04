// let url ="http://logo.clearbit.com/";

/*
let logoF ="https://logo.clearbit.com/"
let companyUrl ="https://www.smarttouchinteractive.com/"

let url= logoF+companyUrl;

const imageP =document.querySelector("#logoC");
let ele=[]


function myFun(){
    let row = document.createElement("div");
    
   
row.innerHTML= ` <img src="${url}"/>`
   
    imageP.appendChild(row)
}*/




/*// 2new code example

const student ={
    c726:"https://www.smarttouchinteractive.com/",
    c727:"https://www.activecampaign.com/",
    c728:"https://www.hubspot.com/"
}
console.log(student);
let logoF ="https://logo.clearbit.com/";
const imageP =document.querySelector("#logoC");



function myFun(){
   
    
    let url= logoF+student.c726;

  
    let row = document.createElement("div");
    
   
    row.innerHTML= ` <img src="${url}"/>`
       
        imageP.appendChild(row)
    
 
}*/

//real code


const imageP =document.querySelector("#logoC");
let ele=[]
let count =1;



function myFun(){
    let logoF ="https://logo.clearbit.com/";


   
   
    for (const key in obj) {
        
        // console.log(key, obj[key]);
       let point = obj[key]
       //console.log(point+"done");
       
       let url= logoF+point;
       console.log(url+"done");
       let row = document.createElement("div");
       row.innerHTML= ` <img src="${url}"/>`
       let row1=document.createElement("p")
       row1.innerHTML=count++;
       row.appendChild(row1)
       
        imageP.appendChild(row)
       
       
       
       }
       
   
       console.log(url);

    
    
 
}



