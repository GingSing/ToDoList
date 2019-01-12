const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const todos = require('./routes/api/todos');

const db = process.env.MONGO_URI || require('./config').mongoURI;

const PORT = process.env.PORT || 5000;

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(()=> console.log("Connected to MongoDB"))
    .catch(err => console.log(err));

app.use(bodyParser.json());

app.use('/api', todos);

//Serve static assets if in production
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    
    //Set static folder
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

app.listen(PORT, () => {
    console.log(`Server started on PORT ${PORT}`);
});