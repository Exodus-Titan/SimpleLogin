const bcrypt = require('bcrypt');
import { Request, Response } from 'express';
const User = require('../models/User');

const login = async (req: Request, res: Response) => {
    const {email, password} = req.body;
    User.findOne({email}).then((user: any) => {
        if (!user){
            return res.status(404).json({message: 'User not found'});
        }
        bcrypt.compare(password, user.password).then((match: any) => {
            if (match) {
                const {id, name} = user;
                res.status(200).json({message: 'User logged in successfully', user: {id, name}});
            } else {
                res.status(401).json({message: 'Wrong password'});
            }
        });
    });
    
};

module.exports = login;