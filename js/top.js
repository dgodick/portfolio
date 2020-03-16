const query = '(prefers-reduced-motion: reduce)'
const hasOSReducedMotion = window.matchMedia(query).matches
window.onscroll = function() {scrollFunction(hasOSReducedMotion)};

function scrollFunction(hasOSReducedMotion) {
    if (!hasOSReducedMotion) {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          document.getElementById("scroll_but").style.display = "block";
          document.getElementById("scroll_but").classList.add('animation-target')
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
      $('#scroll_but').focusin(function() {
          $(this).css('border', '5px solid #fff');
      });
      $('#scroll_but').focusout(function() {
          $(this).css('border', 'none');
      });
    }

})
