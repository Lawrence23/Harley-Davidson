$("#sel_country").change(function () {
    if($(this).val() == "0") $(this).addClass("empty");
    else $(this).removeClass("empty")
});
$("#sel_country").change();

$("#sel_state").change(function () {
    if($(this).val() == "0") $(this).addClass("empty");
    else $(this).removeClass("empty")
});
$("#sel_state").change();


$( "#dob" ).datepicker({
	changeMonth: true,
    changeYear: true,
  	maxDate: '0',
  	yearRange: '1900:2015'
  
});

function calcAge() {
	var BdayYear = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
	var CurYear = (new Date).getFullYear();
	var age = CurYear - BdayYear;
	document.getElementById("ages").value=age;	
}

function isNumberKey(event){
    var charCode = (event.which) ? event.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57)) 
        return false;
	return true;
}

$(".submit").click(function(){
	$(".error").hide();
    var hasError = false;
    var passwordVal = $("#pass1").val();
    var checkVal = $("#pass2").val();
    if (passwordVal == '') {
        $("#pass1").after('<span class="error">Please enter a password.</span>');
        alert("Please enter a password");
        hasError = true;
    } else if (checkVal == '') {
        $("#pass2").after('<span class="error">Please re-enter your password.</span>');
        hasError = true;
        document.getElementById("pass2").setCustomValidity("Please re-enter your password");
        alert("Please re-enter your password");
    } else if (passwordVal != checkVal ) {
        $("#pass2").after('<span class="error">Passwords do not match.</span>');
        hasError = true;
        document.getElementById("pass2").setCustomValidity("Passwords do not match");
        alert("Passwords do not match");
    } else if (passwordVal == checkVal) {
    	document.getElementById("pass2").setCustomValidity("");	
    }
    if(hasError == true) {
    	return false;
    } 
    
});

$("form").submit(function(){
	$('.contact-form :input:visible[required="required"]').each(function()
	{
    	if(!this.validity.valid)
    	{
       		$(this).focus();
        	return false;
    	}
    });
    alert("Registered Successfull!");
});

$('input[name="radio"]').on('change', function(){
    localStorage.setItem('gender', $(this).val());
});


if (localStorage) {
	// Add an event listener for form submissions
    document.getElementById('reg-form').addEventListener('submit', function() {
    	// Get the value of the name field.
      	var fname = document.getElementById('fname').value;
      	var lname = document.getElementById('lname').value;
      	var dob = document.getElementById('dob').value;
      	var age = document.getElementById('ages').value;
      	var addr = document.getElementById('address').value;
      	var country = document.getElementById('sel_country').value;
      	var state = document.getElementById('sel_state').value;
      	var password = document.getElementById('pass1').value;
      	var tel = document.getElementById('tel').value;
      	var mail = document.getElementById('mail').value;
        var bike = document.getElementById('sel_bikes').value;
      	
    	// Save the name in localStorage.
   		localStorage.setItem('fname', fname);
   		localStorage.setItem('lname', lname);
   		localStorage.setItem('dob', dob);
   		localStorage.setItem('age', age);
   		localStorage.setItem('addr', addr);
   		localStorage.setItem('country', country);
   		localStorage.setItem('state', state);
   		localStorage.setItem('password', password);
   		localStorage.setItem('tel', tel);
   		localStorage.setItem('mail', mail);
      localStorage.setItem('bike',bike);
   		
   	});
}
   		
/*var fileInput = document.getElementById('files');
fileInput.addEventListener('change', function(e) {
	var reader = new FileReader(); //create reader
  	reader.onload = function() { //attach onload
    	//do something with the result
       	localStorage.img = reader.result; //saved to localStorage
    };
  	var file = e.target.files[0];
  	reader.readAsDataURL(file); //trigger onload function
});*/
		

