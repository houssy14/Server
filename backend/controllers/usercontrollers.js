const users = require("../model/users");

module.exports.login = async (req, res) => {
    const {email, password} = req.body;

    const theuser = await users.findOne({email, password});

    if (theuser !== null) {
        return res.status(200).json(theuser);
    } else {
        return res.status(400).json({message: "user not found"});
    }
};

module.exports.register = (req, res) => {
    const {username, email, password} = req.body;

    const newusers = new users({
        username,
        email,
        password,
    });
    console.log(newusers)
    newusers.save().then(
        () => {
            return res.status(200).json({message: "wlecome  new user"});
        }).catch(
            (err) => {
                return res.status(40).json({message: err.message});
            });
};