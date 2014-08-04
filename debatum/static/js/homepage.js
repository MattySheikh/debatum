(function($) {

	var init = function() {
		var $wrapper;
		$('#welcome-wrapper').hide();
		if ($(this).hasClass('welcome-submit')) {
			$wrapper = $('#home-submit-wrapper');
		} else {
			$wrapper = $('#home-search-wrapper');
		}


		$wrapper.show().find('.action-step').first().slideDown(200).addClass('active-step');
	};

	var selectTopic = function() {
		var $this = $(this),
			$parent = $this.parent();
		$parent.hide();
		$parent.siblings('.action-step').first().slideDown(200).addClass('active-step');
	};

	$d
	.on('click', '.welcome-begin', init)
	.on('click', '.category-tab', selectTopic)
	;
})(jQuery);