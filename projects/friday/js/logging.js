

$(document).ready(function () {

  if (localStorage.getItem("logged_in_key") == "true") {
    document.getElementById("account_logo").style.display="unset";
    document.getElementById("dashboard").style.display="block";
    document.getElementById("rooms").style.display="block";
    document.getElementById("devices").style.display="block";
    document.getElementById("cameras").style.display="block";
    document.getElementById("history").style.display="block";
    //non show
    document.getElementById("log_in_button").style.display="none";
    document.getElementById("sign_up_button").style.display="none";
  }
  else {
    
    document.getElementById("account_logo").style.display="none";
    document.getElementById("dashboard").style.display="none";
    document.getElementById("rooms").style.display="none";
    document.getElementById("devices").style.display="none";
    document.getElementById("cameras").style.display="none";
    document.getElementById("history").style.display="none";

    document.getElementById("log_in_button").style.display="unset";
    document.getElementById("sign_up_button").style.display="unset";

  }


});


function change_log_in_value(){
    if (localStorage.getItem("logged_in_key") == "true") {
        localStorage.setItem("logged_in_key", false);
    }
    else{
        localStorage.setItem("logged_in_key", true);
    }
    
}