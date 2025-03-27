const user = (req, res) => {
    res.status(200).json({ msg: "USER CALLED" })
}
const user2 = (req, res) => {
    res.status(200).json({ msg: "USER 2 CALLED" })
}


module.exports = { user, user2 }