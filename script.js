let BottomNavbarToggle = document.querySelector(".bottom-navbar-toggle");
let MenuIcon = document.querySelector(".menu-icon");


BottomNavbarToggle.onclick = function(){
  BottomNavbarToggle.classList.toggle("active");
  MenuIcon.classList.toggle("active_menu-icon");
}
document.onclick = function(e){
    if (!BottomNavbarToggle.contains(e.target) && !MenuIcon.contains(e.target) ) {
      BottomNavbarToggle.classList.remove("active");
      MenuIcon.classList.remove("active_menu-icon");
    }
}   