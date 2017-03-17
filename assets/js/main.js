$(document).ready(function() {
	/*
	 * Add Section links
	 */
	var section = 0;
	$('.single > .content > h6:not(.title)').append(function() {
		section++;
		return " <a name=\"section" + section + "\" class=\"section\" href=\"#section" + section + "\">&#123;&nbsp;section&nbsp;" + section + "&nbsp;&#125;</a>"
	});
});
