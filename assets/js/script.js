$(document).ready(function(){
	var repeat = setInterval(backgroundchange, 4500);
	var current = 1;
	function backgroundchange() {
		var max = 5;
		if (current > max - 1) {
			current = 1;
		} else {
			current += 1;
		}
		var image = "back" + current
		var image_string = "url(assets/img/" + image + ".jpg" + ")";
		$("#background").css('background-image', image_string)
		console.log(image_string)
	}
});