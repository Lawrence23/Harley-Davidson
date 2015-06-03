function openPopup(picId) {
  document.getElementById(picId).style.display='block';
  document.getElementById('fade').style.display='block';
}

function closePopup(picId) {
  document.getElementById(picId).style.display='none';
  document.getElementById('fade').style.display='none';  
}

function nextPopup(divId,maxSize) {
  document.getElementById(divId).style.display='none';
  document.getElementById('fade').style.display='none';
  if(divId==maxSize) {
    divId = 1;
  } else divId = divId + 1;
  document.getElementById(divId).style.display='block';
  document.getElementById('fade').style.display='block';
}

function prevPopup(divId,maxSize) {
  document.getElementById(divId).style.display='none';
  document.getElementById('fade').style.display='none';
  if(divId == 1) {
    divId = maxSize;
  } else divId = divId - 1;
  document.getElementById(divId).style.display='block';
  document.getElementById('fade').style.display='block';
}

$(document).ready(function() {
  var $container = $('.gallery-container');
  var $bikecontent = $('.popup-container');
  $.getJSON('assets/json/bikes.JSON', function(data) {
	  $.each(data.bikes,function(key,value) {
      var $length = data.bikes.length;
      $container.append('<div class="gallery"><a  href = "javascript:void(0)" onclick = openPopup('+value.id+')><img src="'+ value.value +'"></a><span class="caption">'+value.label+'</span></div>');
      $bikecontent.append('<div id="'+value.id+'" class="bike-content"><h1>'+value.label+'</h1><a href = "javascript:void(0)" onclick = closePopup('+value.id+') style="float:right;"><img class="close" src="assets/images/close.png"></a><a href = "javascript:void(0)" onclick = prevPopup('+value.id+','+$length+')><img class="prev" src="assets/images/prev.png"></a><a href = "javascript:void(0)" onclick = nextPopup('+value.id+','+$length+')><img class="next" src="assets/images/next.png"></a><img class="imgslider" src="'+ value.value +'"><table><tr><th colspan="2">PRICING</th></tr><tr><td>Vivid Black</td><td>'+value.price+'</td></tr><tr><th colspan="2">DIMENSIONS</th></tr><tr><td>Length</td><td>'+value.length+'</td></tr><tr><td>Seat Height</td><td>'+value.height+'</td></tr><tr><td>Ground Clearance</td><td>'+value.clearance+'</td></tr><tr><td>Fuel Capacity</td><td>'+value.fuel+'</td></tr><tr><td>Weight</td><td>'+value.weight+'</td></tr><tr><th colspan="2">ENGINE</th></tr><tr><td>Engine</td><td>'+value.engine+'</td></tr><tr><td>Displacement</td><td>'+value.disp+'</td></tr><tr><td>Compression Ratio</td><td>'+value.ratio+'</td></tr><tr><th colspan="2">PERFORMANCE</th></tr><tr><td>Engine Torque</td><td>'+value.torque+'</td></tr><tr><td>Engine Torque(rpm)</td><td>'+value.rpm+'</td></tr><tr><td>Fuel Economy</td><td>'+value.eco+'</td></tr></table></div>');
    });
  });
});  