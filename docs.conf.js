var path = require('path')

module.exports = {
    port: 9999,
    webpack: {
        resolve: {
            extensions: ['', '.vue'],
            alias: {
                'vt-pagination': path.resolve(__dirname, 'src')
            }
        }
    },
    md: { dir: './' },
    vue: { dir: './docs' }
}