const request = require('request')
const express = require('express')

const app = express()

const giphyApiKey = process.env.giphyApiKey

app.get('/', (req, res) => {

    if (!req.query.search) {
        return res.send('Please provide a search string...')
    }
    
    const url = 'http://api.giphy.com/v1/gifs/search?q=' + encodeURIComponent(req.query.search) + '&api_key=' + giphyApiKey

    request( { url, json: true }, (error, {body}) => {
        if (error) {
            return res.send('Unable to connect.')
        }
        res.send(body)
    })
})

app.listen(3000, () => {
    console.log('Server is up!')
})