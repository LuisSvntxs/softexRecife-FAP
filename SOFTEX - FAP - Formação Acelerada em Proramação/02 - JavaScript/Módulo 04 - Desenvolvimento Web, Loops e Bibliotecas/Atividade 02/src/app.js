const express = require('express');
const app = express();


app.get('/', function (req, res) {
    return res.json([])
})

app.post('/', function (req, res) {
    return res.json([])
})

app.put('/', function (req, res) {
    return res.json([])
})

app.delete('/', function (req, res) {
    return res.json([])
})

app.listen(3000);