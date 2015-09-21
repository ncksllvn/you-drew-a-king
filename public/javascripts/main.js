(function(){
	
	var permalinkForm = document.getElementById('permalink-form')
	
	if ( permalinkForm )
	{
		var permalinkInput = permalinkForm.getElementsByClassName('permalink')[0]
		
		permalinkInput.onclick = function(){
			this.setSelectionRange && this.setSelectionRange(0, this.value.length)
		}
		
		var clipboardButton = permalinkForm.getElementsByClassName('clipboard')[0]
		
		clipboardButton.onclick = function(){
			
			permalinkInput.select()
			
			if ( document.queryCommandSupported('copy') )
			{
				document.execCommand('copy')
			}
			
		}
		
	}
	
	var shareLinks = document.getElementsByClassName('share-link')
	var openShareWindow = function(event){
		var href = this.getAttribute('href')
		var isFacebookLink = this.getAttribute('class').indexOf('facebook') >= 0
		
		if (isFacebookLink)
		{
			FB.ui({
				method: 'share',
				href: href,
			}, function(response){
				
			});
		}
		else
		{
			openPopup(href, null, 600, 325)
		}
		
		event.preventDefault()
		
		return false
	}
	
	for (var i = 0; i < shareLinks.length; i++)
	{
		shareLinks[i].onclick = openShareWindow
	}

})();