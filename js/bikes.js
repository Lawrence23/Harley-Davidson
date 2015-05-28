$(document).ready(function() {
  $(".fancybox").fancybox();
	var $container = $('#gallery-container');
  var $content = $('.content');
  $.getJSON('assets/json/bikes.JSON', function(data) {
	  $.each(data.bikes,function(key,value) {
      $container.append('<div class="gallery"><a class="fancybox" rel="group" href="#'+value.id+'"><img src="'+ value.value +'"></a><span class="caption">'+value.label+'</span></div>');
      $content.append('<div id="'+value.id+'"><h1>'+value.label+'</h1><img class="imgslider" src="'+ value.value +'"></div>')
    });   
  });
});  