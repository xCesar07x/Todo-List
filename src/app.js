const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const todoRoutes = require('./routes/todo.routes');
const Todo = require('./models/todo.model');
const db = require('./utils/database');

Todo;

const PORT = 8300;

db.authenticate()
    .then(() => {
        console.log('conexion a base de datos OK');
    })
    .catch((error) => {
        console.log(error);
    });
    
db.sync()
    .then(() => {
        console.log('Base de datos exitosa');
    })
    .catch((error) => {
        console.log(error);
    });

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(todoRoutes);

app.listen(PORT, () => {
    console.log(`Este servidor esta en el puerto ${PORT}`)
})