
$(document).ready(function(){
  // HEADER Script

  var prevScrollPos = window.pageYOffset;

  var sticky = header.offsetTop;

  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
      document.getElementById("header").style.top = "0";
      header.classList.add('sticky');
      } else {
      document.getElementById("header").style.top = "-78px";
    }
    prevScrollPos = currentScrollPos;
    if (window.pageYOffset <= 30) {
      header.classList.remove('sticky');
      document.getElementById('header').style.top = '0';
    };
  };

  // MAP function


});
