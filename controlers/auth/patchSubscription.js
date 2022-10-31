const {User}=require('../../models/users')
const patchSubscription = async (req, res, next) => {
    const { _id } = req.user;
    const result = await User.findOneAndUpdate({ _id }, req.body, { new: true })
    res.json(result);
 }
module.exports=patchSubscription;