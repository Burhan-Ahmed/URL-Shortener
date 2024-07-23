const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 4000;
const path = require('path');
const Url = require('./models/urlData');

app.set('view engine', 'ejs');
app.use('/', express.static(path.join(__dirname, '/')));
app.use(express.urlencoded({ extended: false }));

mongoose.connect('mongodb://localhost/urlData', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 20000
}).then(() => {
    console.log('MongoDB Connected');
})

app.post('/', async (req, res) => {
    const Urldata = await Url.create({ full: req.body.urlLink });
    // console.log(urldata)
    res.redirect('/');
});

app.get('/', async (req, res) => {
    const data = await Url.find().exec();
    console.log(data)
    res.render('home', { data });
});

app.get('/:short', async (req, res) => {
    const small = await Url.findOne({ short: req.params.short })
    small.clicks++;
    small.save();
    res.redirect(small.full);
});

app.listen(port, () => {
    console.log('Server is live at', port);
});
