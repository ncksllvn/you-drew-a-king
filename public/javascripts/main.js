(function(){
	
	var permalinkInput = document.getElementsByClassName('permalink')[0]
	
	if (permalinkInput)
	{
		permalinkInput.onclick = function(){
			this.setSelectionRange && this.setSelectionRange(0, this.value.length)
		}
	}
	
	var suggestRuleForm = document.forms.suggest
	
	if (suggestRuleForm)
	{
		suggestRuleForm.onsubmit = function(event){
			
			var title = this.title.value
			var description = this.description.value
			
			if (!title.length || !description.length)
			{
				var errorMessage = document.getElementsByClassName('error-message')[0]
				
				errorMessage.innerHTML = 'Rule title and description are required.'
				
				return false
			}
			
			return true
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