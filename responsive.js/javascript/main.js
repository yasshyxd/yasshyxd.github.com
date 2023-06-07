console.log("Hola desde un archivo externo de JavaScript");
//DOM

/*
let links=document.querySelectorAll("a");

console.log(links);

//para recorrer los diferences nodos
links.forEach(function(link){
  console.log(link);
});
*/

let celdas = document.querySelectorAll("td");

celdas.forEach(function(td) {
  td.addEventListener("click",function(){
    console.log(this);
  })
});

//a href, class close
/*
let enlaces = document.querySelectorAll(".close");

enlaces.forEach(function(close){

    close.addEventListener("click",function(ev){

    ev.preventDefault();
    return false;
    //console.log("click");

  });

});*/

let iconos = document.querySelectorAll("i");

iconos.forEach(function(icono){
  icono.classList.remove("fa-star");
  icono.classList.add("fa-star");

})



let links = document.querySelectorAll(".close");

links.forEach(function(link){

    link.addEventListener("click",function(ev){

    ev.preventDefault();
    let content = document.querySelector(".content");

    content.classList.remove("animate__bounceOut");

    content.classList.add("animate__bounceIn");

    console.log("click");

    setTimeout(function(){
      location.href="/";
    },1000);


    return false;


  });

});
