$(document).ready(function() {
  var $content = $('#main-content');
  $.getJSON('assets/json/data.JSON',function(data) {
    $.each(data.data,function(key,value) {
      $content.append('<div class="content">' + value.label + '</div>');
    });
  });
});