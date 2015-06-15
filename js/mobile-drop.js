document.getElementById('hov').onclick = function () {
  if(document.getElementById('dropdown-menu').style.display == 'block' ) {
    document.getElementById('dropdown-menu').style.display = 'none';
  } else {
    document.getElementById('dropdown-menu').style.display = 'block';
  }
}

$('#dropdown-menu').hover(function() {
	document.getElementById('dropdown-menu').style.display = 'block';
});