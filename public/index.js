/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
$(document).ready(function() {
  $(".search-icon").click(function() {
    $(".search").animate({
      width: "toggle"
    });
  });
});
// $(".search-icon").click(function() {
//   if ($('.search').css('display') == 'none')
//     $('.search').css({
//       'display': 'inline-block'
//     });
//   else
//     $('.search').css({
//       'display': 'none'
//     });
// });

// function toggle_visibility(id) {
//   var e = document.getElementById(id);
//   if (e.style.display == 'block')
//     e.style.display = 'none';
//   else
//     e.style.display = 'block';
// }
