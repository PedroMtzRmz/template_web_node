const express = require('express')
const path = require('path')
const hbs = require('hbs')

const app = express()

const port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname + '/public')))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

hbs.registerPartials(__dirname + '/views/parciales')

app.use(require('./routes/rutas'))

app.listen(port, () => {
    console.log('Escuchando el puerto: ' + port);
})