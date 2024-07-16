const express = require("express");
const app = express();
const port = 4000;
const data = require('./Data/MOCK_DATA.json');

app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.post("/", (req, res) => {

    const postData1 = req.body.nam;
    const postData2 = req.body.pass;
    const user = data.find(work => work.Name == postData1 && work.password == postData2);

    if (user) {
        const id = data.findIndex(work => work.Name == postData1);
        res.status(200).send(`User Found at ${id + 1} index`);
    }
    else {
        res.status(404).send('User not Found');
    }
})

app.get('/', (req, res) => {
    return res.render('inputinfo');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});