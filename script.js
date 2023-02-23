var navToggle = document.getElementById("nav-toggle-bottom-nav");
var navMenu = document.querySelector(".nav-menu-bottom-nav");

navToggle.addEventListener("click", function() {
    
    navMenu.classList.toggle("show-menu-bottom-nav");
}) 

$(".rotate").click(function(){
  $(this).toggleClass("down"); 
})