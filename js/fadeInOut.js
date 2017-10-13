var current_item = 0;

var section_hide_time = 800;
var section_show_time = 800;

jQuery(document).ready(function($) {

	// Switch section
	$("a",'.navbar').not('.social').click(function()
	{
		if(! $(this).hasClass('active')) {
		current_item = this;
			// close all visible divs with the class of .section
			$('.section:visible').fadeOut(section_hide_time, function() {
				$('a','.navbar').removeClass('active');
				$(current_item).addClass('active');
				var new_section = $($(current_item).attr('href'));
				new_section.fadeIn(section_show_time);
			});
		}
		return false;
	});
});


jQuery(document).ready(function($) {

	// Switch section
	$("a",'.pagination').click(function()
	{
		if(! $(this).hasClass('active')) {
		current_item = this;
			// close all visible divs with the class of .section
			$('.album:visible').fadeOut(section_hide_time, function() {
				$('a','.pagination').removeClass('active');
				$(current_item).addClass('active');
				var new_section = $($(current_item).attr('href'));
				new_section.fadeIn(section_show_time);
			});
		}
		return false;
	});
});
