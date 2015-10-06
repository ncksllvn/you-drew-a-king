module.exports = ()=>{
	return {
		siteTitle: 'You Drew A King.',
		siteLogo: '/images/logo.png',
		siteLogoSvg: '/images/logo.svg',
		siteDescription: 'All of the best rules to play during Kings, King\'s Cup and the Ring of Fire.',
		facebookAppId: (function(){
			switch(process.env.NODE_ENV){
				case 'development':
					return '181164828884864'
				case 'staging':
					return '182594082075272'
				case 'production':
				default:
					return '177455305922483'
			}
		})(),
		googleAnalyticsId: 'UA-67867718-1',
		host: (function(){
			switch (process.env.NODE_ENV){
				case 'development':
					return 'http://localhost:3000'
				case 'staging':
					return 'http://sta.youdrewaking.com'
				case 'production':
				default:
					return 'http://www.youdrewaking.com'
			}
		})(),
		buildDirectory: process.env.NODE_ENV == 'development' ? '/build/' : '/dist/'
	}
}