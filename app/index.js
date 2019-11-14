const express = require('express')
const app = new express()

const bodyParser = require('body-parser');
const urlEncoded = bodyParser.json();

const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://ren_231:James2323@cluster0-lsrmw.gcp.mongodb.net/test?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

const cors = require('cors');
app.use(cors());

const User = mongoose.model('user', {
    name: String,
    age: Number

});

app.use(express.static(__dirname + '/dist/app'));

app.get('/', (req, res) => {
    res.sendfile(__dirname + '/dist/app/index.html')
})

app.get('/user', (req, res) => {
    User.find({}, (err, data) => {

        if (err) res.json({ "msg": "invalid Request" });
        res.json(data);
    });

});

app.post('/user', urlEncoded, (req, res) => {
    var User = new User({
        name: req.body.name,
        age: req.body.age


    });
    User.save((err, data) => {
        if (err) res.jnson({ "msg": "Invalid Request" });
        res.json(data);


    });
});

const PORT = process.env.PORT | 8080;
app.listen(PORT, (err) => {
    console.log(`Server running at localhost:${PORT}`);
});

