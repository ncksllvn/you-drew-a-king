module.exports = ()=>{
	return {
		siteTitle: 'You Drew A King.',
		siteLogo: '/public/images/logo.png',
		siteLogoSvg: '/public/images/logo.svg',
		siteDescription: 'All of the best rules to play during Kings, King\'s Cup and the Ring of Fire.',
		facebookAppId: process.env.NODE_ENV == 'development' ? '181164828884864' : '177455305922483',
		googleAnalyticsId: 'UA-67867718-1',
		host: (function(){
			switch (process.env.NODE_ENV){
				case 'development':
					return 'http://localhost:3000'
				case 'staging':
					return 'http://sta.youdrewaking.com'
				default:
					return 'http://youdrewaking.com'
			}
		})(),
		buildDirectory: process.env.NODE_ENV == 'development' ? '/build/' : '/dist/'
	}
}