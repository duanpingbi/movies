module.exports = {
    devServer: {
        proxy: {
            '/todayVideo':{
                target:'https://api.apiopen.top',
                changeOrigin: true
            },
            '/videoCategory':{
                target:'https://api.apiopen.top',
                changeOrigin: true
            },
            '/json':{
                target:'http://ip-api.com',
                changeOrigin: true
            }
        }
    }
}