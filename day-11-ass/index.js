var tiplabel=document.getElementById("tiplabel")
tiplabel.style.display="none";
var calulate=document.getElementById("calculateBtn");
calulate.addEventListener('click',()=>{
var billamount=document.getElementById("Amount").value;
var serviceQuality=document.getElementById("selectQua").value;
var numPeople=document.getElementById("totalPeople").value;
document.getElementById("totalTip").value=" RS "+(billamount*serviceQuality)/numPeople+" !";
tiplabel.style.display="inline";
})