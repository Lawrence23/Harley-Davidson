document.getElementById('hov').onclick = function () {
  if(document.getElementById('dropdown-menu').style.display == 'block' ) {
    document.getElementById('dropdown-menu').style.display = 'none';
  } else {
    document.getElementById('dropdown-menu').style.display = 'block';
  }
}
$('.logo').hover(function() {
	document.getElementById('dropdown-menu').style.display = 'block';
}, function() {
	document.getElementById('dropdown-menu').style.display = 'none';
});

$('#dropdown-menu').hover(function() {
	document.getElementById('dropdown-menu').style.display = 'block';
});