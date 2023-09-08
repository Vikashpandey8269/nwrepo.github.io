const btnEl = document.getElementById("btn");
const animeContainerEl = document.querySelector(".anime-container");
const animeImgEl = document.querySelector(".anime-img");
const amineNameEl = document.querySelector(".anime-name");

let url ="https://api.unsplash.com/photos/random?client_id=Your_Access_Key&query=car";
fetch(url)
.then(res=>res.json())
.then(data=>{
    console.log(data);
})


    