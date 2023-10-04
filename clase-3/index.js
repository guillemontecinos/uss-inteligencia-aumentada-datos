const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const https = require('https')
const PORT = 8000

app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended: true
}))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
    console.log('recibi una solicitud get.')
})

app.post('/pokedex', (req, res) => {
    const pokemon = req.body.pokemon
    const URI = 'https://pokeapi.co/api/v2/pokemon/' + pokemon

    https.get(URI, (response) => {
        let data = ''
        response.on('data', (chunk) => {
            data += chunk
        })
    
        response.on('end', () => {
            res.send('El peso de ' + pokemon + ' es ' + JSON.stringify(JSON.parse(data).weight))
            // res.send('very good')
        })
    })
})

app.listen(PORT, () => {
    console.log('Servidor escuchando puerto: ' + PORT)
})