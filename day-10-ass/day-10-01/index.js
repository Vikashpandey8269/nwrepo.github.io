var color = [
    "red",
    "green",
    "cyan",
    "black",
    "voilet",
    "blue",
    "yellow",
    "purple",
    "orange",
    "lightgreen",
    "lemon",
  ];
  var index = 0;
  var isTriangle = false;
  
  var colorS = document.getElementById("change-shape");
  var cColor = document.getElementById("change-color");
  
  colorS.addEventListener("click", changeShape);
  cColor.addEventListener("click", changeColor);
  
  function changeColor() {
  //   console.log(index);
    if (index === color.length) {
      index = 0;
    }
    document.getElementById("circle").style.backgroundColor = color[index];
    index++;
  }
  
  function changeShape() {
    if (!isTriangle) {
      var i = document.getElementsByClassName("inner")[0];
      i.className = "triangle-bottom-left";
      isTriangle = true;
    }else{
      var i = document.getElementsByClassName("triangle-bottom-left")[0];
      i.className = "inner";
      isTriangle = false;
    }
  }
  