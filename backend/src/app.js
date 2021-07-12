const express = require('express');
const server = express();
const cors = require('cors');
//Configuraciones
server.set('port', 8080);
server.set('host', 'localhost');
//Middlewares
server.use(express.json());
server.use('/top10', require('./routes/electrodomesticos.js'));
server.use(cors());
//Rutas
server.get('/', function (req, res) {
    res.send('<h1> Hola mundo con Express </h1>')
});
module.exports = server;