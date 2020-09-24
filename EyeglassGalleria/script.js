
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

  // MODAL function

  var modal = document.getElementById("showcaseModal");
  var open = document.getElementById("showcaseFlexIndividual1");
  var close = document.getElementsByClassName("close")[0];

  open.onclick = function(){
    modal.style.display = "block";
  }

  close.onclick = function(){
    modal.style.display = "none";
  }

  window.onclick = function(event){
    if(event.target == modal){
      modal.style.display = "none";
    }
  }


});
