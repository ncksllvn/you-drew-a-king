module.exports = ()=>{
	return {
		siteTitle: 'You Drew A King.',
		siteLogo: '/images/logo.png',
		siteLogoSvg: '/images/logo.svg',
		siteDescription: 'All of the best rules to play during Kings, King\'s Cup, Circle of Death, Ring of Fire and Sociables.',
		facebookAppId: (function(){
			switch(process.env.NODE_ENV){
				case 'staging':
					return '182594082075272'
				case 'production':
					return '177455305922483'
				case 'development':
				default:
					return '181164828884864'
			}
		})(),
		googleAnalyticsId: 'UA-67867718-1',
		host: (function(){
			switch (process.env.NODE_ENV){
				case 'staging':
					return 'http://sta.youdrewaking.com'
				case 'production':
					return 'http://www.youdrewaking.com'
				case 'development':
				default:
					return 'http://localhost:3000'
			}
		})(),
		buildDirectory: process.env.NODE_ENV && 'staging,production'.indexOf(process.env.NODE_ENV) >= 0 ? '/dist/' : '/build/'
	}
}