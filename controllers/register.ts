import {Request, Response} from 'express';
const bcrypt = require('bcrypt');
const User = require('../models/User');


const register = async (req: Request, res: Response) => {
    const {name, email, password} = req.body;
    User.findOne({email}).then((user: any) => {
        if (user){
            return res.status(400).json({message: 'User already exists'});
        }else if (!name || !email || !password){
            return res.status(400).json({message: 'Please enter all fields'});
        }else {
            bcrypt.hash(password, 10, (err: any, hash: any) => {
                if (err) res.status(500).json({message: 'Internal server error'});
                else {
                    const newUser = new User({
                        name,
                        email,
                        password: hash,
                    });
                    newUser.save().then((user: any) => {
                        res.status(200).json({message: 'User created successfully', user});
                    }).catch((err: any) => {
                        console.log(err);
                    });
                }
            });
        }
    });
};

module.exports = register;