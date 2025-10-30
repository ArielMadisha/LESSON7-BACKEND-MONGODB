const Users = require('../Model/Users');


const createUser = async (req, res) => {
    const { name, email, age } = req.body
    try {
        const user = await Users.create({name, email, age})
        res.status(201).json(user)
    } catch (error) {
        res.status(400).json({error : error.message})
    }
}

module.exports = {createUser}