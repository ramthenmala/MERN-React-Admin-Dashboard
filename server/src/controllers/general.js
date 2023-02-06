import User from "../models/User.js";

const getUser = async (req, res) => {
    try {
        const {id}= req.params;
        const user = await User.findById(id);
        res.send200().json(user)
    } catch (error) {
        res.status(404).json({ msg: error.msg })
    }
}

export default getUser