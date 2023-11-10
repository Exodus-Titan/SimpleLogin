const express = require('express');
const cors = require('cors');
const database = require('./database/db');
const controllers = require('./controllers/index');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/register', controllers.register);
app.post('/login', controllers.login);
app.get('/user/:userId', controllers.getUserById);

const port = 8000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
    database();
});

module.exports = app;