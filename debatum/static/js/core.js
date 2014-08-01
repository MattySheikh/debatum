(function(document) {
	var $d = $(document);
	var toggleLogin = function() {
		var $this = $(this);
		$this.hide();
		$this.siblings('.login-header').slideDown(100).find('.login-active').focus();
		$this.parent().siblings('.header-inline').hide();
	};

	var closeLogin = function() {
		$('.login-header').hide();
		$('.header-inline, .header-action').show();
	}
	$d
	.on('click', '.header-action', toggleLogin)
	.on('click', '.close-login', closeLogin)
})(document);