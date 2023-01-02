import User from "../models/User.js";

const getUser = async (req, res, next) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.status(404).json({ msg: error.msg })
    }
}

export  default getUser