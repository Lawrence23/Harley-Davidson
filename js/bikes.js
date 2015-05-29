$(document).ready(function() {
  $(".fancybox").fancybox();
	var $container = $('#gallery-container');
  var $bikecontent = $('.bike-content');
  $.getJSON('assets/json/bikes.JSON', function(data) {
	  $.each(data.bikes,function(key,value) {
      $container.append('<div class="gallery"><a class="fancybox" rel="group" href="#'+value.id+'"><img src="'+ value.value +'"></a><span class="caption">'+value.label+'</span></div>');
      $bikecontent.append('<div id="'+value.id+'"><h1>'+value.label+'</h1><img class="imgslider" src="'+ value.value +'"><table><tr><th colspan="2">PRICING</th></tr><tr><td>Vivid Black</td><td>'+value.price+'</td></tr><tr><th colspan="2">DIMENSIONS</th></tr><tr><td>Length</td><td>'+value.length+'</td></tr><tr><td>Seat Height</td><td>'+value.height+'</td></tr><tr><td>Ground Clearance</td><td>'+value.clearance+'</td></tr><tr><td>Fuel Capacity</td><td>'+value.fuel+'</td></tr><tr><td>Weight</td><td>'+value.weight+'</td></tr><tr><th colspan="2">ENGINE</th></tr><tr><td>Engine</td><td>'+value.engine+'</td></tr><tr><td>Displacement</td><td>'+value.disp+'</td></tr><tr><td>Compression Ratio</td><td>'+value.ratio+'</td></tr><tr><th colspan="2">PERFORMANCE</th></tr><tr><td>Engine Torque</td><td>'+value.torque+'</td></tr><tr><td>Engine Torque(rpm)</td><td>'+value.rpm+'</td></tr><tr><td>Fuel Economy</td><td>'+value.eco+'</td></tr></table></div>')
    });   
  });
});  