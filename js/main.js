/**
 * 
 * Script file to handle click event of demo page and to invoke ellipsis plugin method.
 * 
 * **/

(function($) {
	$(".first-button").on("click", function(event){
		$(".first-text").ellipsis(20);
		$(this).hide();
	});
})(jQuery);