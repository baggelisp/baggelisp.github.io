
var open_sidebar = false;

function check_sidebar(){
  if (open_sidebar == true){
    open();
  }
  else{
    close();
  }
  
}


function toggleNav(){
    navSize = document.getElementById("sidebar").style.left;
    if (navSize == "" || navSize=="-15%"){
      return open();
    }
    else{
      return close();
    }
}
function open() {
  open_sidebar = true;
  document.getElementById("main").style.width = "85%";
  document.getElementById("main").style.cssFloat ="right";
  document.getElementById("sidebar").style.left="0%";

}
function close() {
  open_sidebar = false;
  document.getElementById("main").style.width = "100%";
  document.getElementById("sidebar").style.left="-15%";

}




