
const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    config = require('./DB');

   const gummiRoute = require('./routes/gummi.route');
   // const ascoRoute = require('./routes/asco.route');

    mongoose.Promise = global.Promise;
    mongoose.connect(config.DB, { useNewUrlParser: true }).then(
      () => {console.log('Database is connected') },
      err => { console.log('Can not connect to the database'+ err)}
    );

    const app = express();
    app.use(bodyParser.json());
    app.use(cors());
    // app.use('/ascos', ascoRoute);
    app.use('/gummis', gummiRoute);

    const port = process.env.PORT || 4001;

    const server = app.listen(port, function(){
     console.log('Listening on port ' + port);
    });