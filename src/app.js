const request = require('request')
const express = require('express')
const giphy = require('./utils/giphy')
const hbs = require('hbs')
const path = require('path')

const app = express()

const port = process.env.PORT || 3000

// Define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsDirectoryPath = path.join(__dirname, '../templates/views')
const partialDirectoryPath = path.join(__dirname, '../templates/partials')

// Setup handlebars und view engine
app.set('view engine', 'hbs')
app.set('views', viewsDirectoryPath)
hbs.registerPartials(partialDirectoryPath)

// Setup static directory to server
app.use(express.static(publicDirectoryPath))

// Middleware to extract post body
app.use(express.urlencoded())


app.get('/', (req, res) => {

    if (!req.query.search) {
        res.render('index', {
            error: 'Unable to connect'
        })
        return
    } 

    giphy(req.query.search, (error, {url, title}) => {
        res.send({
            url,
            title
        })
    })
})

app.listen(port, () => {
    console.log('Server is up!')
})