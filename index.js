const express = require('express');
const app = express();

const CORS = require('cors');

app.use(CORS());

app.get('/image', (req, res) => {
    console.log(req.headers);
    res.sendFile(__dirname+'/image.png');
})

app.listen('3000', () => {
    console.log("Servidor corriendo en el puerto 3000");
})