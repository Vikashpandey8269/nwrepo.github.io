/*// empty array

const num=[]

//example-1:

a=[1,2,3]
const arr =[a,[1,2,3],"hello",56.7,{name:"vikash"},true]

var b;
console.log(arr);

// .split()  :-[v,i,k,a,s,h]
const c='vikash';
const arr1= c.split('')
console.log(arr1);

// .split(",")   :-[ 'vikash' ,'pandey']
const ca='vikash, pandey';
const arr2= ca.split(',')
console.log(arr2);// it will give [ 'vikash' ,'pandey']

// print array index

const co='vikash, pandey';
const arr3= co.split(',')
console.log(arr3[1]);// pandey is in 1 index


// modify any array 


const arr4= [1,2,3,4,5,6,7]
arr4[3]=34
console.log(arr4);// it will modify in index 3 [1,2,3,34,4,5,6,7]


// .concat():-[1,2,3,4,5,6,7,8]

const arr5 =[1,2,3,4]
let arr7 =[5,6,7,8]

let finalArr=arr5.concat(arr7)
console.log(finalArr);// it will join both array

//to get length of array

console.log(finalArr.length);// it have total 8 index

// to get index


console.log(finalArr.indexOf(2))// index of 2 is 1 in finalArr


// to get last index

console.log(finalArr.lastIndexOf)

// .isArray
  const fruits =["apple","banana","orange"]
  console.log(fruits.isArray());


  // .join()

  const fruit =["apple","banana","orange"]

  console.log(fruit.join());


  // .slice

  const arr8=[1,2,3,4,5,6]

  let cut = arr8.slice(0,4)//[2,3,4] given index to give last index (1ind, 2ind,3ind)
  let cuts = arr8.slice(3)//[4,5,6] given index to array last index
  console.log(cut);
  console.log(cuts);*/


  //.splice 
  
  //it will return array of deleted array from give index (remove from 0 index to 5th index)=(0,5)

  //const arr9=[1,2,3,4,5,6]
  //console.log(arr9);

  //console.log(arr9.splice(0,4));// it created a new array [1,2,3,4] and remove these from arr9
  //console.log(arr9); //here remains arr9 [5,6]
  //let cute = arr9.slice(0,4)
 // console.log(cute);

 // we can update values also with splice 
 //(from 3nd index delete 3 element and update 3 value in place of removed value)=(3,3,17,18,19)

  //console.log(arr9.splice(3,3,17,18,19));// it remove array from 3 index to 3 item (3,3) and give removed array[4, 5, 6 ] 
  //console.log(arr9);// but with 17,18,19 we update in place of removed value and it will add 17,18,19 in arr9

// we can update new value in array in given index 
//(from 3rd index  update these value in arr9 without removing any value) =(3,0,17,18,19)

 // console.log(arr9.splice(3,0,17,18,19));
  //[ 1, 2, 3, 17, 18,19, 4, 5,  6]
 // console.log(arr9);


  // .push :-add element in last place 

//   let arr10 =[1,2,3,4,5,]
//   console.log(arr10.push());

//   // .pop:-
//   let arr11 =[1,2,3,4,5,]
//   console.log(arr11.pop());

//   // .shift:-
//   let arr12 =[1,2,3,4,5,]
//    console.log(arr12.shift());
//console.log(arr12)

//   // .unshift :-
  //let arr13 =[1,2,3,4,5,]
  //console.log(arr13.unshift());
  //console.log(arr13)





  // .sort:-
   let arr14 =[11,12,33,43,25,]
  console.log(arr14.sort());



  



