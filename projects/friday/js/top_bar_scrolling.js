$(document).ready(function () {



    $(window).scroll(function () {

        if ($(window).scrollTop() > 80) {

            document.getElementById("top-bar").style.background = "black";
        }
        else {

            document.getElementById("top-bar").style.background = "none";
        }
    });
});

