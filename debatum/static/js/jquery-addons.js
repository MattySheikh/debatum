// Some custom jQuery
(function($) {
	if (!$) return;

	// Returns jQuerified element
	$.fn.quickEach = $.fn.quickEach || (function () {
		var jq = jQuery([1]);
		return function (c) {
			var i = -1,
			el,
			len = this.length;
			try {
				while (++i < len && (el = jq[0] = this[i]) && c.call(jq, i, el) !== false);
			} catch (e) {
				delete jq[0];
				throw e;
			}
			delete jq[0];
			return this;
		};
	}());

	// Toggle if true
	$.fn.showIf = function (bool) {
		return this[bool ? 'show' : 'hide']();
	};
})(jQuery);
