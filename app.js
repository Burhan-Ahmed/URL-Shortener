const express = require('express')
const app = express()
const mongoose = require('mongoose');
const port = 4000
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/urlData')

app.post('/', (req, res) => {

})

app.get('/', (req, res) => {
    return res.render('home')
})

app.listen(port, () => {
    console.log('Server is live at ', port)
})