import { Request, Response } from 'express';
const User = require('../models/User');

const get_user_by_id = async (req: Request, res: Response) => {
    const {userId} = req.params;
    if (userId.length === 24){
        User.findById(userId).then((user: any) => { 
            if (!user){
                return res.status(404).json({message: 'User not found'});
            } else {
                const { _id, password, __v, ...data } = user._doc;
                return res.status(200).json({data});
            }
        });
    }else {
        res.status(400).json({message: 'You are sending an invalid id'});
    }
};

module.exports = get_user_by_id;