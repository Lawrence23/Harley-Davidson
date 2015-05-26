$(document).ready(function()
{
  var $select = $('#sel_country');
  $.getJSON('assets/json/countries.JSON',function(data) {
    $.each(data.country,function(key,value) {
      $select.append('<option>' + value.label + '</option>');
    });

    $('#sel_country').on('change', function(){
      for(var i = 0; i<data.country.length; i++)
      {
        if(data.country[i].label == $(this).val())
        {
          $('#sel_state').html('<option value="0" selected="selected" class="s">Choose a State</option>');
          $.each(data.country[i].states, function (key,value) {
            $("#sel_state").append('<option>'+value.label+'</option>');
          });
        }
      }
    });
  });
});