function openPopup(obj,index) {
  
  var $bikecontent = $('.popup-container');
  var $length = obj.length;

  var $next = index;
  if($next == $length-1) { $next = 0; }
  else { $next = $next+1; }
  
  var $prev = index;
  if($prev == 0) { $prev = $length-1; }
  else { $prev = $prev-1; }

  $bikecontent.html('<div id="'+obj[index].imgId+'" class="bike-content"><h1>'+obj[index].label+'</h1><a href = "javascript:void(0)" style="float:right;"><img id="close" src="assets/images/close.png"></a><a href = "javascript:void(0)" ><img id="prev" src="assets/images/prev.png"></a><a href = "javascript:void(0)"><img id="next" src="assets/images/next.png"></a><img class="imgslider" src="'+ obj[index].value +'"><table><tr><th colspan="2">PRICING</th></tr><tr><td>Vivid Black</td><td>'+obj[index].price+'</td></tr><tr><th colspan="2">DIMENSIONS</th></tr><tr><td>Length</td><td>'+obj[index].length+'</td></tr><tr><td>Seat Height</td><td>'+obj[index].height+'</td></tr><tr><td>Ground Clearance</td><td>'+obj[index].clearance+'</td></tr><tr><td>Fuel Capacity</td><td>'+obj[index].fuel+'</td></tr><tr><td>Weight</td><td>'+obj[index].weight+'</td></tr><tr><th colspan="2">ENGINE</th></tr><tr><td>Engine</td><td>'+obj[index].engine+'</td></tr><tr><td>Displacement</td><td>'+obj[index].disp+'</td></tr><tr><td>Compression Ratio</td><td>'+obj[index].ratio+'</td></tr><tr><th colspan="2">PERFORMANCE</th></tr><tr><td>Engine Torque</td><td>'+obj[index].torque+'</td></tr><tr><td>Engine Torque(rpm)</td><td>'+obj[index].rpm+'</td></tr><tr><td>Fuel Economy</td><td>'+obj[index].eco+'</td></tr></table></div>');  
  
  document.getElementById('close').onclick = function () { closePopup(obj,index); }
  document.getElementById('prev').onclick = function () { openPopup(obj,$prev); }
  document.getElementById('next').onclick = function () { openPopup(obj,$next); }

  document.getElementById('fade').style.display='block';
  document.getElementById(obj[index].imgId).style.display='block';

  document.onkeydown = function(e) {
    switch(e.keyCode) {
      case 37:
      case 40:  openPopup(obj,$prev);
                break;
      case 38:
      case 39:  openPopup(obj,$next);
                break;  
    }  
  }

}

function closePopup(obj,index) {
  document.getElementById(obj[index].imgId).style.display='none';
  document.getElementById('fade').style.display='none';  
}


$(document).ready(function() {
  var $container = $('.gallery-container');
 
  $.getJSON('assets/json/bikes.JSON', function(data) {
    var bike = data.bikes;
    $.each(data.bikes,function(key,value) {
      $container.append('<div class="gallery"><a  href = "javascript:void(0)"><img id="'+value.id+'" src="'+ value.value +'"></a><span class="caption">'+value.label+'</span></div>');
      document.getElementById(value.id).onclick = function () { openPopup(bike,key); }
    });
  });
});  