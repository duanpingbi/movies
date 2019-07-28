module.exports = {
    devServer: {
        proxy: {
            '/journalismApi':{
                target:'https://www.apiopen.top',
                changeOrigin: true
            }
        }
    }
}