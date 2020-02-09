// gummi.route.js

const express = require('express');
const gummiRoutes = express.Router();

// Require Business model in our routes module
let Gummi = require('./gummi.model');

// Defined store route
gummiRoutes.route('/add').post(function (req, res) {
  let gummi = new Gummi(req.body);
  gummi.save()
    .then(gummi => {
      res.status(200).json({'gummi': 'gummi in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
gummiRoutes.route('/').get(function (req, res) {
    Gummi.find(function(err, gummis){
    if(err){
      console.log(err);
    }
    else {
      res.json(gummis);
    }
  });
});

// Defined edit route
gummiRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Gummi.findById(id, function (err, gummi){
      res.json(gummi);
  });
});

//  Defined update route
gummiRoutes.route('/update/:id').post(function (req, res) {
    Gummi.findById(req.params.id, function(err, gummi) {
    if (!gummi)
      res.status(404).send("data is not found");
    else {
        gummi.name = req.body.name;
        gummi.owner = req.body.owner;
        gummi.make_a_wish = req.body.make_a_wish;

        gummi.save().then(gummi => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
gummiRoutes.route('/delete/:id').get(function (req, res) {
    Gummi.findByIdAndRemove({_id: req.params.id}, function(err, gummi){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = gummiRoutes;