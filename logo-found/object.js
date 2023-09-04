



const obj={
    c1:"https://www.salesforce.com/",
    c2:"https://www.hubspot.com/",
    c3:"https://www.activecampaign.com/",
    c4:"https://setshape.com/",
    c5:"https://www.oho.com/",
    c6:"https://www.freshworks.com/",
    c7:"https://www.pipedrive.com/",
c8:"https://sharpspring.com/",
c9:"https://www.copper.com/",
c10:"https://keap.com/ " 
}
let logoF ="https://logo.clearbit.com/";


for (const key in obj ) {
        
    // console.log(key, obj[key]);
   let point = obj[key]
   //console.log(point+"done");
   let url= logoF+point;
   console.log(url);


}




