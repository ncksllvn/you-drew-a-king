(function(){
	
	var toggleShareOptionsBtn = document.getElementById('share-button')
	var shareOptions = document.getElementById('share-options')
	
	if (toggleShareOptionsBtn)
	{
		toggleShareOptionsBtn.onclick = function(){
			toggleClass(shareOptions, 'in')
		}
	}
	
	var permalinkInput = document.getElementById('permalink')
	
	if (permalinkInput)
	{
		permalinkInput.onclick = function(){
			this.setSelectionRange(0, this.value.length)
		}
	}
	
	var shareLinks = document.getElementsByClassName('share-link')
	var openShareWindow = function(event){
		var href = this.getAttribute('href')
		
		openPopup(href, null, 600, 325)
		event.preventDefault()
		
		return false
	}
	
	for (var i = 0; i < shareLinks.length; i++)
	{
		shareLinks[i].onclick = openShareWindow
	}

})();