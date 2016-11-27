$(document).ready(function(){
	$("#member_info, #member_portrait").hide().fadeIn(800, "swing");
	var about_on = 0
	var stats_on = 0


	$("#about").click(function() {
		if (stats_on == 0) {
			about_on = 1
			setTimeout(function() {
				about_on = 0
			}, 800);
			if ($("#member_about").hasClass("hidden")) {
				$("#about").addClass("toggle_current");
				$("#stats").removeClass("toggle_current");	
				$("#member_stats").addClass("hidden");
	        	$("#member-stats").addClass("display_none");
	      		setTimeout(function() {
	        		$("#member_about").removeClass("display_none");
	      		}, 325);
	      		setTimeout(function() {
	        		$("#member_about").removeClass("hidden");
	      		}, 375);
			}
		}
	});

	$("#stats").click(function() {
		if (about_on == 0) {
			stats_on = 1
			setTimeout(function() {
				stats_on = 0
			}, 775);
			if ($("#member_stats").hasClass("hidden")) {
				$("#stats").addClass("toggle_current");
				$("#about").removeClass("toggle_current");	
				$("#member_about").addClass("hidden");
	      		setTimeout(function() {
	        		$("#member_about").addClass("display_none");
	        		$("#member_stats").removeClass("hidden");
	      		}, 375);
	        	$("#member_stats").removeClass("display_none");
			}
		}
	});
});