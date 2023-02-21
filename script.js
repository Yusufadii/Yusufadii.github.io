var navToggle = document.getElementById("nav-toggle");
var navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", function() {
    
    navMenu.classList.toggle("show-menu");
}) 

$(".rotate").click(function(){
  $(this).toggleClass("down"); 
})