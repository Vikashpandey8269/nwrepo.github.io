// function  myFun(){
//     const color = document.getElementById("selectColor");
//     const btn =color.options[color.selectedIndex].value

//     console.log(btn);
   
// }
function myFun(){
    const color = document.getElementById("selectColor");
    const btn = color.options[color.selectedIndex].value;
    document.body.style.backgroundColor=btn;

}