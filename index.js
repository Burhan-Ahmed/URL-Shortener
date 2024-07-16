const express = require("express");
const app = express();
const port = 4000;
const data = require('./MOCK_DATA.json');
app.use(express.json());


app.post("/", (req, res) => {

    const postData1 = req.body.Name;
    const postData2 = req.body.password;

    const user = data.find(work => work.Name == postData1 && work.password == postData2);

    if (user) {
        res.status(200).send("User Found");
    }
    else {
        res.status(404).send('User not Found');
    }

})
app.get('/', (req, res) => {
    res.send("Server is live");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});