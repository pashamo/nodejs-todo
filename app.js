let express = require('express');
let app = express();
let mongoose = require('mongoose');
let config = require('./config');
let setupController = require('./controller/setupController');

let port = process.env.PORT || 4000;

app.set('view engine', 'ejs');
app.use('/assets', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.end("Hello");
});

mongoose.connect(
    config.getDbConnectString(), 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }
);
setupController(app);

app.listen(port);