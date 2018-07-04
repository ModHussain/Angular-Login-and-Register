var express = require('express');
//var validator = require('validator');
var router = express.Router();
var db=require("../db.js")

/**
 * Validate the sign up form
 *
 * @param {object} payload - the HTTP body message
 * @returns {object} The result of validation. Object contains a boolean validation result,
 *                   errors tips, and a global message for the whole form.
 */
// function validateSignupForm(payload) {
//   const errors = {};
//   let isFormValid = true;
//   let message = '';

//   if (!payload || typeof payload.email !== 'string' || !validator.isEmail(payload.email)) {
//     isFormValid = false;
//     errors.email = 'Please provide a correct email address.';
//   }

//   if (!payload || typeof payload.password !== 'string' || payload.password.trim().length < 8) {
//     isFormValid = false;
//     errors.password = 'Password must have at least 8 characters.';
//   }

//   if (!payload || typeof payload.name !== 'string' || payload.name.trim().length === 0) {
//     isFormValid = false;
//     errors.name = 'Please provide your name.';
//   }

//   if (!isFormValid) {
//     message = 'Check the form for errors.';
//   }

//   return {
//     success: isFormValid,
//     message,
//     errors
//   };
// }



router.route('/').get(function(req,res){
    db.User.find(function(err,users){
      if (err)
      res.status(500).json('INTERNA SERVER ERRORw' + JSON.stringify(err));
      res.status(200).json(users);
    })
  })


router.route('/:userid')
    .get(function(req,res){
      db.User.find(
      {_id:req.params.userid},function(err,user){
       if (err)
       res.status(500).json('INTERNAL SERVER ERROR');
       res.status(200).json(user);
      })
    })

router.route('/login')
      .post(function(req,res){
          var email=req.body.email;
          var password=req.body.password;
          
          db.User.findOne({email:email},function(err,use){
            if(err)
            res.status(500).json('INTERNAL SERVER ERRO');
            if(use){
              if(use.password===password){
                res.status(200).json(use);
              }
              else {
                res.status(200).json("Incorrectusername password");
              }
            }
            else {
              res.status(200).json("Username not found");
            }

          });
      })

//Signup
router.route('/register').post(function(req,res){
                var user = new db.User(req.body);
              user.save(function(err,user){
                if(err)
                res.status(500).json('INTERNAL SERVER ERROR');
                res.status(200).json(user);
              })
            })

//Forgot
router.route('/forgot')
     .post(function(req,res){
                      var user = new db.User(req.body);
                      user.save(function(err,user){
                        if(err)
                        res.status(500).json('INTERNAL SERVER ERROR');
                        res.status(200).json(user);
                      });

                  })


module.exports = router;