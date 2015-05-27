$(document).ready(function() {
	var $container = $('#gallery-container');
  $.getJSON('assets/json/bikes.JSON', function(data) {
	  $.each(data.bikes,function(key,value) {
      $container.append('<img class="gallery" src="'+ value.value +'">');
    });   
  });
});  