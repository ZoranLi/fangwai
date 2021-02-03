const path = require('path')
const cheerio = require('cheerio')

module.exports = {
	rootDir: path.resolve(__dirname, '..'),
	buildDir: path.resolve(__dirname, '.nuxt'),
	srcDir: __dirname,
	render: {
		resourceHints: false
	},
	modules: [
		require('../lib/module')
	],
	seo: {
		baseUrl: 'http://localhost:3000',
		name: '芳外',
		description: '向世界分享中国人的生活智慧与情趣'
	},
    hooks: {
        'render:route': (url, result) => {
            this.$ = cheerio.load(result.html,{decodeEntities: false});
            this.$(`meta`).removeAttr('data-n-head');
            result.html = this.$.html()
        }
    },
    buildModules: [
        '@nuxtjs/pwa',
        '@nuxt/components'
    ],
    pwa: {
        icon: false // disables the icon module
    },
    css: [
        'assets/reset.css',
    ],
}
