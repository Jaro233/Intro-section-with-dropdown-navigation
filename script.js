function toggleSideMenu() {
  document.querySelector(".sidemenu").classList.toggle("notVisible")
  document.querySelector(".sidemenu").classList.toggle("full-width")
}

function closeSideMenu() {
  document.querySelector(".sidemenu").classList.toggle("notVisible")
  document.querySelector(".sidemenu").classList.toggle("full-width")
}


function toggleDropdown1() {
  //black font on click
  document.querySelector(".features-link").classList.toggle("active")
  //mobile dropdown
  if(!document.querySelector(".arrow1down").classList.contains("hidden")) {
    document.querySelector(".arrow1down").classList.add("rotateUp")
    document.querySelector(".arrow1down").addEventListener("animationend", () => {
      console.log('working')
      document.querySelector(".arrow1up").classList.remove("hidden")
      document.querySelector(".arrow1down").classList.add("hidden")
      document.querySelector(".arrow1down").classList.remove("rotateUp")
    }, false);
    document.querySelector(".dropdown-content1").classList.toggle("hidden")
  } else {
    document.querySelector(".arrow1up").classList.add("rotateDown")
    document.querySelector(".arrow1up").addEventListener("animationend", () => {
      document.querySelector(".arrow1down").classList.remove("hidden")
      document.querySelector(".arrow1up").classList.add("hidden")
      document.querySelector(".arrow1up").classList.remove("rotateDown")
    }, false);
    document.querySelector(".dropdown-content1").classList.toggle("hidden")
  }

  //desktop dropdown

   if(!document.querySelector(".arrow1downDesktop").classList.contains("hidden")) {
    document.querySelector(".arrow1downDesktop").classList.add("rotateUp")
    document.querySelector(".arrow1downDesktop").addEventListener("animationend", () => {
      console.log('working')
      document.querySelector(".arrow1upDesktop").classList.remove("hidden")
      document.querySelector(".arrow1downDesktop").classList.add("hidden")
      document.querySelector(".arrow1downDesktop").classList.remove("rotateUp")
    }, false);
    document.querySelector(".dropdown-content1Desktop").classList.toggle("hidden")
  } else {
    document.querySelector(".arrow1upDesktop").classList.add("rotateDown")
    document.querySelector(".arrow1upDesktop").addEventListener("animationend", () => {
      document.querySelector(".arrow1downDesktop").classList.remove("hidden")
      document.querySelector(".arrow1upDesktop").classList.add("hidden")
      document.querySelector(".arrow1upDesktop").classList.remove("rotateDown")
    }, false);
    document.querySelector(".dropdown-content1Desktop").classList.toggle("hidden")
  }

}

function toggleDropdown2() {
  //black font on click
  document.querySelector(".company-link").classList.toggle("active")
  //mobile dropdown
  if(!document.querySelector(".arrow2down").classList.contains("hidden")) {
    document.querySelector(".arrow2down").classList.add("rotateUp")
    document.querySelector(".arrow2down").addEventListener("animationend", () => {
      console.log('working')
      document.querySelector(".arrow2up").classList.remove("hidden")
      document.querySelector(".arrow2down").classList.add("hidden")
      document.querySelector(".arrow2down").classList.remove("rotateUp")
    }, false);
    document.querySelector(".dropdown-content2").classList.toggle("hidden")
  } else {
    document.querySelector(".arrow2up").classList.add("rotateDown")
    document.querySelector(".arrow2up").addEventListener("animationend", () => {
      document.querySelector(".arrow2down").classList.remove("hidden")
      document.querySelector(".arrow2up").classList.add("hidden")
      document.querySelector(".arrow2up").classList.remove("rotateDown")
    }, false);
    document.querySelector(".dropdown-content2").classList.toggle("hidden")
  }

  //desktop dropdown

  if(!document.querySelector(".arrow2downDesktop").classList.contains("hidden")) {
    document.querySelector(".arrow2downDesktop").classList.add("rotateUp")
    document.querySelector(".arrow2downDesktop").addEventListener("animationend", () => {
      // console.log('working')
      document.querySelector(".arrow2upDesktop").classList.remove("hidden")
      document.querySelector(".arrow2downDesktop").classList.add("hidden")
      document.querySelector(".arrow2downDesktop").classList.remove("rotateUp")
    }, false);
    document.querySelector(".dropdown-content2Desktop").classList.toggle("hidden")
  } else {
    document.querySelector(".arrow2upDesktop").classList.add("rotateDown")
    document.querySelector(".arrow2upDesktop").addEventListener("animationend", () => {
      document.querySelector(".arrow2downDesktop").classList.remove("hidden")
      document.querySelector(".arrow2upDesktop").classList.add("hidden")
      document.querySelector(".arrow2upDesktop").classList.remove("rotateDown")
    }, false);
    document.querySelector(".dropdown-content2Desktop").classList.toggle("hidden")
  }
}