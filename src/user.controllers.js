const User = require('./user.model.js');

exports.findAll = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch(err) {
        res.status(500).send({
            message: err.message || "unexpected error while fetching users"
        });
    }
};

exports.findOne = async (req, res) => {

    try {
        const user = await User.findById(req.params.id);
        if(!user) {
            res.status(404).send({
                message: "user not found with id " + req.params.id
            });            
        } else {
            res.status(200).send(user);
        }
    } catch(err) {
        if(err.kind === 'ObjectId') {
            res.status(404).send({
                message: "user not found with id " + req.params.id
            });                
        } else {
            res.status(500).send({
                message: err.message || "unexpected error while getting user with id " + req.params.id
            });
        }
    }
};

exports.create = async (req, res) => {

    const user = new User(req.body);

    try {
        const data = await user.save();
        res.status(201).send(data);
    } catch(err) {
        if (err.code === 11000 || err.code === 11001) {
            res.status(400).send({message: 'email already exists'})
        } else {
            res.status(500).send({
                message: err.message || "unexpected error while creating new user"
            });
        }
    }
};

exports.update = async (req, res) => {

    try {
        const user = await User.findById(req.params.id);
        if(!user) {
            res.status(404).send({
                message: "user not found with id " + req.params.id
            });
        } else {
            Object.assign(user, req.body);
            const data = await user.save();
            res.status(200).send(data);
        }
    } catch(err) {
        if(err.kind === 'ObjectId') {
            res.status(404).send({
                message: "user not found with id " + req.params.id
            });                
        } else if (err.code === 11000 || err.code === 11001) {
            res.status(400).send({message: 'email already exists'})
        } else {
            res.status(500).send({
                message: err.message || "unexpected error while updating user with id " + req.params.id
            });
        }
    }
};

exports.delete = async (req, res) => {

    try {
        const user = await User.findByIdAndRemove(req.params.id)
        if(!user) {
            res.status(404).send({
                message: "user not found with id " + req.params.id
            });
        } else {
            res.status(204).send();
        }
    } catch(err) {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            res.status(404).send({
                message: "user not found with id " + req.params.id
            });                
        } else {
            res.status(500).send({
                message: err.message || "unexpected error while deleting user with id " + req.params.id
            });
        }
    }
};