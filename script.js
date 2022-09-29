function myFunction_1() {
    document.getElementById("myDropdown_1").classList.toggle("show");
    document.getElementById("arrow1_down").classList.toggle("arrow_hidden")
    document.getElementById("arrow1_up").classList.toggle("arrow_visible")
}

function myFunction_2() {
    document.getElementById("myDropdown_2").classList.toggle("show");
    document.getElementById("arrow2_down").classList.toggle("arrow_hidden")
    document.getElementById("arrow2_up").classList.toggle("arrow_visible")
}

window.onclick = function(event) {
    if (!event.target.matches('.dropdown-btn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
          document.getElementById("arrow1_up").classList.remove("arrow_visible")
          document.getElementById("arrow2_up").classList.remove("arrow_visible")
          document.getElementById("arrow1_down").classList.remove("arrow_hidden")
          document.getElementById("arrow2_down").classList.remove("arrow_hidden")
        }
      }
    }
}


function openNav() {
    // document.querySelector(".navbar-buttons").style.width = "70%";
    // document.querySelector(".main").classList.add = "overlay";
    document.querySelector(".navbar-buttons").classList.add("sidebar")
    document.querySelector(".overlay").style.display="block";
}
  
  /* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
    // document.querySelector(".navbar-buttons").style.width = "0px";
    document.querySelector(".navbar-buttons").classList.remove("sidebar")
    document.querySelector(".overlay").style.display="none";
}