const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

const todos = require('./routes/api/todos');

const db = require('./config').mongoURI;

const PORT = 5000;

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(()=> console.log("Connected to MongoDB"))
    .catch(err => console.log(err));

app.use(bodyParser.json());

app.use('/api', todos);

app.listen(PORT, () => {
    console.log(`Server started on PORT ${PORT}`);
});