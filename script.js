var navToggle = document.getElementById("nav-toggle");
var navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", function() {
    
    navMenu.classList.toggle("show-menu");
}) 

$(".icon-toggle-nav-mobile").click(function(){
    $(this).toggleClass("rotate")  ; 
   })