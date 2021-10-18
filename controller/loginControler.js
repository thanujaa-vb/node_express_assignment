const signupUser = require("../modal/signupUser");
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const storeSignup = async (req, res, next) => {
    signupUser.find({ email: req.body.email })
        .exec()
        .then(user => {
            if (user.length >= 1) {
                return res.status(409).json({
                    message: 'Mail already Exists'
                });
            } else {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        return res.status(500).json({
                            error: err
                        });
                    } else {
                        const user = new signupUser({
                            _id: new mongoose.Types.ObjectId(),
                            email: req.body.email,
                            password: hash
                        });
                        user
                            .save()
                            .then(result => {
                                console.log(result);
                                res.status(500).json({
                                    message: 'user created'
                                });
                            })
                            .catch(err => {
                                console.log(err);
                                res.status(500).json({
                                    error: err
                                });
                            })
                    }
                })


            }
        })
}
const userLogin = async (req, res, next) => {
    signupUser.find({ email: req.body.email })
        .exec()
        .then(user => {
            if (user.length < 1) {
                return res.status(401).json({
                    message: 'Auth failed'
                });
            }
            bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                if (err) {
                    return res.status(401).json({
                        message: 'Auth failed'
                    });
                }
                if (result) {
                    return res.status(200).json({
                        message: 'Auth successful',
                    });
                }
                res.status(401).json({
                    message: 'Auth failed'
                });
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
}

const userLogout = async(req,res)=>{
    res.status(201).send("Logout successful");
}

const deleteSignupUser = async (req, res, next) => {
    signupUser.remove({ _id: req.params.signUpUserId })
        .exec()
        .then(result => {
            res.status(200).json({
                message: "Signup User details deleted"
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
}
module.exports = {
    storeSignup,
    userLogin,
    userLogout,
    deleteSignupUser
};