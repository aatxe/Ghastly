(function($) {
	$.fn.matchHeights = function(settings) {
		settings = jQuery.extend(this, { min: null }, settings);
		var height = (settings.min) ? settings.min : 0;
		this.each(function() {
			height = Math.max(height, $(this).outerHeight());
		});

		return this.each(function() {
		    $(this).css({'height': height});
		});
	}

    $.fn.resetHeights = function() {
         return this.each(function() {
             $(this).css({'height': ''});
         });
    }
})(jQuery);
