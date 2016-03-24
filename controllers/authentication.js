const mongoose = require('mongoose');
const User = require('../models/user');

exports.signup = function(req,res,next){
  const email = req.body.email;
  const password = req.body.password

  User.findOne({email: email}, function(err, existingUser){
    if(err){
      return next("error connecting to database", err)
    }

    if(existingUser){
      return res.status(422).send({error: 'Email already taken!'})
    }

    const user = new User({
      email: email,
      password: password
    });

    user.save(function(err){
      if(err){
        return next('could not save in db!', err)
      }

      res.json({success: true});
    });
  })
}
