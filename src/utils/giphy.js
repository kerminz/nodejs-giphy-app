const request = require('request')

const giphyapiKey = process.env.giphyapiKey

const giphy = (term, callback) => {
    
    const url = 'http://api.giphy.com/v1/gifs/search?q=' + encodeURIComponent(term) + '&api_key=' + giphyapiKey

    request({url, json: true}, (error, res) => {

        if (error) {
            return callback(error, undefined)
        }

        callback(undefined, {
            url: res.body.data[0].images.preview_gif.url,
            title: res.body.data[0].title
        })
    })
}

module.exports = giphy


