(function(){
	var shareBtn = document.getElementById('share-button')
	var shareOptions = document.getElementById('share-options')
	
	shareBtn.onclick = function(){
		toggleClass(shareOptions, 'in')
	}

})();