
let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

//langs
(function () {
  var headervar = document.getElementsByClassName("headervar");
  var listvar1 = document.getElementsByClassName("listvar1");
  var listvar2 = document.getElementsByClassName("listvar2");
  var listvar3 = document.getElementsByClassName("listvar3");
  var listvar4 = document.getElementsByClassName("listvar4");

  for (var i = 0; i < headervar.length; i++) {
    headervar[i].innerHTML =
      'Hello Progress';
  }
  for (var i = 0; i < listvar1.length; i++) {
    listvar1[i].innerHTML =
      'This sentence contains a random link to the cool external page <a href="#">maps.google.com</a>.';
  }
  for (var i = 0; i < listvar2.length; i++) {
    listvar2[i].innerHTML =
      'See my profile in a newly opened tab @ <a href="#">facebook.com</a>.';
  }
  for (var i = 0; i < listvar3.length; i++) {
    listvar3[i].innerHTML =
      'Email us at <a href="mailto:mail@progress.com">mail@progress.com</a>.';
  }
  for (var i = 0; i < listvar4.length; i++) {
    listvar4[i].innerHTML =
      'Iterate approaches<span class="original">&#174;</span> to corporate strategy foster colaborative thinking to further the overall <span class="bg-yellow">value proposition</span>.';
  }
}());