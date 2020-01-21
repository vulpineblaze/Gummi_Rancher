

const express = require('express');
// const app = express();
const gummiRoutes = express.Router();

// Require gummi model in our routes module
let Gummi = require('../models/Gummi');
// let Status = require('../models/Status');
// let Corr = require('../models/Corr');
// let Acl = require('../models/Acl');

// Defined store route
gummiRoutes.route('/add').post(function (req, res) {
  // console.log("/add");
  let gummi = new Gummi(req.body);

  var myBadHash = genBadHash(gummi.GummiMakeAWish);
  console.log("myBadHash is: "+myBadHash);


  gummi.GummiPrimary = gummiPickType(parseInt(myBadHash.slice(-9, -7))%3+1);
  gummi.GummiSecondary = gummiPickType(parseInt(myBadHash.slice(-19, -17))%3+1);

  gummi.save()
    .then(gummi => {
      res.status(200).json({'Gummi': 'Gummi has been added successfully'});
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});



// Defined get data(index or listing) route
gummiRoutes.route('/').get(function (req, res) {
  Gummi.find({}).exec((err, gummis) => {
    if (err) return console.log(err)

    res.json(gummis);    
  });
});

// // Defined get data(index or listing) route
// gummiRoutes.route('/corr/:id').get(function (req, res) {
//   Corr.find({CorrID: req.params.id}).exec((err, corrs) => {
//     if (err) return console.log(err)

//     res.json(corrs);    
//   });
// });


// // Defined get data(index or listing) route
// gummiRoutes.route('/acl/:id').get(function (req, res) {
//   Acl.find({AclID: req.params.id}).exec((err, acls) => {
//     if (err) return console.log(err)

//     res.json(acls);    
//   });
// });

// Defined gummi edit route
gummiRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Gummi.findById(id, function (err, gummi){
      res.json(gummi);
  });
});

//  Defined gummi update route
gummiRoutes.route('/update/:id').post(function (req, res) {
  Gummi.findById(req.params.id, function(err, gummi) {
    if (!gummi)
      res.status(404).send("Record not found");
    else {
      gummi.GummiName = req.body.gummiName;
      // gummi.GummiDescription = req.body.GummiDescription;

      gummi.save().then(gummi => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// //  Defined Corr update route
// gummiRoutes.route('/corr/:id/update').post(function (req, res) {
//   let newCorr = new Corr(req.body);

//   Corr.findById(req.params.id, function(err, corr) {
//     if (!corr){
//       // res.status(404).send("Record not found");
//       newCorr.CorrDateTime = Date.now();
//       newCorr.save()
//         .then(newCorr => {
//           res.status(200).json({'Corr': 'Corr has been added successfully'});
//         })
//         .catch(newCorr => {
//           res.status(400).send("unable to save newCorr to database");
//         });
//     } else {
//       corr.CorrName = req.body.CorrName;
//       corr.CorrDesc = req.body.CorrDesc;
//       corr.CorrLink = req.body.CorrLink;

//       corr.save().then(corr => {
//           res.json('Update complete');
//       })
//       .catch(err => {
//             res.status(400).send("unable to update Corr the database");
//       });
//     }
//   });
// });


// //  Defined Acl update route
// gummiRoutes.route('/acl/:id/update').post(function (req, res) {
//   let newAcl = new Acl(req.body);
//   console.log(req.body);
//   Acl.findById(req.params.id, function(err, acl) {
//     if (!acl){
//       // res.status(404).send("Record not found");
//       newAcl.AclDateTime = Date.now();
//       newAcl.save()
//         .then(newAcl => {
//           res.status(200).json({'Acl': 'Acl has been added successfully'});
//         })
//         .catch(newAcl => {
//           res.status(400).send("unable to save newAcl to database");
//         });
//     } else {
//       acl.AclDesc = req.body.AclDesc;
//       acl.AclLink = req.body.AclLink;
//       acl.AclQty = req.body.AclQty;
//       acl.AclCost = req.body.AclCost;

//       acl.save().then(acl => {
//           res.json('Update complete');
//       })
//       .catch(err => {
//             res.status(400).send("unable to update Acl the database");
//       });
//     }
//   });
// });

// Defined gummi delete | remove | destroy route
gummiRoutes.route('/delete/:id').get(function (req, res) {
    Gummi.findByIdAndRemove({_id: req.params.id}, function(err, gummi){
        if(err) res.json(err);
        else res.json('Successfully Gummi removed');
    });
});


// // Defined Corr delete | remove | destroy route
// gummiRoutes.route('/corr/:id/delete').get(function (req, res) {
//     Corr.findByIdAndRemove({_id: req.params.id}, function(err, corr){
//         if(err) res.json(err);
//         else res.json('Successfully Corr removed');
//     });
// });

// // Defined Acl delete | remove | destroy route
// gummiRoutes.route('/acl/:id/delete').get(function (req, res) {
//     Acl.findByIdAndRemove({_id: req.params.id}, function(err, acl){
//         if(err) res.json(err);
//         else res.json('Successfully Acl removed');
//     });
// });

// //  gummi status 
// gummiRoutes.route('/status/:id/:status').get(function (req, res) {
//     // console.log(req.params.status,req.params.id);
//     gummi.findById(req.params.id, function(err, gummi) {
//     if (!gummi)
//       res.status(404).send("Record not found");
//     else {
//       let status = new Status();

//       status.StatusID = req.params.id;
//       status.StatusName = req.params.status;
//       status.StatusDateTime = Date.now();

//       status.save().then(status => {
//         gummi.gummiStatuses.push(status);
//         gummi.save();
//         console.log(gummi, status);
//         res.json('Update complete');
//       })
//       .catch(err => {
//             res.status(400).send("unable to update the database");
//       });
//     }
//   });
// });

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// function gummiPickPrimary() {
//   var pick = randomIntFromInterval(1,3);
  
//   var i, text;
//   for (i = 0; i < 20; i++) {
//     text += " "+ randomIntFromInterval(1,3) +", ";
//   }
//   console.log(text);

//   var type = "Derp";
//   if(pick == 1){
//     type = "Circle";
//   }else if(pick == 2){
//     type = "Square";
//   }else{
//     type = "Triangle";
//   }
//   return type;
// }

// function gummiPickSecondary(min, max) { 
//   var pick = randomIntFromInterval(1,3);
//   var type = "Derp";
//   if(pick == 1){
//     type = "Circle";
//   }else if(pick == 2){
//     type = "Square";
//   }else{
//     type = "Triangle";
//   }
//   return type;
// }

function gummiPickType(pick) { 
  console.log("Pick is: " + pick);
  if(pick == 1){
    type = "Circle";
  }else if(pick == 2){
    type = "Square";
  }else{
    type = "Triangle";
  }
  return type;
}

function toThiccHex(wish) {
  var pad = randomIntFromInterval(7,11);
  var newStr = "";
  var result = '';
  for (var i=0; i<pad; i++) {
    newStr += wish;
  }
  for (var i=0; i<newStr.length; i++) {
    result += newStr.charCodeAt(i).toString(16) + i ;
  }
  return result;
}

function reduceBadHash(hashInt , digits){
  // console.log("reduceBadHash: "+BigInt(hashInt)+", digits: "+BigInt(hashInt).toString().length);
  BigInt(hashInt);
  if(BigInt(hashInt).toString().length > digits && BigInt(hashInt) > 1){
    hashInt = BigInt(hashInt) / BigInt(randomIntFromInterval(7,11));
    return reduceBadHash(BigInt(hashInt) , digits); 
  }else if(BigInt(hashInt).toString().length < digits && BigInt(hashInt) > 1){
    hashInt = BigInt(hashInt) * BigInt(randomIntFromInterval(7,11));
    return reduceBadHash(BigInt(hashInt) , digits); 
  }else{
    return BigInt(hashInt);
  }
  
}

function genBadHash(wish) {
  var hex = toThiccHex(wish);
  var hashInt = BigInt(parseInt(hex));
  hashInt = reduceBadHash(hashInt, 64);
  hashInt *= randomIntFromInterval(32307,100414);
  hashInt = reduceBadHash(hashInt, 64);
  hashInt *= new Date().getTime();
  hashInt = reduceBadHash(hashInt, 64);
  var myBadHash = hashInt.toString();
  return myBadHash;
}




module.exports = gummiRoutes;