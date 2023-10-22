const users5= require("../model/users");

module.exports.login = async (req, res) => {
    const {email, password} = req.body;

    const theusers5 = await user.findOne({email, password});

    if (theusers5 !== null) {
        return res.status(200).json(theusers5);
    } else {
        return res.status(400).json({message: "user not found"});
    }
};

module.exports.register = (req, res) => {
    const {username, email, password} = req.body;

    const newusers5 = new users5({
        username,
        email,
        password,
    });
    console.log(newusers5)
    newusers5.save().then(
        () => {
            return res.status(200).json({message: "wlecome  new user"});
        }).catch(
            (err) => {
                return res.status(400).json({message: err.message});
            });
};