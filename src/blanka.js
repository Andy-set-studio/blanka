(function() {

	// Look for elements with target set to blank
	var blanks = [].slice.call(document.querySelectorAll('[target="_blank"]'));

	if(blanks.length) {

		// Loop and remove the target attribute
	    blanks.map(function(item, index) {
	        item.removeAttribute('target');
	    });

	    // Tell the user how many blanks were removed
	    console.log('%cBlanka' + ' removed ' + blanks.length + ' blank' + (blanks.length > 0 ? 's' : '') + ' for you', 'color: #b34315; background: #47d619; padding: 2px; display: inline-block;');
	}

}());