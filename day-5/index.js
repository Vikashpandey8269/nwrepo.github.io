//example:-

const obj={
    name:"vikas",
    hobby:["singing","dancing","eating"],
    interest:{
        development:{
            technology:["front-end","git/github","chatgpt"],
            skills:["html","css","js"]

        },
        devops:{
            cloudComputing:{
                aws:["ec2","s3","lambda"]
            }
        }
    }


}
//console.log(obj);
//console.log(obj.interest.devops.cloudComputing);
//console.log(obj.name);



     // methods of object

// to find all keys in object
//c=console.log(Object.keys(obj))


     //c=console.log(Object.keys(obj.hobby));
     
     // to find the values
     //c=console.log(Object.values(obj.hobby));


     // entries it will give 2d array .array of array
     //c=console.log(Object.entries(obj));

     // hasOwnProperty it check that key present in object or not 
     //console.log(obj.hasOwnProperty("interest"));





