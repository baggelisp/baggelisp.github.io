
var open_sidebar = false;

function check_sidebar() {
  if (open_sidebar == true) {
    open();
  }
  else {
    close();
  }

}


function toggleNav() {
  navSize = document.getElementById("sidebar").style.left;
  if (navSize == "" || navSize < "0") {
    return open();
  }
  else {
    return close();
  }
}
function open() {
  open_sidebar = true;

  //change sidebar and main width
  win_width = $(window).width();
  document.getElementById("sidebar").style.left = "0%";
  document.getElementById("main").style.cssFloat = "right";
  if (win_width < 500) {
    document.getElementById("sidebar").style.width = "70%";
  }
  else if (win_width < 650) {
    document.getElementById("main").style.width = "60%";
    document.getElementById("sidebar").style.width = "40%";
  }
  else if (win_width < 800) {
    document.getElementById("main").style.width = "75%";
    document.getElementById("sidebar").style.width = "25%";
  }
  else if (win_width < 1023) {
    document.getElementById("main").style.width = "80%";
    document.getElementById("sidebar").style.width = "20%";
  }
  else {
    document.getElementById("main").style.width = "85%";
    document.getElementById("sidebar").style.width = "15%";
  }





}
function close() {
  open_sidebar = false;
  win_width = $(window).width();
  document.getElementById("sidebar").style.left = "-15%";

  if (win_width < 500) {
    document.getElementById("sidebar").style.width = "15%";
  }
  else if (win_width < 650) {
    document.getElementById("main").style.width = "100%";
    document.getElementById("sidebar").style.width = "15%";
  }
  else if (win_width < 800) {
    document.getElementById("main").style.width = "100%";
    document.getElementById("sidebar").style.width = "15%";
  }
  else if (win_width < 1023) {
    document.getElementById("main").style.width = "100%";
    document.getElementById("sidebar").style.width = "15%";
  }
  else {
    document.getElementById("main").style.width = "100%";
    document.getElementById("sidebar").style.width = "15%";
  }

}



// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    if ($(window).width() > 500) {
      document.getElementById("myBtn").style.display = "block";
    }
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {

  $('body,html').animate({
    scrollTop: 0
  }, 800);
}

