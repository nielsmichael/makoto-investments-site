/* this was for a transparent menu that i don't think i will implement. felt cute, might delet later
$(document).ready(function() {
        // Transition effect for navbar
        $(window).scroll(function() {
          // checks if window is scrolled more than 500px, adds/removes solid class
          if($(this).scrollTop() > 500) {
              $('.navbar').addClass('solid');
          } else {
              $('.navbar').removeClass('solid');
          }
        });
});

document.querySelectorAll(".contactButton").addEventListener("click", function (){
  var a = this.innerHTML;
  a = location.href = "./contact.html";});

*/
