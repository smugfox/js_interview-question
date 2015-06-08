$(document).ready(function() {
  //Box trigger event
  $('.js-box-trigger').on('mouseover', function() {
    $(this).toggleClass('triggered');
  });
});
