const express = require('express');
const app = express();

// Aquí van los app.get  app.post
app.get('/', (req, res) => {
    res.render('index')
})
app.use(require('./usuarios/direcciones'))
app.use(require('./usuarios/consultas'))

module.exports = app;