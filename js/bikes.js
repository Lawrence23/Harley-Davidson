$(document).ready(function() {
	var $option = $('#sel_bikes');
  	$.getJSON('assets/json/bikes.JSON', function(data) {
	    $.each(data.bikes,function(key,value) {
    		$option.append('<option>' + value.label + '</option>');
    	});   
  
    $('#sel_bikes').on('change', function(){
    	for(var i = 0; i<data.bikes.length; i++) {
    		if(data.bikes[i].label == $(this).val()) {
        		$("#bike-img").html('<img src="'+data.bikes[i].value+'" alt="Bike Image">');
         	}
        }
    });
  });
});  


