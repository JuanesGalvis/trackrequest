const express = require('express');
const app = express();
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const CORS = require('cors');

app.use(CORS());

app.get('/image', async (req, res) => {
    const response = await fetch("https://sheetdb.io/api/v1/ljm92ewo6pw7e", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"data": [{"Fecha": new Date().toLocaleString('es-ES', {
            timeZone: 'America/Bogota'
        })}]})
    })
    console.log(response);
    res.sendFile(__dirname+'/image.png');
})

app.listen(process.env.PORT, () => {
    console.log("Servidor corriendo en el puerto "+process.env.PORT);
})