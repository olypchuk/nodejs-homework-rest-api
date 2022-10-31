const { User } = require('../../models/users')

const logout = async (req, res, next) => {
const {_id}=req.user
    const user = await User.findByIdAndUpdate(_id, { token:" " });

    if (!user) {
    return res.status(404).json({ message: 'User not found' });
    }
    res.status(204).json({ message:"Logout successful"})
}
module.exports =logout