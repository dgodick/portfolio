const query = '(prefers-reduced-motion: reduce)'
const hasOSReducedMotion = window.matchMedia(query).matches
window.onscroll = function() {scrollFunction(hasOSReducedMotion)};

function scrollFunction(hasOSReducedMotion) {
    if (!hasOSReducedMotion) {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          document.getElementById("scrollButton").style.display = "block";
          document.getElementById("scrollButton").classList.add('animation-target')
      } else {
          document.getElementById("scroll_but").style.display = "none";
          document.getElementById("scroll_but").classList.remove('animation-target')
      }
    }
}

function topFunction() {
    $('html,body').animate({ scrollTop: 0 }, 'slow');
    return false;
}

$(function() {
    // console.log(hasOSReducedMotion)
    if (!hasOSReducedMotion) {
      $('#scrollButton').focusin(function() {
          $(this).css('border', '3px solid #fff');
      });
      $('#scrollButton').focusout(function() {
          $(this).css('border', 'none');
      });
    }

})
