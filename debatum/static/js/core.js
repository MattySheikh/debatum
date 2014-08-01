(function(document) {
	var $d = $(document);

	var wrapBox = function(el) {
		var $wrap = '',
			$this = $(el),
			$old = $this.html();
		$wrap += ''
			+ '<div class="box-container">'
				+ '<div class="box-blur"></div>'
				+ '<div class="box-inner">'
					+ $old
				+ '</div>'
			+ '</div>';
		$this.html($wrap);
		$('.box-container, .box-wrap').show();
	}
	$d.on('ready', function() {
		$('.header-action').on('click', function() {
			var $this = $(this),
				active = $this.hasClass('header-log-in') ? '#login-box' : '#signup-box';
			wrapBox($d.find('.box-wrap'));
			$(active).show();
		});
	});
})(document);