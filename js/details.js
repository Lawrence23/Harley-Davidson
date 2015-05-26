// Retrieve the users name.
var firstName = localStorage.getItem('fname');
document.getElementById('fname').innerHTML = firstName;

var lastName = localStorage.getItem('lname');
document.getElementById('lname').innerHTML = lastName;

var DOB = localStorage.getItem('dob');
document.getElementById('dob').innerHTML = DOB;

var Age = localStorage.getItem('age');
document.getElementById('age').innerHTML = Age;

var Sex = localStorage.getItem('gender');
document.getElementById('sex').innerHTML = Sex;

var Country = localStorage.getItem('country');
document.getElementById('country').innerHTML = Country;

var State = localStorage.getItem('state');
document.getElementById('state').innerHTML = State;

var Address = localStorage.getItem('addr');
document.getElementById('addr').innerHTML = Address;

var Pwd = localStorage.getItem('password');
document.getElementById('password').innerHTML = Pwd;

var Num = localStorage.getItem('tel');
document.getElementById('tel').innerHTML = Num;

var Mail = localStorage.getItem('mail');
document.getElementById('mail').innerHTML = Mail;

var span = document.createElement('span');
span.innerHTML += ['<img class="thumb" src="', localStorage.img,'" title="test"/>'].join('');
document.getElementById('image').insertBefore(span, null);

$(".submit").click(function(){
	window.location.href = "http://10.1.4.154/Form/form.html";
	localStorage.clear();
});
