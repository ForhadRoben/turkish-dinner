const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chefsInfo = require('./data/chefs_info.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/chefsInfo', (req, res) => {
    res.send(chefsInfo);
})

app.get('/chefsInfo/:id', (req, res) => {
    const id = parseInt(req.params.id);
    // console.log(id);
    const singleChef = chefsInfo.find(n => parseInt(n._id) === id);
    res.send(singleChef)
})

app.listen(port, () => {
    console.log(`Recipe API is running on port: ${port}`);
})