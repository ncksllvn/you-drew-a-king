module.exports = ()=>{
	return {
		siteTitle: 'You Drew A King.',
		siteLogo: '/public/images/logo.png',
		siteLogoSvg: '/public/images/logo.svg',
		siteDescription: 'All of the best rules to play during Kings, King\'s Cup and the Ring of Fire.',
		facebookAppId: '177455305922483',
		googleAnalyticsId: 'UA-67867718-1',
		buildDirectory: process.env.NODE_ENV == 'development' ? '/build/' : '/dist/'
	}
}