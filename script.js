var navToggle = document.getElementById("nav-toggle");
var navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", function() {
    
    navMenu.classList.toggle("show-menu");
}) 

var el = document.getElementById('nav-toggle');
el.addEventListener('click', function() {
	var klass = this.className;
  if (klass === "") {
      this.setAttribute('class', 'spin-right');
    } else if (klass === 'spin-right') {
      this.setAttribute('class', 'spin-left');
    } else {
      this.setAttribute('class', 'spin-right');
    }
}, false);