const express = require("express");
const app = express();
const port = 4000;
const fs = require('fs')
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
    return res.render('login');
});

app.post("/signup.ejs", (req, res) => {

    const postData1 = req.body.fnam;
    const pass1 = req.body.pass1;
    const pass2 = req.body.pass2;

    if (pass1 != pass2) {
        res.send("Password does not Match")
        form.reset();
    }
    else {
        const newuser = {
            id: data.length + 1,
            Name: postData1,
            password: pass1
        }
        data.push(newuser)

        fs.writeFile('./Data/MOCK_DATA.json', JSON.stringify(data), (err) => {
            if (err) {
                return res.status(500).send("Error saving data");
            } else {
                res.send("Account Created")
            }
        })
    }
})

app.get('/signup.ejs', (req, res) => {
    return res.render('signup');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});