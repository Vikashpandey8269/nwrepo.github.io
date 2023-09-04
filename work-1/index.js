const div1 =document.getElementsByClassName("box1");
function myFun(){
    const newDiv = document.createElement("div")

    newDiv.innerHTML="vikas"


    const newDiv1 = document.createElement("div")


    newDiv.appendChild(newDiv1)


    div1.appendChild(newDiv)


   

}
div1.addEventListener("click",myFun) 


