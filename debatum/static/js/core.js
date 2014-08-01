(function(document) {
	var $d = $(document);
	var toggleLogin = function() {
		var $this = $(this);
		$this.hide();
		$this.siblings('.login-header').fadeIn(200);
		$this.parent().siblings('.header-inline').hide();
	};

	var closeLogin = function() {
		$('.login-header').hide();
		$('.header-inline, .header-action').fadeIn(200);
	}
	$d
	.on('click', '.header-action', toggleLogin)
	.on('click', '.close-login', closeLogin)
})(document);